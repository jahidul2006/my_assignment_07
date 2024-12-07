import footer from '../../assets/logo-footer.png'

const Footer = () => {
     return (
        <div className=" mt-60 bg-[#06091A]  mb-20 md:h-screen ">
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

                    <div className=" rounded-md overflow-hidden shadow-md mt-2">
                    <input 
                   type="email" 
                   placeholder="Enter your email" 
                   className=" text-black px-4 py-2 flex-1 border-none focus:outline-none" />

                      <button 
                          className="  px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold"
                        >
                          Subscribe
                        </button>

                    </div>

                </div>


                </div>

                <div className=" mt-20  border-b border-gray-700"></div>

               <h2 className="text-[#FFFFFF99] text-center md:mt-4 mt-2">@2024 Your Company All Rights Reserved.</h2>

             
        </div>
     );
};

export default Footer;