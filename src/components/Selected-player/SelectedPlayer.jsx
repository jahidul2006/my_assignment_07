

const SelectedPlayer = ({selectedPlayer}) => {
     return (
         
          <div className="mt-32  flex justify-between ">
          <div className="md:text-2xl font-semibold">
               <h2>Available Players</h2>
          </div>
          <div className=" "> 
               <button className="md:text-lg text-xs text-[#131313] px-4 py-2 bg-[#E7FE29] rounded-l-lg border-2 border-[#1313131A] "> Available </button>
               <button className=" md:text-lg text-xs px-4 py-2 #131313 border-2 border-[[#1313131A]] rounded-r-lg ">
                     Selected({selectedPlayer.length})  </button>
          </div>

     </div>
     );
};

export default SelectedPlayer;