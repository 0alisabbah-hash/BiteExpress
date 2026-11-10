import React from 'react';
import {Link} from 'react-router-dom';

const Navbar =()=>{
    return(
        <div className='navabr'>
            <div className='rightSide'>
                <Link to = '/'>Home</Link>
                <Link to = '/menu'>Menu</Link>
                <Link to = '/about'>About</Link>
                <Link to = '/contact'>Contact</Link>
                <Link to = '/tracker'>Track Order</Link>

            </div>
        </div>
    )
}
export default Navbar;