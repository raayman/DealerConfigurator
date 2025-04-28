import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VehicleSelector from './screens/vehicleSelector'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VehicleSelector />
    </>
  )
}

export default App
