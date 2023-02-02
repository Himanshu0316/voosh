import React, { useEffect, useState } from 'react';
import styles from './Main.module.css'
import data from "./db"
function Home() {
  //const [data , setData] = useState([])
   const user_id = localStorage.getItem("userid")
  const handleSubmit = async({el})=>{
    //e.preventDefault();
    const payload = {
      ...el,
       user_id:user_id
    }
    const res = await fetch("http://localhost:8080/addorder",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(
        payload
      )
    })
    const data = await res.json();
    console.log(data);
  }
  return (
    <div className={styles.Home}>
      
      <div className={styles.flexDiv}>

        {data.map((el, index) => (
          <div key={el.id} className={styles.flexedDiv}>
            <img className={styles.imgUrl} src={el.img} alt="" />
            <div className={styles.foodDiv}> 
            <p className={styles.p1Tag}>
              {el.name}
            </p>
            <p className={styles.p1Tag}>
              Rs{el.cost}
            </p>
            </div>
           
            <button onClick={()=>handleSubmit({el})}>Add</button>
          </div>


        ))}
      </div>
    </div>

  );
}

export default Home;