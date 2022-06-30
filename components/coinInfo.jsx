import axios from "axios";
import useSWR from "swr";
import { useState, useContext } from "react";
import { Line } from "react-chartjs-2";
// import { CircularProgress } from '@mui/material';
import SelectButton from "./selectButton";
import { CryptoState } from "../context/cryptoContext"
import Loader from "../components/loading"
import 'chart.js/auto'

const CoinInfo = ({ coinId}) => {
  const [days, setDays] = useState(1);
  const { currency } = useContext(CryptoState);

   const HistoricalChart = () => `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`;
  
   const fetcher = url => axios.get(url).then(res => res.data)
 
   const { data, error } = useSWR(HistoricalChart, fetcher)

   const cryptoData = data && data.prices;

  function action(arr, from, to) {
    const firstPrice = arr[0];
    const lastPrice = arr[arr.length-1]
    const allPrice = arr.slice(1, arr.length-1)
    const totalPrice = [];
    for(let i=0; i<6;i++) {  
      totalPrice.push(allPrice[Math.floor(Math.random()*allPrice.length)][1]); 
    }
    return [firstPrice[1], ...totalPrice, lastPrice[1]];
  }

  const coinData = cryptoData && action(cryptoData, 1, 5)

  const chartDays = [
      {
        label: "24H",
        value: 1,
      },
      {
        label: "7days",
        value: 7,
      },
      {
        label: "30 Days",
        value: 30,
      },                                                                           
      {
        label: "3 Months",
        value: 90,
      },
      {
        label: "1 Year",
        value: 365,
      },
    ];
  




  return(
      <div className="w-[100%] mt-2 p-1">
           <div className="w-inherit h-inherit flex flex-col">
             {coinData? (
               <>
               <Line
                 data={{
                   labels:coinData && coinData.map((coin) => {
                     let date = new Date(coin);
                     let time =
                       date.getHours() > 12
                         ? `${date.getHours() - 12}:${date.getMinutes()}`
                         : `${date.getHours()}:${date.getMinutes()}`;
                     return days === 1 ? time : date.toLocaleDateString();
                   }),
   
                   datasets: [
                     {
                       data:coinData && coinData.map(coin => coin),
                       label: `Price ( Past ${days} Days ) in ${currency}`,
                       borderColor: "#EEBC1D",
                       fill:true,
                       tension: 0.4,
                      //  borderRadius: 3,
                     },
                   ],
                 }}
                 options={{
                  responsive: true,
                   elements: {
                     point: {
                       radius: 1,
                     },
                   },
                 }}
               />
               <div className="flex justify-around w-[80%] mt-1 ml-20">
             
                 {chartDays.map((day) => (
                   <SelectButton
                     key={day.value}
                     onClick={() => {setDays(day.value);
                      //  setflag(false);
                     }}
                     selected={day.value === days}
                   >
                     {day.label}
                   </SelectButton>
                 ))}
               </div>
             </>
             ): (
              <Loader />
             )}
          </div>
        </div>
  )
};

export default CoinInfo;