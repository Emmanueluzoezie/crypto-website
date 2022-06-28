import Head from "next/head"
import Footer from '../components/footer'
import DiscoverMenu from "../components/discoveringMenu"
import { CryptoState } from "../context/cryptoContext";
import { MenuItem, Select} from '@mui/material'
import { useContext} from "react"

const TrendingFull = () => {
    const { currency, setCurrency } = useContext(CryptoState);

      return (
        <div className="h-screen dark:bg-gray-900 bg-green-100 relative">
            <Head>
            <title>Crypto</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <DiscoverMenu />
            <h1 className="text-center text-2xl md:text-4xl font-bold">Page in progress</h1>
            <Footer />

        </div>
  )
};

export default TrendingFull;