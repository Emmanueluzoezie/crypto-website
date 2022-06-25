import { Avatar } from '@mui/material'
import NumberFormat from 'react-number-format';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useRouter } from 'next/router' 
import { CryptoState } from "../context/cryptoContext"
import { useContext } from "react";


function CryptoGains ({rank, name, image, price, percent}){

  const { symbol } = useContext(CryptoState)

    const router = useRouter()
    let prices = Number(price).toFixed(3)
    let percents = Number(percent).toFixed(2)

    function getStatusText(change){
        if(change < 0){
          return "RED"
        }else if(change > 0){
          return "GREEN"
        }
        return "green"
     }

    return(
        <div className="flex space-x-3 cursor-pointer">
            <div className="flex flex-col my-3 w-28 sm:w-36 sm:h-36 h-32 pt-4 rounded-2xl bg-white shadow-2xl text-center cursor-pointer">
                <Avatar alt={name} className="mx-auto w-6 sm:w-10 h-6 sm:h-10"  src={image}/>
                <div>
                  <p className="font-bold whitespace-nowrap my-1 md:my-0 text-sm sm:text-xl truncate mx-2">{name}</p>
                </div>
                <NumberFormat className="font-semibold sm:text-xl text-sm truncate" value={prices} displayType={'text'} thousandSeparator={true} prefix={`${symbol}`}  />
                <div className="flex justify-center items-center font-bold text-xs sm:text-xl truncate" style={{ color:getStatusText(percents)}}>
                    <ArrowDropDownIcon />
                    <h1>{percents}</h1>
                </div>
              </div>
        </div>
    )
}
export default CryptoGains