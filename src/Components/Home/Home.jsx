import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import Card from "./Card/Card";
import styles from "../Home/Home.module.css"
import {getUser} from "../../Actions/index"; 

export default function Home(){

    const dispatch= useDispatch();

    const allUsers= useSelector(state=> state.users);

    const [,setRender]= useState("");

    const [page,setPage]= useState(1);

    const [usersXPage]= useState(8);

    const lastUser= page * usersXPage;

    const firstUser= page - usersXPage;

    const nowUsers= allUsers.slice(firstUser,lastUser);

    //----------------------------------------------------------------

    useEffect(()=>{
        dispatch(getUser());
    },[dispatch]);
    
    //============================================================================

    function clickHandler(e){
        e.preventDefault();
        dispatch(getUser());
    }

    //======================================================================================

    return(
        <div className={styles.div}>
                    <h1 className={styles.h1}>
                        Portfolio
                    </h1>

            <div>
                {allUsers.length===0?<div>Loading...</div>:""}
                {nowUsers?.map((user)=>{
                    return(
                        <div>
                            
                            <Link to={`/home/${user.id}`}>
                            
                            <Card className={styles.card} name={user.fullName} img={user.image} profile={user.profileURL}/>

                            </Link>

                        </div>
                    )
                })}
            </div>

        </div>
    )
    }