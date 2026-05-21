import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className='Navbar'>
                <li className='List'><Link className='link' to="/">Home</Link></li>
                <li className='List'><Link className='link' to="/about">About</Link></li>
                <li className='List'><Link className='link' to="/service">Service</Link></li>
                <li className='List'><Link className='link' to="/contact">Contact</Link></li>
                <li className='List'><Link className='link' to="/useState">useState</Link></li>
                <li className='List'><Link className='link' to="/useEffect">useEffect</Link></li>
                <li className='List'><Link className='link' to="/useEffectApi">useEffectApi</Link></li>
                <li className='List'><Link className='link' to="/signup">signup</Link></li>
                <li className='List'><Link className='link' to="/login">Login</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar