import Link from "next/link"
import Image from "next/image"
import moment from "moment";

function News({title, url, image, description, site, time}){

    const newTime = new Date(time * 1000)
    const getArticleTime = moment(newTime, "YYYYMMDD").fromNow();

    return(
        <div>
            <div className="flex my-5 shadow-2xl cursor-pointer px-3 lg:hidden dark:bg-gray-900 dark:text-white rounded">
                <Link href={url} passHref>
                    <div className="flex items-center justify-between space-x-4 lg:space-x-8 py-2 lg:px-4 px-1">
                        <div className="w-16 h-16 flex justify-center items-center">
                            <Image src={image} width={300} objectFit='cover' height={300} className="rounded-xl" alt=""/>
                        </div>
                        <div className="flex-1">
                            <h1 className="font-semibold sm:text-xl line-clamp-2">{title}</h1>
                            <p className="hidden">{description}</p>
                            <div className="flex justify-between text-gray-600 dark:text-gray-400 px-1 text-sm">
                                <span>{site}</span>
                                <span>{getArticleTime}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="hidden lg:flex my-10 shadow-2xl relative cursor-pointer px-3 dark:bg-gray-900 dark:text-white rounded">
            <Link href={url} passHref>
                <div className="flex justify-between space-x-4 lg:space-x-8 py-4 lg:px-4 px-1">
                <Image src={image} width={270}  objectFit='cover' height={270} className="rounded-xl" alt=""/>
                    <div className="flex-1">
                        <h1 className="font-semibold sm:text-xl mb-4 line-clamp-2">{title}</h1>
                        <p className="text-lg line-clamp-7">{description}</p>
                        <div className="absolute bottom-5 w-[65%]">
                        <div className="flex justify-between mt-4 text-gray-600 dark:text-gray-400 px-1 text-lg font-bold">
                            <span>{site}</span>
                            <span>{getArticleTime}</span>
                        </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        </div>
    )
}

export default News