import React from "react";
import style from "../Card/Card.module.css";
import {Link} from "react-router-dom";

export default function Card({id,name, img, profile, info, creation}){


    return(

        <div className={style.div}>

            <img src={img} alt={name} />
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{creation}</h3>
            <h3>Profile URL:{profile}</h3>
            <p>{info}</p>

        </div>

    )
}