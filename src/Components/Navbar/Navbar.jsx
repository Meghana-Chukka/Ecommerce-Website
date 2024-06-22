import React,{useState}from 'react';
import './Navbar.css';
import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
 //using useState to adjust the underline functionality to the button that is clicked
 //menu: variable setMenu: function shop: is the initial value set to the state

  const [menu,setMenu] = useState("shop"); 
  
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt = ""/>
        <p>SHOPPER</p>
      </div>
      
    <ul className='nav-menu'>
       {/* on clicking on a list item we are setting the variable menu to the respective value through the function setMenu using useState */}
       {/* after that we are checking whether the menu variable has its corresponding value..if yes then display the hr tag else no i.e, display empty tag */}

       {/*The Link component is imported from react-router-dom and is used for client-side navigation.
        to='/' specifies the destination URL. Clicking this link will navigate the user to the root path (/) of your application.
        The text inside the Link component, "Shop", is what will be displayed as the clickable text. */}

        {/* for style property: the outerbraces represent js code and innerbraces represent js object
        in our case it is a css property that is written as js object */}
        <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li> 
        <li onClick = {() => {setMenu("men")}}><Link style={{textDecoration: 'none'}} to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick = {()=> {setMenu("women")}}><Link style={{textDecoration: 'none'}} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
    </ul>

    <div className="nav-login-cart">
      <Link to='/login'><button>Login</button></Link>
      <Link to='/cart'><img src={cart_icon} alt="" /></Link>
      <div className="nav-cart-count">
         0
      </div>
    </div>
    </div>
  )
}

export default Navbar
