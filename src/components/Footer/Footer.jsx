import footer from '../../assets/logo-footer.png'

const Footer = () => {
     return (
        <div className=" ">

          
          <div className="bg-gradient-to-r from-blue-100 via-white to-yellow-100  h-96 md:w-3/4 shadow-lg rounded-xl absolute md:ml-40 ml-1 -mt-52 text-center ">
              <div className="mt-24">
               <h2 className="text-xl font-bold text-gray-800 mb-2">Subscribe to our Newsletter</h2>
               <p className="text-gray-600 mb-4">Get the latest updates and news right in your inbox!</p>

               <div className="flex items-center ml-12 md:mx-auto w-1/2">
                       <input
                         type="email" placeholder="Enter your email" className="flex-1 outline-none   p-2 border border-gray-300 rounded-l-md "/>
                       <button className="p-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold rounded-r-md">
                         Subscribe
                      </button>
                </div>

              </div>

            </div>
          


           <div className=" mt-80 bg-[#06091A]  mb-20 md:h-screen  ">

           <div className=" flex  justify-center  ">
               <img src={footer}alt="" className="mt-52 " />
          </div>
               
                <div className=" grid md:grid-cols-3 grid-cols-1  md:ml-20 mt-14 ">

                <div className="   text-[#FFFFFF] text-center mb-6">
                     <h2 className="text-lg font-semibold">About Us</h2>
                     <p className="mt-3 text-sm text-[#FFFFFF99]"> We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                 </div>
                 <div className=" text-[#FFFFFF] text-center mb-6">
                  <h2 className=" text-lg font-semibold">Quick Links</h2>

                  <ul className=' mt-3 text-sm text-[#FFFFFF99]'>
                     <a href="">
                     <li> Home </li>
                     <li>Services</li>
                     <li>About</li>
                     <li>Contact</li>
                     </a>
                  </ul>
                 </div>
                 <div className=" text-[#FFFFFF] text-center mb-6">
                    <h2 className="text-lg font-semibold ">Subscribe</h2>
                    <p className="mt-3 text-sm text-[#FFFFFF99]"> Subscribe to our newsletter for the <br /> latest updates.</p>

                    <div className=" rounded-lg overflow-hidden shadow-md mt-2">
                    <input 
                   type="email" 
                   placeholder="Enter your email" className=" text-black px-4 py-2 flex-1 border-none focus:outline-none rounded-l-md" />

                      <button 
                          className=" rounded-r-md  px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold">
                          Subscribe
                        </button>

                    </div>

                </div>


                </div>

                <div className=" mt-20  border-b border-gray-700"></div>

               <h2 className="text-[#FFFFFF99] text-center md:mt-4 mt-2">@2024 Your Company All Rights Reserved.</h2>
           </div>

             
        </div>
     );
};

export default Footer;