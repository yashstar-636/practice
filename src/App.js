import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from "./components/Home/Home"
import Header from './components/Header/Header';
import "./App.scss"

//ee227138726e56e1b3fad66691e1d7b0
function App() {
  return (
   <BrowserRouter>
  <Header/>
   <Routes>
  
    <Route path='/home' element={<Home />}/>
    
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
