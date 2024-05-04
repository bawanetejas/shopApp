import { Routes, Route } from "react-router-dom";
import Cart from "./page/Cart";
import Home from "./page/Home"
import Navbar from "./component/Navbar";
const App = () => {
  return (

    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
   
  )
};

export default App;
