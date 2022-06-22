import ClipLoader from "react-spinners/ClipLoader";


const Loader = () => {


    return (
        <div className="flex justify-center  items-center w-screen">
            <ClipLoader className="text-green-500 dark:text-gray-200" size={100} />
        </div>
    )
}

export default Loader