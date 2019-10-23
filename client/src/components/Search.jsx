import React, {useState} from 'react';
export default function Search({fxns, search}){
    const {searchChange} = fxns;
    const searchSubmit = (e) => {e.preventDefault()}

    return(
        <div className='search'>
            <form onSubmit={searchSubmit}>
                <input onChange={searchChange} value={search} ></input>
                <button >Search</button>
            </form>
        </div>
    )
}