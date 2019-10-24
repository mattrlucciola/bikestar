import React from 'react';
export default function Search({fxns, search}){
    const {searchChange} = fxns;
    const searchSubmit = (e) => {e.preventDefault()}
    console.log('hi')
    return(
        <div className='search'>
            <form onSubmit={searchSubmit}>
                <input onChange={searchChange} value={search} placeholder='Search' ></input>
            </form>
        </div>
    )
}