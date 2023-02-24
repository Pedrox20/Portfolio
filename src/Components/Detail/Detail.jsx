import {Link} from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Detail/Detail.module.css";
import { getUser } from "../../Actions/index";
import { useState,useEffect } from "react";
import Card from "../Home/Card/Card";

export default function Detail(){

    const dispatch= useDispatch();
    const allUsers= useSelector(state=> state.users);
    const [,setRender]= useState("");
    const [page,setPage]= useState(1);
    const [usersXPage]= useState(8);
    const lastUser= page * usersXPage;
    const firstUser= page - usersXPage;
    const nowUsers= allUsers.slice(firstUser,lastUser);

    useEffect(()=>{
        dispatch(getUser());
    },[dispatch]);

    return(
        <div>
            <div className={styles.cards}>
                {allUsers.length===0?<div>Loading...</div>:""}
                {nowUsers?.map((user)=>{
                    return(
                        <div className={styles.fatherCard}>
                            
                            <Link to={`/home/${user.id}`}>
                            
                            <Card className={styles.card} name={user.fullName} img={user.image} profile={user.profileURL} info={user.description}/>

                            </Link>

                        </div>
                    )
                })}
            </div>
        </div>
    )
};