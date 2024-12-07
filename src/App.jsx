
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/navbar/Navbar'
import Players from './components/Players/players'
import Footer from './components/Footer/Footer'


function App() {

  
  const [totalCoin, setTotalCoin] = useState(0)
    const claimCoin =(handleCoin) => {
       setTotalCoin(prepCoins=> prepCoins + handleCoin)
    }
  return (
    <>
  
   <div className=" md:w-11/12 mx-auto">
   <Navbar totalCoin={totalCoin}> </Navbar>
   <Banner claimCoin= {claimCoin}> </Banner>
   <div className=" flex ">
   <Players> </Players>
   </div>
    <Footer> </Footer>
   </div>
   
    </>
  )
}

export default App
