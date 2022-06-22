import useSWR from "swr";
import axios from 'axios'
import { CryptoState } from "../context/cryptoContext"
import { useContext } from "react";
import Crypto from "./crypto"
import Loading from './loading';

function TopTenCoins() {

  const { currency } = useContext(CryptoState)

  const address = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;


  const fetcher = url => axios.get(url).then(res => res.data)

  const { data, error } = useSWR(address, fetcher)

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;


  return (
    <div>
      <div className="p-3 mt-3 mx-2 md:mx-16 w-inherit">
           <div className="flex justify-between items-center mb-3 font-bold text-lg sm:text-2xl dark:text-gray-200">
                 <h1>Top 10 Cryptocurrencies</h1>
                 <a className="text-sm sm:text-xl cursor-pointer" onClick={() =>    router.push("/cryptoListPage")}>See All</a>
             </div> 
             <div className="flex hide space-x-3 md:space-x-7 w-inherit">
               {data? (data?.splice(0, 10).map((crypto) =>  (
                      <Crypto data={data} 
                      key={crypto.id}
                      id={crypto.id}
                      name={crypto.name}
                      rank={crypto.rank}
                      image={crypto.image}
                      price={crypto.current_price}
                      percent={crypto.market_cap_change_percentage_24h}
                      />
                  )
              )): (
                <Loading /> 
              )} 
            </div> 

        </div>
    </div>
  )
}

export default TopTenCoins;