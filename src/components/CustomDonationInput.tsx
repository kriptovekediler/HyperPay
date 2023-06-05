import React from 'react'
import { formatAmountForDisplay } from '@/utils/stripe-helpers'

type Props = {
    name: string
    value: number
    min: number
    max: number
    currency: string
    step: number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    className: string
}

const CustomDonationInput: React.FC<Props> = (props: Props) => {
  return (
    <label>
        Custom payment amount ({formatAmountForDisplay(props.min, props.currency)})-
        {formatAmountForDisplay(props.max, props.currency)}:
        <input 
        type="number"
        className={props.className}
        name={props.name}
        value={props.value}
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={props.onChange}
        ></input>
        <input
        type="range"
        name={props.name}
        value={props.value}
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={props.onChange}
        >
        </input>
    </label>
  )
}

export default CustomDonationInput
