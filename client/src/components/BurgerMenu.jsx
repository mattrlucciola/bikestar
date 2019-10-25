import React, { useState } from 'react'
import {Link} from 'react-router-dom';


const BurgerMenu = () => {

    // myFunction = () => {
    //     var x = document.querySelector(".links");
    //     if (x.className === "my-toggle-menu") {
    //       x.className += " responsive";
    //     } else {
    //       x.className = "my-toggle-menu";
    //     }
    //   }

    return (
        <div className="burger-menu" >
            <Link to='/user/new' >Create new user!</Link>
            <Link to='/user/edit' >Edit user</Link>
        </div>
    )

}

export default BurgerMenu