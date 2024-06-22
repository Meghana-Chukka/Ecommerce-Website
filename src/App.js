
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Router,Route, Routes} from 'react-router-dom';//imports specific components from the react-router-dom library, which is used for handling routing in a React application.
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter> {/* This component is used to wrap the routing logic. It enables the use of the react-router-dom routing features in the application. */}
      <Navbar/> {/* This access allows the Navbar to perform navigation actions */}
      <Routes> {/* This component is used to define all the routes for the application. It is a container for Route elements. */}
        <Route path='/' element={<Shop/>}/> {/*Defines a route for the root URL (/). When the URL is /, the Shop component is rendered. */}
        <Route path='/men' element={<ShopCategory/>}/> {/*Defines a route for the /men URL. When the URL is /men, the ShopCategory component is rendered. */}
        <Route path='/women' element={<ShopCategory/>}/>
        <Route path='/kids' element={<ShopCategory/>}/>
        <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>{/*Defines a nested route within /product. This means if the URL is /product/:productId (e.g., /product/1), the Product component is rendered with access to the productId parameter. */}
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
       </div>
  );
}

export default App;
