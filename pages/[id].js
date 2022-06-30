import Image from "next/image" 
import Link from "next/link" 
import axios from "axios";
import useSWR from "swr";
import { useState, useContext } from "react";
import Loader from "../components/loading"
import { useRouter } from 'next/router'
import SearchIcon from '@mui/icons-material/Search'
import CoinInfo from "../components/coinInfo";
import { CryptoState } from "../context/cryptoContext"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Avatar } from '@mui/material'
import NumberFormat from 'react-number-format';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


const CoinPage = () => {
  const router = useRouter()
  const pid = router.query
  const coinId = pid.id;
  const { currency, symbol } = useContext(CryptoState)  
  
   const address = `https://api.coingecko.com/api/v3/coins/${coinId}`;

   const fetcher = url => axios.get(url).then(res => res.data)
  
    const { data, error } = useSWR(address, fetcher)

    function getStatusText(change){
      if(change < 0){
        return "RED"
      }else if(change > 0){
        return "GREEN"
      }
      return "green"
   }

  return (
    <div className="p-2 dark:text-white dark:bg-gray-800 ">
       {!data && <Loader />}
       <div className="lg:hidden">
       {data &&
          <div className="p-2">
              <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <KeyboardBackspaceIcon className="cursor-pointer" onClick={() => router.back()}/>
                    <div className="flex items-center space-x-2">
                      <Avatar src={data.image?.thumb} alt={data.id}/> 
                      <strong className="uppercase text-[20px] dark:text-white">{data.symbol}</strong>
                      <span className="dark:text-white bg-gray-200 px-1 rounded-md text-[14px]">#{data.market_cap_rank}</span>
                    </div>
                  </div>
                  <SearchIcon className="md:text-4xl h-7 cursor-pointer text-gray-600 hover:text-gray-800 dark:dark-color dark:hover:text-gray-400" onClick={() => router.push("/search")}/>
              </div>
          </div>
       }
       {data && <div className="p-2">
            <div>
                <div className="mb-8">
                  <strong className="">{data.name}</strong>
                  <div className="flex justify-between items-center mb-8">
                  <NumberFormat className="font-bold text-2xl" value={`${data.market_data.current_price.usd}`} displayType={'text'} thousandSeparator={true} prefix="$" />
                    <div className="text-[18px] text-white font-bold rounded-md flex items-center px-2 " style={{ backgroundColor:getStatusText(data.market_data.price_change_percentage_24h_in_currency.usd)}}>
                          {data.market_data.price_change_percentage_24h_in_currency.usd < 0? (<ArrowDropDownIcon />) : (<ArrowDropUpIcon />)}
                          <h1>{Number(data.market_data.price_change_percentage_24h_in_currency.usd).toFixed(3)}</h1>
                      </div>
                  </div>
                  <CoinInfo coinId={coinId} />
                </div>
                <div className='p-2'>
                    <strong className='text-2xl'>Statistic</strong>
                    <div className='my-2'>
                       <div className="flex justify-between items-center my-2  shadow-xl py-4 px-4">
                          <span className='font-semibold'>Current price</span>
                          <strong>${data.market_data.current_price.usd}</strong>
                       </div>
                       <div className="flex justify-between items-center shadow-xl py-4 px-4">
                          <span className='font-semibold'>Price change 24h</span>
                          <strong>${data.market_data.price_change_percentage_24h_in_currency.usd}</strong>
                       </div>
                        <div className="flex justify-between items-center shadow-xl py-4 px-4">
                          <span className='font-semibold'>All time high</span>
                          <strong>${data.market_data.ath.usd}</strong>
                       </div>
                       <div className="flex justify-between items-center shadow-xl py-4 px-4">
                          <span className='font-semibold'>All time high date</span>
                          <strong>{data.market_data.ath_date.usd}</strong>
                       </div>
                       <div className="flex justify-between items-center shadow-xl py-4 px-4">
                          <span className='font-semibold'>All time high percentage</span>
                          <strong>${data.market_data.ath_change_percentage.usd}</strong>
                       </div>
                       <div className="flex justify-between items-center shadow-xl py-4 px-4">
                          <span className='font-semibold'>Market cap</span>
                          <strong>${data.market_data.ath.usd}</strong>
                       </div>
                       <div className="flex justify-between items-center shadow-xl py-4 px-4">
                          <span className='font-semibold'>fully dulited market cap</span>
                          <strong>${data.market_data.ath.usd}</strong>
                       </div>
                       <div className="flex justify-between items-center shadow-xl py-4 px-4">
                          <span className='font-semibold'>Trading volume 24h</span>
                          <strong>${data.market_data.ath.usd}</strong>
                       </div>
                       <div className="flex justify-between items-center shadow-xl py-4 px-4">
                          <span className='font-semibold'>volume</span>
                          <strong>${data.market_data.ath.usd}</strong>
                       </div>
                    </div>
                </div>

                <div className='mt-8 w-full px-4'>
                  <div className="w-full border-b-2 p-3">
                    <strong className='text-2xl'>About {data.name} ({data.symbol})</strong>
                  </div>
                  <h1 className='text-xl my-4 pl-2 font-semibold'>what is {data.name}</h1>

                  <p>{data.description.en.replace(/<\/?[^>]+>/gi, '')}.</p>
                </div>
                <div className='mt-3 w-inherit px-4'>
                  <div className="w-full p-3">
                    <strong className='text-2xl'>Link</strong>
                  </div>
                   <div className="w-inherit">
                        <div  className="break-words text-blue-700">
                          <Link href={`${data.links.blockchain_site[0]}`}><a >{data.links.blockchain_site[0]}</a></Link>
                        </div>
                        <div className="break-words text-blue-700">
                          <Link href={`${data.links.blockchain_site[1]}`}><a >{data.links.blockchain_site[1]}</a></Link>
                        </div>
                        <div className="break-words text-blue-700">
                          <Link href={`${data.links.blockchain_site[2]}`}><a >{data.links.blockchain_site[2]}</a></Link>
                        </div>
                   </div>
                </div>
            </div>
         </div>}
       </div>
       {data && 
       <div className="hidden lg:block w-screen">
       <div className="flex justify-between items-center px-6">
       <KeyboardBackspaceIcon className="cursor-pointer text-4xl" onClick={() => router.back()}/>
       <SearchIcon className="text-4xl mr-8 cursor-pointer text-gray-600 hover:text-gray-800 dark:dark-color dark:hover:text-gray-400" onClick={() => router.push("/search")}/>
       </div>
       <div className="flex w-inherit mt-4">
           <div className="w-[34%] text-center">
               <div className="flex justify-center mt-10">
                 <Image src={data?.image?.large}  width={150} height={150} alt={data?.name}/>
               </div>
                 <h1 className="text-4xl font-bold mt-4">{data?.name}</h1>
                 <h1 className="uppercase text-[20px] dark:text-white font-semibold">{data?.symbol}</h1>
               {/* </div> */}
               <div className="flex justify-between items-center my-5 px-4">
                  <NumberFormat className="font-bold text-2xl" value={`${data.market_data.current_price.usd}`} displayType={'text'} thousandSeparator={true} prefix="$" />
                    <div className="text-[18px] text-white font-bold rounded-md flex items-center px-2 " style={{ backgroundColor:getStatusText(data.market_data.price_change_percentage_24h_in_currency.usd)}}>
                          {data.market_data.price_change_percentage_24h_in_currency.usd < 0? (<ArrowDropDownIcon />) : (<ArrowDropUpIcon />)}
                          <h1>{Number(data.market_data.price_change_percentage_24h_in_currency.usd).toFixed(3)}</h1>
                      </div>
                  </div>
               <div className='p-2 mt-4'>
                   <strong className='text-3xl'>Statistic</strong>
                   <div className='my-2 text-lg'>
                      <div className="flex justify-between items-center my-2  shadow-xl py-4 px-4">
                         <span className='font-semibold'>Current price</span>
                         <strong>{symbol}{data?.market_data?.current_price.usd}</strong>
                      </div>
                      <div className="flex justify-between items-center shadow-xl py-4 px-4">
                         <span className='font-semibold'>Price change 24h</span>
                         <strong>${data?.market_data?.price_change_percentage_24h_in_currency.usd}</strong>
                      </div>
                       <div className="flex justify-between items-center shadow-xl py-4 px-4">
                         <span className='font-semibold'>All time high</span>
                         <strong>${data?.market_data?.ath.usd}</strong>
                      </div>
                      <div className="flex justify-between items-center shadow-xl py-4 px-4">
                         <span className='font-semibold'>All time high date</span>
                         <strong>{data?.market_data?.ath_date.usd}</strong>
                      </div>
                      <div className="flex justify-between items-center shadow-xl py-4 px-4">
                         <span className='font-semibold'>All time high percentage</span>
                         <strong>${data?.market_data?.ath_change_percentage.usd}</strong>
                      </div>
                      <div className="flex justify-between items-center shadow-xl py-4 px-4">
                         <span className='font-semibold'>Market cap</span>
                         <strong>${data?.market_data?.ath.usd}</strong>
                      </div>
                      <div className="flex justify-between items-center shadow-xl py-4 px-4">
                         <span className='font-semibold'>fully dulited market cap</span>
                         <strong>${data?.market_data?.ath.usd}</strong>
                      </div>
                      <div className="flex justify-between items-center shadow-xl py-4 px-4">
                         <span className='font-semibold'>Trading volume 24h</span>
                         <strong>${data?.market_data?.ath.usd}</strong>
                      </div>
                      <div className="flex justify-between items-center shadow-xl py-4 px-4">
                         <span className='font-semibold'>volume</span>
                         <strong>${data?.market_data?.ath.usd}</strong>
                      </div>
                   </div>
               </div>
               <div className='mt-3 w-inherit'>
                 <div className="w-full p-3">
                   <strong className='text-2xl'>Link</strong>
                 </div>
                  <div className="w-inherit">
                       <div  className="break-words text-blue-700">
                         <Link href={`${data?.links.blockchain_site[0]}`}><a >{data?.links.blockchain_site[0]}</a></Link>
                       </div>
                       <div className="break-words text-blue-700">
                         <Link href={`${data?.links.blockchain_site[1]}`}><a >{data?.links.blockchain_site[1]}</a></Link>
                       </div>
                       <div className="break-words text-blue-700">
                         <Link href={`${data?.links.blockchain_site[2]}`}><a >{data?.links.blockchain_site[2]}</a></Link>
                       </div>
                       <div className="break-words text-blue-700">
                         <Link href={`${data?.links.blockchain_site[3]}`}><a >{data?.links.blockchain_site[2]}</a></Link>
                       </div>
                  </div>
               </div>
           </div>
           <div className="w-[65%] border-6">
             <div className="inherit px-10">
               <CoinInfo coinId={coinId} />
             </div>
             <div className='mt-8 w-full px-8 mb-3'>
                 <div className="w-full border-b-2 p-3">
                   <strong className='text-3xl'>About {data?.name} ({data?.symbol})</strong>
                 </div>
                 <h1 className='text-2xl my-4 pl-2 font-semibold'>what is {data?.name}</h1>

                 <p>{data?.description.en.replace(/<\/?[^>]+>/gi, '')}.</p>
               </div>
           </div>
       </div>
      </div>}
    </div>
  );
};

export default CoinPage;