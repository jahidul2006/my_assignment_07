import { useEffect, useState } from "react";


const Players = () => {

     const [players, setPlayers] = useState([])
     useEffect( () => {
          fetch('Players.json')
          .then(res => res.json())
          .then(data => setPlayers(data))
     } ,[])

     return (
          <div>
               <h1 className="text-3xl mt-28">Players: {players.length}</h1>
          </div>
     );
};

export default Players;