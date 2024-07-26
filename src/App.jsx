
import './App.css'
import Home from './Home'
import Shop from './Shop'

import Cart from './Cart';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@100..700&family=Kalnia+Glaze:wght@100..700&display=swap');
</style>
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
    </Routes>
    </BrowserRouter>
    {/* <Home /> */}
    {/* <Shop/> */}
    {/* <Cart/> */}
    
    </>
  )
}

export default App
