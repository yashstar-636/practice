import './App.css';
import Header from './components/Header';
import Home from './components/home';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
function App() {
  return (<>
  <BrowserRouter>
    <Header />
    <Routes>  
      <Route path='' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter></>);
}

export default App;
