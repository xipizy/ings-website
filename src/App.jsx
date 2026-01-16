import Home from './components/home'
import Stores from './components/stores'
import ContactUs from './components/contact';
import Wholesale from './components/wholesale';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/stores" element={<Stores/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/wholesale" element={<Wholesale/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
