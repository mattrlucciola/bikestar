import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';
import BurgerMenu from './BurgerMenu.jsx';

export default function Nav({searchChange, search, useSearch}){
    let [isOpen,setIsOpen] = useState(false)
    const clickHandler = () => {setIsOpen(!isOpen)}

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
                <div className="user-menu" onClick={clickHandler}>
                    Users &#9776;
                    {isOpen && <BurgerMenu />}
                </div>
            </div>
            <img src='/crop-david-marcu-unsplash.jpg' alt='bike riding in the mountain' width="100%" height=""/>
            {(useSearch) && <Search fxns={{searchChange}} search={search} />}
        </div>
    )
}