import React from "react";

import {Link} from "react-router-dom";

import style from "../Landing/Landing.module.css";


export default function Landing(){
    
    return (

        <div className={style.div}>
            
                <h1 className={style.hI}>Welcome to Github Users!!!</h1>
            

                <Link exact to= "/home">

                    <button className={style.btn}>Let's go!</button>

                </Link>
            </div>

    )
}