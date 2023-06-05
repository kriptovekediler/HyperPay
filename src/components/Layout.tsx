import React, {ReactNode} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import ConnectWallet from './ConnectWallet'

type Props = {
    children: ReactNode
    title?: string
}

const Layout = ({
    children,
    title= 'AnyPay with Stripe'
}: Props) => (
    <>
    <Head>
        <title>{title}</title>
        <meta charSet='utf-8'/>
        <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
        <meta name='twitter:card' content='summary_large_image'/>
        <meta name='twitter:site' content='@thorwebdev'/>
        <meta name='twitter:title' content='AnyPay With Stripe'/>
        <meta 
        name='twitter:description'
        content='Pay anyway you want as crypto or credit card'
        />
        <meta 
        name='twitter:image'
        content='https://nextjs-typescript-react-stripe-js.vercel.app/social_card.png'
        />
    </Head>
    <div className='container'>
        <header>
            <ConnectWallet/>
            <div className='header-content'>
                <Link href='/' className='logo'>
                    <img src="/hype_logo-01.png" width={75}/>
                </Link>
                <div>
                </div>
                <div>
                </div>
                <h1>
                    <span className='light'>Pay With Stripe</span>
                    <br/>
                    AnyPay
                </h1>
            </div>
        </header>
        {children}
    </div>
    <div className='banner'>
        <span>
            This is {' '}
            <a href="https://github.com/kriptovekediler"
            target='_blank'
            rel='noopener noreferrer'>
                AnyPay
            </a>
            .{' View code on '}
            <a href="https://github.com/kriptovekediler"
            target='_blank'
            rel='noopener noreferrer'>
                Github
            </a>
            .
        </span>
    </div>
    </>
)

export default Layout