import { Avatar } from '@mui/material'
import Image from "next/image" 
import Link from "next/link"
import { useState } from 'react';
import NumberFormat from 'react-number-format';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { CryptoState } from "../context/cryptoContext"
import { useContext } from "react";
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';


function FullCryptoListComponent ({name, id, rank, allTimeHigh, marketCapDaily, image, price, marketCap, coinSymbol, percent}){

    const { symbol } = useContext(CryptoState)
    let prices = Number(price).toFixed(2)
    let marketCapDailys = Number(marketCapDaily).toFixed(3) 
    let percents = Number(percent).toFixed(2)

    function getStatusText(change){
        if(change < 0){
          return "RED"
        }else if(change > 0){
          return "GREEN"
        }
        return "green"
     }

     const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(
          addToBasket({
            id,
            name,
            price,
            marketCapDaily,
            marketCap,
            rank,
            image,
            percent,
            coinSymbol,
            allTimeHigh
          })
        );
        
      };

    return(
        <div className="lg:py-1 cursor-pointer">
                <div className="flex items-center space-x-2 lg:py-3 relative border-b-2 lg py-2 pl-4 md:pl-2 dark:text-white dark:border-gray-600 border-gray-300 cursor-pointer">
                <StarBorderIcon onClick={addItemToBasket} className={`absolute top-3 right-0 lg:relative lg:top-0 lg:right-0 cursor-pointer `} />
                        <div  className="flex items-center w-[40%] lg:w-[37%]">
                        <div className="w-full flex items-center">
                            <div className="flex items-center lg:w-[30%]">
                                <div className="w-full flex items-center">
                                    <h2 className="hidden lg:flex font-bold lg:w-[50%] lg:px-3">{rank}</h2>
                                    <div className="lg:w-[50%] ml-3">
                                        <Avatar src={image} className=" w-7 h-7 lg:w-10 lg:h-10"/> 
                                    </div>
                                </div>   
                            </div>
                            <div className="flex flex-col lg:flex-row lg:w-[70%] lg:items-center ml-3 text-lg font-semibold">
                                    <h1 className="text-[15px] capitalize md:text-[18px] font-bold truncate">{name}</h1>
                                    <div className="flex items-center text-xs lg:ml space-x-2">
                                        <h2 className="lg:hidden px-1 bg-green-100 py-[2px] rounded font-bold dark:bg-gray-400 text-gray-900">{rank}</h2>
                                        <span className="px-1 font-bold rounded dark:bg-gray-400 text-gray-900 uppercase bg-green-100 py-[2px] lg:bg-inherit">{coinSymbol}</span>
                                    </div>
                            </div>
                        </div>
                        </div>
                        <div className="flex w-[60%] space-x-6 px-3">
                            <div className="w-full flex items-center justify-between pr-10">
                            <div className="w-[35%] text-[14px] font-bold text-center lg:hidden" style={{ color:getStatusText(percents)}}>
                                    {percents < 0? (<ArrowDropDownIcon />) : (<ArrowDropUpIcon />)}
                                    <h1>{percents}</h1>
                                </div>
                                <div className="lg:flex items-center lg:w-[60%]">
                                    <div className="flex flex-col lg:flex-row w-full items-center">
                                        <NumberFormat className="text-[14px] lg:w-[35%] lg:text-[16px] font-bold" value={prices} displayType={'text'} thousandSeparator={true} prefix={symbol}  />
                                        <div className="hidden sm:flex items-center text-[12px] lg:w-[20%] font-bold" style={{ color:getStatusText(percents)}}>
                                            {percents < 0? (<ArrowDropDownIcon />) : (<ArrowDropUpIcon />)}
                                            <h1>{percents}</h1>
                                        </div>
                                        <h2 className="text-[10px] lg:text-[12px] lg:w-[40%] px-1 rounded dark:bg-gray-400 dark:text-gray-900 font-bold dark:lg:bg-inherit bg-green-100 lg:bg-inherit dark:lg:text-inherit ml-2">
                                            <NumberFormat value={marketCap} displayType={'text'} thousandSeparator={true} />
                                            <span className="font-bold ml-1">M</span>
                                            </h2>
                                    </div>
                                </div>
                                <div className="hidden lg:flex items-center font-bold lg:w-[40%]">
                                    <div className="w-full flex">
                                        <NumberFormat className="text-[12px] w-[58%] ml-2 truncate" value={marketCapDailys} displayType={'text'} thousandSeparator={true} />
                                        <NumberFormat className="text-[12px] w-[40%] ml-4 truncate" value={allTimeHigh} displayType={'text'} thousandSeparator={true} />
                                        <span className="hidden">id</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
        </div>
    )
}
export default FullCryptoListComponent