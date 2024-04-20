import './App.css';
import Navbar from './components/Navbar/Navbar';


import Home from './components/Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from './components/SubHome/Footer';


function App() {
  
  
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    
    
    
    </>
  );
}

export default App;
