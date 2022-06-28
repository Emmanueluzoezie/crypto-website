import { useRouter } from 'next/router'
import Link from 'next/link'
import { useContext } from 'react';
import { CryptoState } from '../context/cryptoContext';
import { MenuItem, Select } from '@mui/material';
import UseDarkMode from './useDarkMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


function DiscoverMenu () {
    const { currency, setCurrency } = useContext(CryptoState);
    const [colorTheme, setTheme] = UseDarkMode();
    const router = useRouter();
    const currentRoute = router.pathname


    return (
        <div className="w-inherit px-6 lg:px-48 border-b-2 border-gray-300 py-2 lg:py-4 dark:text-white">
            <div className="text-center font-bold text-xl lg:text-2xl  uppercase ">Discovering</div>
            {colorTheme === "light"? (<LightModeIcon className="cursor-pointer text-green-600 absolute top-2 right-14 md:right-28 hover:text-green-800 h-7 dark:text-white dark:hover:text-gray-400 mx-4 " onClick={() => setTheme("light")} />) : (<DarkModeIcon className="cursor-pointer text-green-600 top-2 hover:text-green-800 dark:text-gray-200 h-7 mx-4 absolute md:right-28 right-14 dark:hover:text-gray-400" onClick={() => setTheme("dark")}/>)}
            <Select
                  variant="outlined"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={currency}
                  className="text-green-600 border-red-300 hover:text-green-800 dark:text-gray-200 text-xs md:text-xl dark:hover:text-gray-400 cursor-pointer absolute right-2 top-3 w-[60px] h-6 md:w-24 md:h-7 focus:outline-none"
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="AED">AED</MenuItem>
                  <MenuItem value="ARS">ARS</MenuItem>
                  <MenuItem value="AUD">AUD</MenuItem>
                  <MenuItem value="BGN">BGN</MenuItem>
                  <MenuItem value="BRL">BRL</MenuItem>
                  <MenuItem value="BSD">BSD</MenuItem>
                  <MenuItem value="CAD">CAD</MenuItem>
                  <MenuItem value="CHF">CHF</MenuItem>
                  <MenuItem value="CLP">CLP</MenuItem>
                  <MenuItem value="CNY">CNY</MenuItem>
                  <MenuItem value="COP">COP</MenuItem>
                  <MenuItem value="CZK">CZK</MenuItem>
                  <MenuItem value="DKK">DKK</MenuItem>
                  <MenuItem value="DOP">DOP</MenuItem>
                  <MenuItem value="EGP">EGP</MenuItem>
                  <MenuItem value="EUR">EUR</MenuItem>
                  <MenuItem value="FJD">FJD</MenuItem>
                  <MenuItem value="GBP">GBP</MenuItem>
                  <MenuItem value="GTQ">GTQ</MenuItem>
                  <MenuItem value="HKD">HKD</MenuItem>
                  <MenuItem value="HRK">HRK</MenuItem>
                  <MenuItem value="HUF">HUF</MenuItem>
                  <MenuItem value="IDR">IDR</MenuItem>
                  <MenuItem value="ILS">ILS</MenuItem>
                  <MenuItem value="INR">INR</MenuItem>
                  <MenuItem value="ISK">ISK</MenuItem>
                  <MenuItem value="JPY">JPY</MenuItem>
                  <MenuItem value="KRW">KRW</MenuItem>
                  <MenuItem value="KZT">KZT</MenuItem>
                  <MenuItem value="MVR">MVR</MenuItem>
                  <MenuItem value="MXN">MXN</MenuItem>
                  <MenuItem value="MYR">MYR</MenuItem>
                  <MenuItem value="NGN">NGN</MenuItem> 
                  <MenuItem value="NOK">NOK</MenuItem>
                  <MenuItem value="NZD">NZD</MenuItem>
                  <MenuItem value="PAB">PAB</MenuItem>
                  <MenuItem value="PEN">PEN</MenuItem>
                  <MenuItem value="PHP">PHP</MenuItem>
                  <MenuItem value="PKR">PKR</MenuItem>
                  <MenuItem value="PLN">PLN</MenuItem>
                  <MenuItem value="PYG">PYG</MenuItem>
                  <MenuItem value="RON">RON</MenuItem>
                  <MenuItem value="RUB">RUB</MenuItem>
                  <MenuItem value="SAR">SAR</MenuItem>
                  <MenuItem value="SEK">SEK</MenuItem>
                  <MenuItem value="SGD">SGD</MenuItem>
                  <MenuItem value="THB">THB</MenuItem>
                  <MenuItem value="TRY">TRY</MenuItem>
                  <MenuItem value="TWD">TWD</MenuItem>
                  <MenuItem value="UAH">UAH</MenuItem>
                  <MenuItem value="UYU">UYU</MenuItem>
                  <MenuItem value="ZAR">ZAR</MenuItem>
            </Select>
           
            <div  className="flex justify-between hide dark:text-gray-200 font-semibold space-x-4 lg:mt-6 mt-3 lg:text-xl capitalize">
                <Link href="/latestNews" passHref>
                    <a className={`cursor-pointer px-4 lg:px-4 lg:py-2 rounded-md hover:bg-green-300 dark:hover:bg-gray-500 ${currentRoute === '/latestNews' || currentRoute === '/explore' ? 'bg-green-200 dark:bg-gray-300' : "" }`}>
                        News
                    </a>
                </Link>
                <Link href="/trendingCoin" passHref>
                    <a className={`cursor-pointer px-4 lg:px-4 lg:py-2 rounded-md hover:bg-green-300 dark:hover:bg-gray-500 ${currentRoute === '/trendingCoin' ? 'bg-green-200 dark:bg-gray-500' : "" }`}>
                        Trending
                    </a>
                </Link>
                <Link href="/blogs" passHref>
                    <a className={`cursor-pointer px-4 lg:px-4 lg:py-2 rounded-md hover:bg-green-300 dark:hover:bg-gray-500 ${currentRoute === '/blogs' ? 'bg-green-200 dark:bg-gray-500' : "" }`}>
                        Blogs
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default DiscoverMenu