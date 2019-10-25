import React from 'react';
export default function Search({fxns, search}){
    const {searchChange} = fxns;
    const searchSubmit = (e) => {e.preventDefault()}
    
    const selfFocus = (e) => {
        // let x = window.scrollX, y = window.scrollY;
        // console.log(x,y);
        e.target.focus({preventScroll: true});
        // window.scrollTo(x, y);
        // console.log(x,y);
    }
    return(
        <div className='search'>
            <form onSubmit={searchSubmit}>
                <input onChange={searchChange} value={search} placeholder='Search' autoFocus onBlur={selfFocus}></input>
            </form>
        </div>
    )
}