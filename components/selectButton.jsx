
const SelectButton = ({ children, selected, onClick }) => {

    return (
  
        <button onClick={onClick} className={`text-xs md:text-lg md: m-1 text-center rounded-lg p-2 px-1 whitespace-nowrap font-montserrat font-bold ${selected? "bg-green-700 text-white hover:bg-green-700 hover:text-black font-bold" : ""} `}>
        {children}
        </button>
    );
  };
  
  export default SelectButton;