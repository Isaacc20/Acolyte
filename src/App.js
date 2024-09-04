import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Header from './components/Header';
import Wallet from './pages/Wallet';
// import {  } from "module";

function App() {
  return (
    <>
      <div className='app bg-grey-900 min-h-screen'>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/wallet' element={<Wallet />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
