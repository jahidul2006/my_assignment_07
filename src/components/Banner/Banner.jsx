import banner from "./../../assets/bg-shadow.png"
import cricket from "./../../assets/banner-main.png" 
import './Banner.css'

const Banner = ({claimCoin}) => {
      const claimGift = () => {
          const giftCoin = 60000
          claimCoin(giftCoin)
      }
     return (
          <div className="   mx-auto top-24 relative mb-20">
               <img className=" rounded-xl md:h-screen h-80 bg-black items-center " src={banner } alt="" />


               <div className=" absolute md:top-8 left-1/4 top-3 sm:-ml-1 md:left-1/3 pb-4">
                    <img className="md:w-10/12 w-1/2  md:ml-16 ml-8" src={cricket} alt="" />
                    
               </div>
               <div className=" inset-8 mt-16 md:-mt-5 absolute md:inset-0 flex flex-col items-center justify-center text-slate-200">
                    <h2 className=" text-md md:ml-o md:text-3xl font-bold  mb-4  ">Assemble Your Ultimate Dream 11 Cricket Team</h2>
                    <p className="text-sm text-[#FFFFFFB3] mb-10"> Beyond Boundaries Beyond Limits</p>
               </div>
                    <div className=" absolute left-1/2 -ml-28 top-2/3 mt-5 md:-mt-10 mb-6 items-center justify-center  p-2 rounded-xl border-2 border-[#E7FE29]">
                         <div className="  claim  border-2 border-red-700 ">
                         <button onClick={claimGift} className="p-4  text-black font-bold relative"> Claim Free Cradit</button>
                          </div>
                    </div>

          </div>

          
     );
};

export default Banner;