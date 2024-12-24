import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DashboardLayout from './components/layout/DashboardLayout'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter >
     <DashboardLayout/>
    </BrowserRouter>
    </>
  )
}

export default App
