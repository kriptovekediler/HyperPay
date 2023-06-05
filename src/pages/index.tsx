import Layout from '@/components/Layout'
import { NextPage } from 'next'
import Link from 'next/link'

const IndexPage: NextPage = () => {
  return(
    <Layout title='AnyPay with Stripe'>
      <ul className='card-list'>
        <li>
          <Link href='/donate-with-checkout' className='card checkout-style-background'>
            <h2 className='bottom'> Pay With ERC-20</h2>
            <img src="/checkout-one-time-payments.svg" />
          </Link>
        </li>
        <li>
          <Link href='/buy-crypto' className='card elements-style-background'>
            <h2 className='bottom'>Buy Crypto</h2>
            <img src="/elements-card-payment.svg"/>
          </Link>
        </li>
        <li>
          <Link
            href="/use-shopping-cart"
            className="card cart-style-background"
          >
            <h2 className="bottom">Use Shopping Cart</h2>
            <img src="/use-shopping-cart.png" />
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default IndexPage