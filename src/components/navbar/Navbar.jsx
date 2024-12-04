import profile from "./../../assets/logo.png"
import { IoMenuSharp } from "react-icons/io5";
import dollar from './../../assets/10243319.png'

const Navbar = ({totalCoin}) => {
 



     return (

          <div className=" fixed shadow-lg  z-50 top-0 w-11/12   bg-stone-300/50 flex  justify-between">
          <img className="h-20" src= {profile} alt="" />
        <div className=" flex  font-semibold text-md text-neutral-800">
        <button  className=" mr-4 p-3 md:block hidden "> Home  </button>
         <button className=" mr-4 p-3 md:block hidden"> Fixture </button> 
         <button className=" mr-4 p-3 md:block hidden"> Teams </button>
         <button className=" mr-4 p-3 md:block hidden"> Shedules </button>
          <div className="border-2 border-slate-400 h-10 mt-5 rounded-xl mr-2 justify-between flex  w-22">

          <div className="mt-1 ml-2">{totalCoin} Coin</div>

            <img className="h-8  " src= {dollar} alt="" />
          </div>
         
           
         <div className=" mt-7 text-2xl md:hidden ">
           <button> <IoMenuSharp /></button>
          </div>
        </div>
        
     </div>
     );
};

export default Navbar;