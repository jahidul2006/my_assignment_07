import { useEffect, useState } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";


const Players = ({handleSelectToPlayer}) => {

     

     const [players, setPlayers] = useState([])
     useEffect( () => {
          fetch('Players.json')
          .then(res => res.json())
          .then(data => setPlayers(data))
     } ,[])

      return (
          <div className=" grid md:grid-cols-4 grid-cols-1 mt-10 mx-auto main">
               
               {
                    players.map(player => <Player 
                         key={Players.id} 
                         player={player}
                         handleSelectToPlayer ={handleSelectToPlayer}
                         > </Player>)
               }
          </div>
     );
};

Players.propTypes = {
     handleSelectToPlayer: PropTypes.fu
}


export default Players;