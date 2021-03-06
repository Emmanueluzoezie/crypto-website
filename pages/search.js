import Head from 'next/head'
import Footer from "../components/footer"
import SearchCoinComponent from "../components/searching"

const Search = () => {
    return (
      <div className="bg-inherit dark:bg-gray-900 pb-5 h-screen w-screen">
      <Head>
        <title>Crypto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <SearchCoinComponent />
      <div className="mb-32">
          <h2 className="cursor-pointer text-green-100 font-semibold text-xl mt-10" > .</h2>
      </div>

        <Footer />
      </div>
    )
  }
  
  export default Search