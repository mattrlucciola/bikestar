import React from 'react';
export default function Search({fxns, search}){
    const {searchChange} = fxns;
    const searchSubmit = (e) => {e.preventDefault()}
    
    const selfFocus = (e) => {
        e.target.focus({preventScroll: true});
    }
    return(
        <div className='search'>
            <form onSubmit={searchSubmit}>
                <input onChange={searchChange} value={search} placeholder='Search' autoFocus onBlur={selfFocus}></input>
            </form>
        </div>
    )
}