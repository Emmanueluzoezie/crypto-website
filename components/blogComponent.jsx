import {useState} from "react"
import useSWR from "swr";
import axios from 'axios'
import News from "./news";
// import Pagination from '@mui/material/Pagination';
import Loading from './loading';

function BlogComponent (){
    const [page, setPage] = useState(1)
    
    const address = `https://dev.to/api/articles`;  
  
  
    const fetcher = url => axios.get(url).then(res => res.data)
  
    const { data, error } = useSWR(address, fetcher)
  
    if (error) <p>Loading failed...</p>;

    return(
        <div className="px-4 mb-40 h-inherit bg-green-100 dark:bg-gray-900 dark:text-white md:px-16">
            <h1 className="text-center text-2xl md:text-4xl font-bold">Page in progress</h1>
        </div>
    )
}

export default BlogComponent