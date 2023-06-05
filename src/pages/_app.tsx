import { AppProps } from 'next/app'
import '../../styles.css'
import { SignerProvider } from '@/state/signer'

function MyApp({ Component, pageProps }: AppProps) {
  return( 
  <SignerProvider>
  <Component {...pageProps} />
  </SignerProvider>)
}

export default MyApp