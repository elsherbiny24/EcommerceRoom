import React, { useRef } from 'react';
import './Navbars.css'
import { Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../../aswetsss/1.png01 (1).png';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShopping } from 'react-icons/ai';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { AiOutlineMenuFold ,AiOutlineClose } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";

const Navbars = ({cart ,setcart ,cartqunty , HeartQuantity}) => 
{
  const { loginWithRedirect , logout,user, isAuthenticated  } = useAuth0();
 const navref = useRef();
 const shownavbar =() =>{
   navref.current.classList.toggle('response')
 }
    // const search = document.getElementById('search');
    // const tooglepar =() =>{
    //     const search = document.getElementById('search') ;
    //     search.classList.toggle("serch")
    // }
   
  return (
   <>
  <header className='head shadow'>
  <div className='contant'>
  <Link to='/'><img src={logo}/></Link>
  <nav className='respon' ref={navref}>
  <Link to='/'className='link acti'>home</Link>
        <Link to='/about'className='link'>About</Link>
        <Link to='/shop'className='link'>Shop</Link>
        <Link to='/blog'className='link'>Blog</Link>
        <Link to='/contact'className='link'>Contact</Link>
  </nav>
  <AiOutlineMenuFold className='menu' onClick={shownavbar}/> 
        <div className='boxs-icons'>
        
         <Link to='/heart' className='link'><AiOutlineHeart className='icon' /><small>{HeartQuantity}</small> </Link>
         <Link to='/cart' className='link'> <AiOutlineShopping className='icon '/><small>{cartqunty}</small></Link>
         {
          isAuthenticated ?
          <button className='btn-log'onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><BiLogOut /><small>LOGOUT</small></button>
          :
          <button className='btn-log'onClick={() => loginWithRedirect()}><BiLogIn /><small>LOGIN</small></button>
         }
        
         
        </div>

  </div>
  </header>
   </>
   
  )
}

export default Navbars