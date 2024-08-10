import './App.css'
import ConditionalStyle from './components/ConditionalStyle/ConditionalStyle'
import NavBar from './components/Navbar/NavBar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
     <ConditionalStyle/>
    </>
  )
}

export default App
