import React, { useState } from 'react'
import {Link} from 'react-router-dom';

const BurgerMenu = () => {
    return (
        <div className="burger-menu" >
            <Link to='/user/new' >Create user</Link>
            <Link to='/user/edit' >Edit user</Link>
        </div>
    )
}

export default BurgerMenu