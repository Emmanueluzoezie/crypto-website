import Head from 'next/head'
import Navbar from "../components/Navbar"
import Footer from '../components/footer'
import CryproList from '../components/cryptoFullList'

export default function coinListPage() {
  return (
    <div className='dark:bg-gray-800 h-screen'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <CryproList />
      <Footer />
    </div>
  )
}