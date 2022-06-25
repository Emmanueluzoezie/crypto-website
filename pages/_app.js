import '../styles/globals.css'  
import Head from "next/head"
import { Provider } from "react-redux"
import {CryptoContext} from "../context/cryptoContext"
import { store } from '../app/store'
 

function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    </Head>



        <Provider store={store}>
          <CryptoContext>
            <Component {...pageProps} />
          </CryptoContext> 
        </Provider>
    
    </>
    )
}

export default MyApp