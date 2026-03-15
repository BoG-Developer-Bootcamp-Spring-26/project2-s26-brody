import './App.css'
import NavBar from './components/NavBar/NavBar'
import LinesPage from './pages/LinesPage'
import Header from './components/Header/Header'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <div id='page-layout'>
        <Header/>
        <NavBar /> 
        
        <Routes>
            <Route path="/" element={<Navigate to="/lines/Gold" replace />} />
            <Route path="/lines/:lineColor" element={<LinesPage />} />
        </Routes>
    </div>
  )
}

export default App
