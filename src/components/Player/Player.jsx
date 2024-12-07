import PropTypes from 'prop-types';

const Player = ({ player }) => {
     const {author, cover,country_name, country_flag, author_img, rating, role,price, button } = player
     
     return (
          <div className='border-[#1313131A] border-2 m-6 p-4 rounded-xl'>
               <img className='rounded-xl h-52 w-80 ' src={cover} alt="" />
               <div className="">
                    <div className=" flex mt-3">
                    <img src={author_img} alt="" className=" h-10 mr-2" />
                    <h2 className="text-xl mt-2 font-semibold">{author}</h2>
                    </div>
                    <div className="flex  ">
                         <img src={country_flag} alt="" className="h-8  " />
                         <h3 className=" ml-2 text-md text-gray-500">{country_name}</h3>
                         <span className='md:ml-16 ml-24 px-2 py-1 rounded-xl bg-slate-100'>{role}</span>
                    </div>
               </div>

               <div className="flex justify-between ">
                    <h3 className="">Rating</h3>
                    <span className='text-gray-600'>{rating}</span>
               </div>
              
               <div className=" flex justify-between">
                    <h3 className="font-semibold">Price :{price}</h3>
                    <button className='border-2 border-slate-400 px-2 py-1 rounded-xl'>{button}</button>

               </div>
               
          </div>
     );
};

 Player.PropTypes = {
     player: PropTypes.object.isRequired
 }

export default Player;