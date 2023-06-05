import React, {useState} from "react";
import CustomDonationInput from "./CustomDonationInput";
import StripeTestCards from "./StripeTestCards";

import getStripe from "@/utils/get-stripe";
import { fetchPostJSON } from "@/utils/api-helpers";
import * as config from '../config'
import { formatAmountForDisplay } from "@/utils/stripe-helpers";

const CheckOutForm = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [input, setInput] = useState({
        customDonation: Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP)
    })

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInput({
            ...input,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        setLoading(true)
        const response = await fetchPostJSON('/api/checkout_sessions', {
            amount: input.customDonation,
            mode:'payment'
        })
        if(response.statusCode === 500) {
            console.log('err', response.message);
            return 
        }

        const stripe = await getStripe()
        const {error} = await stripe!.redirectToCheckout({
            sessionId: response.id
        })
        console.warn(error.message)
        setLoading(false)
    }

  return (
    <form onSubmit={handleSubmit}>
        <CustomDonationInput
        className="checkout-style"
        name={'customDonation'}
        value={input.customDonation}
        min={config.MIN_AMOUNT}
        max={config.MAX_AMOUNT}
        step={config.AMOUNT_STEP}
        currency={config.CURRENCY}
        onChange={handleInputChange}
        />
        <StripeTestCards/>
        <button
        className="checkout-style-background"
        type="submit"
        disabled={loading}
        >
            Donate {formatAmountForDisplay(input.customDonation, config.CURRENCY)}
        </button>
    </form>
  )
}

export default CheckOutForm