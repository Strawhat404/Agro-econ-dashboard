import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DashboardLayout from './components/layout/DashboardLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <DashboardLayout/>
    </>
  )
}

export default App
