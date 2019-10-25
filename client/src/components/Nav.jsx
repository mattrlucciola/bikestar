import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';
import BurgerMenu from './BurgerMenu';

export default function Nav({searchChange, search}){
    // console.log(searchChange, search);

    let [isOpen,setIsOpen] = useState(false)

    const clickHandler = () => {
        setIsOpen(!isOpen)        
    }

    return(
        <div className='nav'>
            <div className="links">
            <div className="bike-star">
            <Link to='/'>BikeStar</Link>
            </div>
            <div className="state-trail">
                <Link to='/states'>States</Link>
                <Link to='/trails'>Trails</Link>
            </div>
                {/* <Link to=  >Bur Menu</Link> */}
                {/* <BurgerMenu /> */}
                <div className="user-menu" onClick={clickHandler}>
                    Users &#9776;
                    {isOpen && <BurgerMenu />}
                </div>
            </div>
            <img src='/crop-david-marcu-unsplash.jpg' alt='bike riding in the mountain' width="100%" height=""/>
            <Search fxns={{searchChange}} search={search} />
        </div>
    )
}