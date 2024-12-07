import { useEffect, useState } from "react";
import Player from "../Player/Player";


const Players = () => {

     const [players, setPlayers] = useState([])
     useEffect( () => {
          fetch('Players.json')
          .then(res => res.json())
          .then(data => setPlayers(data))
     } ,[])

     return (
          <div className="flex grid md:grid-cols-4 grid-cols-1 mt-10 mx-auto main">
               
               {
                    players.map(player => <Player 
                         key={Players.id} 
                         player={player}> </Player>)
               }
          </div>
     );
};

export default Players;