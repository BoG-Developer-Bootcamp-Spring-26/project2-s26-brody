import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import LinesPage from './pages/LinesPage'
import Header from './components/Header/Header'

function App() {

    // useState keeping track of Marta Line
  const [currColor, setCurrColor] = useState<string>("Gold")

  // Method to pass to NavBar, so it can change the color
  const changeColor = (lineColor: string) => {
    setCurrColor(lineColor);
  }

  return (
    <div id='page-layout'>
        <Header/>
        <NavBar changeColor={changeColor} />
        <LinesPage lineColor={currColor} />
    </div>
  )
}

export default App
