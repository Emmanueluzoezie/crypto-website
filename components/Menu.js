import {useState, useContext} from "react"
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search'
import { useRouter } from 'next/router'
import { MenuItem, Select} from '@mui/material'
import UseDarkMode from "./useDarkMode"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { CryptoState } from "../context/cryptoContext";


const Menu = () => {

      const { currency, setCurrency } = useContext(CryptoState);
      const [colorTheme, setTheme] = UseDarkMode();
      const router = useRouter();

      return (
        <div>
          <nav className=" w-screen z-10 bg-green-100 dark:bg-gray-900 border-b-4 border-white dark:border-gray-400" style={{ position: "-webkit-sticky", position: "sticky", top: '0'}}>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center px-2 h-20">
                <div className="flex- items-center">
                  <div className=" flex items-end cursor-pointer" onClick={() => router.push("/")}>
                      <h1 className="font-bold text-3xl md:text-4xl text-blue-500">C</h1>
                      <h3 className="font-semibold text-xl md:text-2xl text-blue-400"> tracker</h3>
                  </div>
                </div>
                <div className="flex">
                <SearchIcon className="md:text-4xl mr-4 h-7 cursor-pointer text-green-600 hover:text-green-800 dark:dark-color dark:hover:text-gray-400" onClick={() => router.push("/search")}/>
                <NotificationsIcon className="text-4xl text-green-600 hover:text-green-800 dark:dark-color dark:hover:text-gray-400 mr-4 h-7 cursor-pointer" onClick={() => router.push("/search")}/>
                <Select
                  variant="outlined"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={currency}
                  className="text-green-600 bg-white border-red-300 hover:text-green-800 dark:text-gray-800 dark:hover:text-gray-400 h-7 cursor-pointer"
                  style={{ width: 85, height: 30 }}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  {/* <MenuItem value={"USD"}>USD</MenuItem>
                  <MenuItem value={"INR"}>INR</MenuItem> 
                  <MenuItem value={"NGN"}>NGN</MenuItem> */}
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
                {colorTheme === "light"? (<LightModeIcon className="cursor-pointer text-green-600 hover:text-green-800 h-7 dark:dark-color dark:hover:text-gray-400 mx-4 " onClick={() => setTheme("light")} />) : (<DarkModeIcon className="cursor-pointer text-green-600 hover:text-green-800 dark:dark-color h-7 mx-4 dark:hover:text-gray-400" onClick={() => setTheme("dark")}/>)}
                
              </div>
              </div>
            </div>
          </nav>
        </div>
  )
};

export default Menu;