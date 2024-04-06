import React from 'react';
import {Link} from 'react-router-dom';
const Nav = () =>{
    const navStyle = {
        color:'white'
    }
    return(
        <>
         <nav>
            <Link to="/"><h3>Logo</h3></Link>
            <ul className='nav-links'>
                <Link to="about" style={navStyle}><li>About us</li></Link>
                <Link to="shop" style={navStyle}><li>Shop </li></Link>
            </ul>
        </nav>
        </>
    )

}
export default Nav;
