import useSWR from "swr";
import axios from 'axios'
import { CryptoState } from "../context/cryptoContext"
import { useContext } from "react";
import CryptoLosses from './cryptoLosses';
import { useRouter } from 'next/router'
import CryptoGains from './cryptoGain';
import Loading from './loading';



function TopGainAndLoss (){

    const { currency } = useContext(CryptoState)
    const router = useRouter();

    const address = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
  
  
    const fetcher = url => axios.get(url).then(res => res.data)
  
    const { data, error } = useSWR(address, fetcher)
  
    if (error) <p>Loading failed...</p>;
    if (!data) <Loading />;

    return(
        <div className="p-3 mx-2 md:mx-16">
            <div className="mb-2">
                <div className="flex justify-between items-center font-bold text-lg sm:text-2xl dark:text-gray-200">
                    <h1>Top 100 Gains and Losses </h1>
                    <a className="text-sm sm:text-xl cursor-pointer" onClick={() => router.push("/cryptoListPage")}>See All</a>
                </div>
            </div>
            {data? <div className="flex hide space-x-3 md:space-x-7 px-1">
            {data?.sort((a, b) => b.market_cap_change_percentage_24h - a.market_cap_change_percentage_24h).slice(0, 5).map((crypto) => {
          return (
            <CryptoGains data={data} 
                key={crypto.id}
                name={crypto.name}
                rank={crypto.rank}
                image={crypto.image}
                price={crypto.current_price}
                percent={crypto.market_cap_change_percentage_24h}
            />
          )
            })} 
           {data?.sort((a, b) => a.market_cap_change_percentage_24h - b.market_cap_change_percentage_24h).slice(0, 5).map((crypto) => {
          return (
            <CryptoLosses data={data} 
                key={crypto.id}
                name={crypto.name}
                rank={crypto.rank}
                image={crypto.image}
                price={crypto.current_price}
                percent={crypto.market_cap_change_percentage_24h}
            />
          )
            })}
            </div>: <Loading />}
        </div>
    )
}
export default TopGainAndLoss