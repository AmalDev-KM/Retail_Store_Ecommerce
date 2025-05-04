import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path={"/"} excat={true} element={<Home/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
