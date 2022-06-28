import News from "./news"
import {useState} from "react"
import useSWR from "swr";
import axios from 'axios'
import Pagination from '@mui/material/Pagination';
import Loading from './loading';

function MoreNews (){
    const [page, setPage] = useState(1)
    
    const address = `https://api.coingecko.com/api/v3/news?per_page=100&page=${page}/`;  
  
  
    const fetcher = url => axios.get(url).then(res => res.data)
  
    const { data, error } = useSWR(address, fetcher)
  
    if (error) <p>Loading failed...</p>;

    return(
        <div className="px-4 mb-40 h-inherit bg-green-100 dark:bg-gray-900 dark:text-white md:px-16">
            <h1 className="font-semibold sm:font-bold text-xl sm:text-2xl my-4 ml-2">News</h1>
                {data? ( data.data?.map((news, index) => (
                        <News data={data} key={index}
                        title={news.title}
                        url={news.url}
                        image={news.thumb_2x}
                        site={news.news_site}
                        description={news.description}
                        time={news.updated_at}
                        />
                    ))) : (<Loading />)}
                <div className="mb-28 pb-10 lg:pb-20">
                <Pagination
                    count={data && data.data?.length}
                    className="pb-10 w-inherit flex justify-center"
                    shape="rounded"
                    
                    onChange={(_, value) => {
                        setPage(value)
                    }}
                />
                </div>
        </div>
    )
}

export default MoreNews