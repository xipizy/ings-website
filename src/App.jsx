import Home from './components/home'
import Wholesale from './components/wholesale';
import Store from './components/stores';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/stores" element={<Store/>} />
        <Route path="/wholesale" element={<Wholesale/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
