import useSWR from "swr";
import axios from 'axios'
import { CryptoState } from "../context/cryptoContext"
import { useContext, useState } from "react";
import FullCryptoListComponent from './cryptoFullListComponent';
import Pagination from '@mui/material/Pagination';
import Loader from './loading';


const CryproList = () => {

    const { currency } = useContext(CryptoState)
    const [page, setPage] = useState(1)

    const address = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=${page}&sparkline=false`;  
  
  
    const fetcher = url => axios.get(url).then(res => res.data)
  
    const { data, error } = useSWR(address, fetcher)
  
    if (error) <p>Loading failed...</p>;

  return (
    <div className=" bg-inherit dark:bg-gray-800 w-screen lg:pl-10  dark:text-gray-100">
          <div className="sm:px-10 md:px-5 lg:px-12 px-4  w-inherit">
          <div className="lg:py-3 hidden lg:flex w-inherit">
            <div className="flex items-center space-x-2 lg:py-3 relative lg py-2 border-gray-600 w-full font-bold uppercase">
                <h2 className="absolute top-3 right-2 lg:relative lg:top-0 lg:right-0 w-inherit">fav</h2>
                <div  className="flex items-center w-[36%] border-black">
                    <div className="w-full flex items-center">
                    <div className="flex items-center lg:w-[30%]">
                        <div className="w-full flex items-center">
                            <h2 className="flex lg:w-[50%] lg:px-3">#</h2>
                            <div className="lg:w-[50%] ml-3">
                                <span className=" w-7 h-7 lg:w-10 lg:h-10">Icon</span> 
                            </div>
                        </div>   
                    </div>
                    <div className="flex flex-col lg:flex-row lg:w-[70%] lg:items-center ml-6 text-lg font-semibold">
                            <h1 className="text-[17px] capitalize">Name</h1>
                            <div className="flex items-center text-xs lg:ml space-x-2">
                                <span className="font-medium px-1 rounded"></span>
                            </div>
                    </div>
                    </div>
                </div>
                <div className="flex w-[55%] space-x-6 px-3">
                    <div className="w-full flex items-center">
                        <div className="lg:flex items-center lg:w-[65%]">
                            <div className="flex flex-col lg:flex-row w-full items-center">
                              <h2 className="text-[14px] mr-8 lg:w-[35%] lg:text-[16px]">Price</h2>
                                <h2 className="flex items-center text-[12px] lg:w-[10%]">%</h2>
                                <h2 className="text-[10px] lg:text-[12px] lg:w-[40%] px-1 rounded dark:bg-gray-400 dark:text-gray-900 dark:lg:bg-inherit dark:lg:text-inherit ml-5">Market cap</h2>
                            </div>
                        </div>
                        <div className="flex items-center lg:w-[35%]">
                            <div className="w-full flex text-[14px]">
                                <h2 className="text-[12px] mx-2 w-[75%]">Market cap 24h</h2>
                                <h2 className="text-[12px] w-[15%] ml-2">Ath</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          </div>
         
          <div className="sm:px-10 md:px-5 lg:px-10 px-2">
            {data? ( data?.map((crypto) =>  (
                     <FullCryptoListComponent data={data} 
                        key={crypto.id}
                        id={crypto.id}
                        name={crypto.name}
                        rank={crypto.market_cap_rank}
                        image={crypto.image}
                        price={crypto.current_price}
                        percent={crypto.market_cap_change_percentage_24h}
                        coinSymbol={crypto.symbol}
                        marketCap={crypto.market_cap}
                        marketCapDaily={crypto.market_cap_change_24h}
                        allTimeHigh={crypto.ath}
                    />

                    )
                )) : (
                    <Loader />
                )} 
          </div>
          <div className="mb-14 pb-16 mt-6 lg:pb-20">
                <Pagination
                    count={data && data?.length}
                    className="pb-10 w-inherit flex justify-center"
                    shape="rounded"
                    
                    onChange={(_, value) => {
                        setPage(value)
                    }}
                />
            </div>
    </div>
  )
}

export default CryproList