import News from "./news"
import useSWR from "swr";
import axios from 'axios'
import Loading from './loading';
import { useRouter } from 'next/router';

function NewsFeed (){

    const router = useRouter()
    const address = `https://api.coingecko.com/api/v3/news/`;  
    const fetcher = url => axios.get(url).then(res => res.data)
    const { data, error } = useSWR(address, fetcher)
  
    if (error) <p>Loading failed...</p>;

    return(
        <div className="px-4 mb-24 mt-3 h-inherit bg-inherit dark:bg-gray-900 dark:text-gray-200 md:px-16">
            <div className="flex justify-between">
                <h1 className="font-semibold sm:font-bold text-xl sm:text-2xl ml-2 ">News</h1>
                <span className="font-semibold sm:font-bold text-lg sm:text-xl mr-2 " onClick={() => router('/moreNews')}>More</span>
            </div>
                {data? (data.data?.splice(0, 5).map((news, index) => (
                        <News data={data} key={index}
                        title={news.title}
                        url={news.url}
                        image={news.thumb_2x}
                        site={news.news_site}
                        description={news.description}
                        time={news.updated_at}

                        />
                    ))) : (<Loading />)}
        </div>
    )
}

export default NewsFeed