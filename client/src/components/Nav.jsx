import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';
import BurgerMenu from './BurgerMenu.jsx';

export default function Nav({searchChange, search}){
    let [isOpen,setIsOpen] = useState(false)
    let [useSearch, setUseSearch] = useState(false);

    const clickHandler = () => {setIsOpen(!isOpen)}
    
    let [docLoc, setDocLoc] = useState('')
    useEffect(()=>{((`${document.location.pathname}`.includes('state') || `${document.location.pathname}`.includes('trail')) && !`${document.location.pathname}`.includes('/trails/')) && setUseSearch(true)},[])
    useEffect(()=>{
        if (['/states', '/trails'].includes(docLoc)) {
            setUseSearch(true);
        } else if (['/'].includes(docLoc)) {
            setUseSearch(false)
        }
    },[docLoc])
    document.onclick = (e) => {
        let clickElem = e.target.innerText;
        if ((e.target.parentNode.className === 'state-trail' && clickElem === 'States')) {
            setDocLoc('/states')
        } else if ((e.target.parentNode.className === 'state-trail' && clickElem  === 'Trails')) {
            setDocLoc('/trails')
        } else if (['/', '/user/new', '/user/edit'].includes(e.target.pathname)) {
            setDocLoc('/');
        } else if (e.target.pathname) {
            (e.target.pathname).includes('/trails/') && setDocLoc('/');
        }
    }
    
    // console.log(docLoc);
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