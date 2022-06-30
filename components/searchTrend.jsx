import useSWR from "swr";
import axios from 'axios'
import { CryptoState } from "../context/cryptoContext"
import { useContext } from "react";
import Loading from './loading';
import SearchList from "./searchListComponent"


function SeachTrending() {

  const { currency } = useContext(CryptoState)

  const address = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`;


  const fetcher = url => axios.get(url).then(res => res.data)

  const { data, error } = useSWR(address, fetcher)

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;


  return (
    <div className="w-inherit dark:bg-gray-900 bg-inherit">
      <div className="p-3 mt-3 mx-2 md:mx-16 w-inherit">
           <div className="flex justify-between items-center mb-3 font-bold text-lg sm:text-2xl dark:text-white">
                 <h1 className="uppercase">Trending coins</h1>
             </div>
             <div className="">
               {data? ( data?.splice(0, 5).map((crypto) =>  (
                      <SearchList data={data} 
                      key={crypto.id}
                      id={crypto.id}
                      name={crypto.name}
                      rank={crypto.market_cap_rank}
                      image={crypto.image}
                      price={crypto.current_price}
                      percent={crypto.market_cap_change_percentage_24h}
                      coinSymbol={crypto.symbol}
                      marketCap={crypto.market_cap}market_cap_change_24h
                      />

                  )
              )) : (
                  <Loading />
              )} 
            </div>
        </div>
    </div>
  )
}

export default SeachTrending;