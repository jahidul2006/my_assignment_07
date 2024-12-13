import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Players from "./components/Players/players";
import Footer from "./components/Footer/Footer";
import SelectedPlayer from "./components/Selected-player/SelectedPlayer";

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  const handleSelectToPlayer = player => {
    const newSelectedPlayer =  [...selectedPlayer, player ]
    setSelectedPlayer(newSelectedPlayer)
  };

  const [totalCoin, setTotalCoin] = useState(0);
  const claimCoin = (handleCoin) => {
    setTotalCoin((prepCoins) => prepCoins + handleCoin);
  };
  return (
    <>
      <div className=" md:w-11/12 mx-auto">
        <Navbar totalCoin={totalCoin}> </Navbar>
        <Banner claimCoin={claimCoin}> </Banner>
        <SelectedPlayer selectedPlayer={selectedPlayer}> </SelectedPlayer>
        <div className=" flex ">
          <Players handleSelectToPlayer={handleSelectToPlayer}> </Players>
        </div>
        <Footer> </Footer>
      </div>
    </>
  );
}

export default App;
