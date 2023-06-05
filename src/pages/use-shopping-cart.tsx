import Cart from '@/components/Cart'
import CartSummary from '@/components/CartSummary'
import Layout from '@/components/Layout'
import Products from '@/components/Products'
import { NextPage } from 'next'
import React from 'react'

const DonatePage: NextPage = () => {
  return (
    <Layout title='Shopping Cart | Marketplace'>
        <div className='page-container'>
            <h1>Shopping Cart</h1>
            <p>
                Powered by the {''}
                <a href="https://useshoppingcart.com">use-shopping-cart</a> React hooks library.
            </p>
            <Cart>
            <CartSummary/>
            <Products/>
            </Cart>
        </div>
    </Layout>
  )
}

export default DonatePage