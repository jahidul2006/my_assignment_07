
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/navbar/Navbar'

function App() {

  
  const [totalCoin, setTotalCoin] = useState(0)
    const claimCoin =(handleCoin) => {
       setTotalCoin(prepCoins=> prepCoins + handleCoin)
    }
  return (
    <>
  
   <div className=" w-11/12 mx-auto">
   <Navbar totalCoin={totalCoin}> </Navbar>
   <Banner claimCoin= {claimCoin}> </Banner>
   </div>
   
    </>
  )
}

export default App
