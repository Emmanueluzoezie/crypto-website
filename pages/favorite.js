import Head from "next/head"
import Footer from '../components/footer'
import { selectCryptoCoins } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const Favorite = () => {

  const cryptoCoins = useSelector(selectCryptoCoins)
  console.log(cryptoCoins)

      return (
        <div className="bg-inherit dark:bg-gray-800 w-screen h-screen dark:text-gray-100">
        <Head>
          <title>Crypto</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
        <Footer />

    </div>
  )
};

export default Favorite;