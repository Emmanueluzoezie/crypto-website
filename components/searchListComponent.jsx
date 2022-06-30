import { Avatar } from '@mui/material'
import NumberFormat from 'react-number-format';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { CryptoState } from "../context/cryptoContext"
import { useContext } from "react";
import { useRouter } from 'next/router';



function SearchList ({name, image, rank, coinSymbol, id, percent, price}){


    const { symbol, currency } = useContext(CryptoState)
    let prices = Number(price).toFixed(2)
    let percents = Number(percent).toFixed(3)
    const router = useRouter()

    function getStatusText(change){
        if(change < 0){
          return "RED"
        }else if(change > 0){
          return "GREEN"
        }
        return "green"
    }

    return(
        <div className="cursor-pointer shadow-2xl flex w-inherit rounded-2xl my-3 bg-inherit dark:text-white" onClick={() => router.push(`/${id}`)}>
                <div className="flex items-center py-3 px-2 w-full">
                    <div className="flex w-[45%] items-center">
                       <div className="flex items-center">
                        <Avatar src={image} className="w-8 h-8 mr-4 text-[10px] bg-gray-500" />
                        <div className="flex flex-col"  >
                            <p className="font-bold text-sm sm:text-xl">{name}</p>
                            <div className="text-xs text-center font-semibold">
                                <p className="bg-gray-300 dark:bg-inherit">{coinSymbol}</p>
                            </div>
                        </div>
                       </div>
                    </div>
                    <div className="flex w-[45%] mr-2">
                        <div className="w-[40%]">
                            <div className="font-bold text-xs flex flex-col px-auto sm:text-xl " style={{ color:getStatusText(percents)}}>
                                {percents < 0? (<ArrowDropDownIcon className=" mx-auto"  />) : (<ArrowDropUpIcon className="mx-auto" />)}
                                <h1 className=" mx-auto">{percents}</h1>
                            </div>
                        </div>
                        <div className="w-[60%] pl-2 flex items-center">
                        <NumberFormat className="font-bold text-sm sm:text-xl " value={prices} displayType={'text'} thousandSeparator={true} prefix={symbol} />
                        </div>
                    </div>
                    <div className="px-1 ml-2">
                    <p className="font-semibold">{rank}</p>
                    </div>
                </div>
        </div>
    )
}

export default SearchList;