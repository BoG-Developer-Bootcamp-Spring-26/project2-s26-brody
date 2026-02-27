import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import LinesPage from './pages/LinesPage'

function App() {
  const [currColor, setCurrColor] = useState<string>("Gold")

  const changeColor = (line_color: string) => {
    setCurrColor(line_color);
  }

  return (
    <div id='page-layout'>
        <h1>Marta Main Title</h1>
        <NavBar changeColor={changeColor} />
        <LinesPage line_color={currColor} />
    </div>
  )
}

export default App
