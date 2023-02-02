import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { getDataError, getDataReq, getDataSuccess} from './vdata/action';
import styles from './Main.module.css'
function Order() {
  const { isLoading, isError, data } = useSelector((state) => state.alldata);

  const dispatch = useDispatch();
  
    const user_id = localStorage.getItem("userid")

    
      
   useEffect(()=>{
    dispatch(getDataReq());
    fetch(`http://localhost:8080/getorder/${user_id}`)
      .then((res) => res.json())
      .then((data) => dispatch(getDataSuccess(data)))
      .catch(() => dispatch(getDataError()));
   },[dispatch]) 
    
  

 console.log(data)
 var token = localStorage.getItem("token")
    return  !token ? (
           <h1><NavLink className={styles.navLinks} to={"/userlogin"}>Register</NavLink></h1>
    
     ):( <div className={styles.flexDiv}>
           {data.map((el)=>(
             <div key={el.id} className={styles.flexedDiv}>
                    <img className={styles.imgUrl} src={el.img} alt="" />
                    <div className={styles.foodDiv}>
                    <p className={styles.p1Tag}>
                        Rs.{el.cost}
                    </p>
                    <p className={styles.p1Tag}>
                        {el.name}
                    </p>
                    </div>
                    <div className={styles.foodDiv}>
                    <p className={styles.p1Tag}>
                        {el.category}
                    </p>
                    <p>{el.createdAt}</p>
                    </div>
                
                
             </div>
           ))}
      </div>
  
    );
  }
  
  export default Order;