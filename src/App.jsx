
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import HomePage from './Components/Pages/HomePage'
import LoginPage from './Components/Pages/LoginPage'
import AboutPage from './Components/Pages/AboutPage'
import Product from './Components/Pages/Product'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/product' element={<Product/>} />

        </Route>
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
