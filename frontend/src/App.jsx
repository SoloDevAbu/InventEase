import React, { Suspense, lazy } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
const Home = lazy(() => import('./pages/Home'))
const Signup = lazy(() => import('./pages/Signup'))
const Login = lazy(() => import('./pages/Loging'))

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Suspense fallback={'Loading'}>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App