import Home from './components/home'
import ContactUs from './components/contact';
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
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/wholesale" element={<Wholesale/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
