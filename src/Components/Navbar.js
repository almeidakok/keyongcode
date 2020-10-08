import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
    const [click, setClick] = useState(false);
    

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);



    return (
       <>
        <nav className='navbar'>
            <div className='navbar-container'>
              <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
              <i class="fas fa-terminal"></i>
                KEYONG 
                CODE <i class="fab fa-react"></i>
             </Link>
             <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
             </div>
             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick=
                    {closeMobileMenu}>
                        Home
                    </Link>
                </li> 
                <li className='nav-item'>
                    <Link to='/servicos' className='nav-links' onClick={closeMobileMenu}>
                        Serviços
                    </Link>
                </li> 
                <li className='nav-item'>
                    <Link to='/produtos' className='nav-links' onClick={closeMobileMenu}>
                        Produtos
                    </Link>
                </li> 
               
                
            </ul>
            
            </div>
        </nav>
       </>
    )
}

export default Navbar;