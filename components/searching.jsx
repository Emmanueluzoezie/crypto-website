import SearchIcon from '@mui/icons-material/Search'
import useSWR from "swr";
import axios from 'axios'
import { useContext, useState } from "react";
import { CryptoState } from "../context/cryptoContext"
import CloseIcon from '@mui/icons-material/Close';
import SearchList from "./searchListComponent"
import { MenuItem, Select} from '@mui/material'
import SeachTrending from "./searchTrend"


const SearchCoinComponent = () => {

    const [text, setText] = useState("")
    const { currency, setCurrency } = useContext(CryptoState)

    const fetcher = (url) => {
      return fetch(url).then((r) => r.json());
    };

    const arrayFetcher = ({ urlArray }) => {
      return Promise.all(urlArray.map(fetcher));
    };

      let urlArray = [];
      for (let i = 1; i < 20; i++) {
        urlArray.push(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=${i}&sparkline=false`);
      }

      const { data } = useSWR({ urlArray }, arrayFetcher);

  return (
    <div className="bg-inherit w-screen md:px-16 pt-4">
        <div className='flex items-center  mx-6 mb-10 sm:mx-10'>
            <div className='flex-1'>
              <div className="bg-white shadow-gray-400 shadow-2xl dark:shadow-none rounded-full flex sm:mx-10 space-x-2 items-center py-2 px-3" >
                <SearchIcon className='ml-2 text-gray-700'  />
                <input  className='flex-1 text-[19px] md:text-[22px] outline-none'
                type="text"
                onChange={(e) => setText(e.target.value)}
                />
                {text? (<CloseIcon  className='cursor-pointer mr-4' />) : ("")}
              </div>
            </div>
        </div>
        <div className="px-6 sm:px-10">
          {data && data.flat().filter(coin => {
            if (text === '') {
              return ""

             } else if (coin.name.toLowerCase().includes(text.toLowerCase())) {
               return coin;
             }
           }).map((coin) => {

             return (
               <SearchList data={data}
                  key={coin.id}
                  id={coin.id}
                  name={coin.name}
                  rank={coin.market_cap_rank}
                  image={coin.image}
                  price={coin.current_price}
                  percent={coin.market_cap_change_percentage_24h}
                  coinSymbol={coin.symbol}
                  marketCap={coin.market_cap}
                  marketCapDaily={coin.market_cap_change_24h}
               />
           )
           })}
         </div>
         <SeachTrending />ß
         <div className="mb-10 md:mb-20">
           .
          </div>
    </div>
  )

}

export default SearchCoinComponent