import HomeIcon from '@mui/icons-material/Home'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import RecommendSharpIcon from '@mui/icons-material/RecommendSharp';
import SearchIcon from '@mui/icons-material/Search'
import { useRouter } from 'next/router'
import StarBorderIcon from '@mui/icons-material/StarBorder'

const Footer = () => {

    const router = useRouter();

    return(
        <div className="position dark:bg-gray-800 fixed bottom-0 bg-green-100 w-screen pr-3 border-t-8 border-green-300 dark:border-gray-400 rounded-t-3xl md:rounded-none">
            <div className="flex justify-between bg-inherit py-3 px-5 z-10 bg-green-100 w-inherit">
            <div className="text-center cursor-pointer dark:text-white dark:hover-text-300 text-green-600 hover:text-green-800 curdark:dark-color dark:hover:text-gray-400" onClick={() => router.push("/")}>
            <HomeIcon className="text-2xl md:text-4xl"   />
            <p className="font-bold text-center text-xs md:text-lg ">Home</p>
            </div>
            <div className="text-center cursor-pointer  text-green-600 hover:text-green-800
            dark:text-white dark:hover-text-300 dark:dark-color dark:hover:text-gray-400" onClick={() => router.push("/coinListPage")}>
            <LeaderboardIcon className="text-2xl md:text-4xl" />
            <p className="font-bold text-center text-xs md:text-lg">coins List</p>
            </div>
            <div className="text-center cursor-pointer  text-green-600 hover:text-green-800
            dark:text-white dark:hover-text-300 dark:dark-color dark:hover:text-gray-400" onClick={() => router.push("/favorite")} >
            <StarBorderIcon  className="text-2xl md:text-4xl" />
            <p className="font-bold text-center text-xs md:text-lg">Favorite</p>
            </div><div className="text-center cursor-pointer  text-green-600 
            dark:text-white dark:hover-text-300 hover:text-green-800 dark:dark-color dark:hover:text-gray-400" onClick={() => router.push("/search")} >
            <SearchIcon className="text-2xl md:text-4xl " />
            <p className="font-bold text-center text-xs md:text-lg">Search</p>
            </div>
            <div className="text-center cursor-pointer  text-green-600 hover:text-green-800
            dark:text-white dark:hover-text-300 dark:dark-color dark:hover:text-gray-400" onClick={() => router.push("/explore")}>
            <RecommendSharpIcon  className="text-2xl md:text-4xl " />
            <p className="font-bold text-center text-xs md:text-lg">Explore</p>
            </div>
            </div>
        </div>
    )
}

export default Footer