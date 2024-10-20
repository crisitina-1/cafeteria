import './App.css';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { Navbar} from './components/navbar'
import  Shop  from './page/cart/shop';
import  Cart  from './page/cart/cart';
import Carrusel from './components/carrusel/carrusel';


function App() { 
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Carrusel /> 
       <Routes> 
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        
       </Routes >
       </Router>
      </div>

  )
}

export default App;
