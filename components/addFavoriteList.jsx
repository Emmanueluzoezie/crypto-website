import { Avatar } from '@mui/material'
import Image from "next/image" 
import { useRouter } from 'next/router'
import Link from "next/link"
import NumberFormat from 'react-number-format';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { CryptoState } from "../context/cryptoContext"
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

function AddFavoriteList ({name, id, rank, marketCapDaily, image, price, marketCap, allTimeHigh, coinSymbol, percent}){

    const { symbol } = useContext(CryptoState)
    const router = useRouter()
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


    function getStatusText(change){
        if(change < 0){
          return "RED"
        }else if(change > 0){
          return "GREEN"
        }
        return "green"
     }

    return(
        <div className="px-2 lg:py-1 cursor-pointer">
                <div className="flex items-center space-x-2 lg:py-3 relative border-b-2 lg py-2 dark:text-white dark:border-gray-600 border-gray-300 cursor-pointer">
                        <StarBorderIcon onClick={addItemToBasket} className={`absolute top-3 right-0 lg:relative lg:top-0 lg:right-0 cursor-pointer`} />
                       <div className="flex items-center  justify-between w-[85%]" onClick={() => router.push(`/${id}`)}>
                          <div className="flex items-center">
                            <div className="flex items-center">
                                <Avatar src={image} className="w-8 h-8 md:w-12 md:h-12 lg:ml-10" alt={name}  />
                            </div>
                            <div className="flex-1 flex-col text-center ml-5 md:ml-14">
                                <h1 className="font-bold lg:text-xl">{name}</h1>
                                <h3 className="text-xs  font-semibold uppercase px-3">{coinSymbol}</h3>
                            </div>
                          </div>
                          <div>
                              <h3 className="font-bold">{rank}</h3>
                          </div>
                       </div>
                       <div className="hidden"></div>
                </div>
        </div> 
    )
}
export default AddFavoriteList