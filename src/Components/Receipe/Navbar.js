import React from 'react';
import './Cart/Cart.css';

const Navbar = ({filterItem, navItem, setSearchText}) => {

    function handleSearch(e){
        setSearchText(e.target.value)
    
    } 

 return (
  <> 
        <nav className='navbar'>
            {navItem.map((currElem) => {
                return(
                    <button 
                        className='navBtn' 
                        onClick={() => filterItem(currElem)}>
                        <span>{currElem}</span>
                    </button>
                    
                )
               })
            }
            <input className="search" placeholder='Search your receipe here...' onChange={handleSearch}/>
            <i className='fas fa-cart-arrow-down cartIcon'></i>
        </nav>
        
        </>
        ) 
    }

export default Navbar;
