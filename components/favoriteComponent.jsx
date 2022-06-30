import { Avatar } from '@mui/material'
import NumberFormat from 'react-number-format';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DeleteIcon from '@mui/icons-material/Delete';
import { CryptoState } from "../context/cryptoContext"
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { removeFromBasket } from "../slices/basketSlice";
import { useRouter } from 'next/router';


function FavoriteComponent ({name, id, rank, marketCapDaily, image, price, marketCap, coinSymbol, allTimeHigh, percent}){

    const router = useRouter()
    const { symbol } = useContext(CryptoState)
    let prices = Number(price).toFixed(3)
    let percents = Number(percent).toFixed(3)
    let marketCapDailys = Number(marketCapDaily).toFixed(3)
    const dispatch = useDispatch()


    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }));
      };
    

    function getStatusText(change){
        if(change < 0){
          return "RED"
        }else if(change > 0){
          return "GREEN"
        }
        return "green"
     }

    return(
        <div className="px-2 lg:py-3">
        <div className="flex items-center space-x-2 lg:py-3 relative border-b-2 lg py-2 border-gray-600">
             <DeleteIcon onClick={removeItemFromBasket} className="absolute cursor-pointer top-3 right-2 lg:relative lg:top-0 lg:right-0" />
             <div  className="flex items-center w-[40%] border-black cursor-pointer" onClick={() => router.push(`/${id}`)}>
                <div className="w-full flex items-center">
                 <div className="flex items-center lg:w-[30%]">
                     <div className="w-full flex items-center">
                         <h2 className="hidden lg:flex lg:w-[50%] lg:px-3">{rank}</h2>
                         <div className="lg:w-[50%] ml-3">
                             <Avatar src={image} className=" w-7 h-7 lg:w-10 lg:h-10"/> 
                         </div>
                     </div>   
                 </div>
                 <div className="flex flex-col lg:flex-row lg:w-[70%] lg:items-center ml-6 text-lg font-semibold">
                         <h1 className="text-[17px] capitalize">{name}</h1>
                         <div className="flex items-center text-xs lg:ml space-x-2">
                             <h2 className="lg:hidden px-1  rounded font-bold dark:bg-gray-400 text-gray-900">{rank}</h2>
                             <span className="font-medium px-1 rounded dark:bg-gray-400 text-gray-900">{coinSymbol}</span>
                         </div>
                 </div>
                </div>
             </div>
             <div className="flex w-[55%] space-x-6 px-3 cursor-pointer" onClick={() => router.push(`/${id}`)}>
                 <div className="w-full flex items-center">
                     <div className="w-[35%] text-[14px] text-center lg:hidden" style={{ color:getStatusText(percents)}}>
                         {percents < 0? (<ArrowDropDownIcon />) : (<ArrowDropUpIcon />)}
                         <h1>{percents}</h1>
                     </div>
                     <div className="lg:flex items-center lg:w-[60%]">
                         <div className="flex flex-col lg:flex-row w-full items-center">
                             <NumberFormat className="text-[14px] lg:w-[35%] lg:text-[16px]" value={prices} displayType={'text'} thousandSeparator={true} prefix={symbol}  />
                             <div className="hidden lg:flex items-center text-[12px] lg:w-[20%]" style={{ color:getStatusText(percents)}}>
                                 {percents < 0? (<ArrowDropDownIcon />) : (<ArrowDropUpIcon />)}
                                 <h1>{percents}</h1>
                             </div>
                             <h2 className="text-[10px] lg:text-[12px] lg:w-[40%] px-1 rounded dark:bg-gray-400 dark:text-gray-900 dark:lg:bg-inherit dark:lg:text-inherit">
                                 <NumberFormat value={marketCap} displayType={'text'} thousandSeparator={true} />
                                 <span className="font-bold ml-1">M</span>
                                 </h2>
                         </div>
                     </div>
                     <div className="hidden lg:flex items-center lg:w-[40%]">
                         <div className="w-full flex">
                             <NumberFormat className="text-[12px] hidden xl:flex w-[45%] ml-2 truncate" value={marketCapDailys} displayType={'text'} thousandSeparator={true} />
                             <NumberFormat className="text-[12px] w-[45%] ml-6" value={allTimeHigh} displayType={'text'} thousandSeparator={true} />
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    </div>
    )
}
export default FavoriteComponent