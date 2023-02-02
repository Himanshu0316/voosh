import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router";
import styles from './Main.module.css'
function Userlogin() {

  const [data, setData] = useState({
    phoneno: "",
    password: "",
  });

  
  
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const url = "http://localhost:8080/api/auth";
      const res = await axios.post(url, data);

     var token = res.data.data;
      var user = res.data.id;
      localStorage.setItem("token", token);
      localStorage.setItem("userid", user);
      console.log(res);
      alert(res.data.message);
       navigate("/order")
     

      console.log(res.message);
    } catch (err) {
      console.log(err);
    }
  };
  return (

    <div className={styles.logDiv}>
        <h1 className={styles.h1Tag}>Login</h1>
      <form className={styles.formDivs} onSubmit={handleSubmit}>

        
        <input className={styles.inPuts} type="number" name='phoneno' placeholder='Phone No.' value={data.phoneno} required onChange={handleChange} />
        <input className={styles.inPuts}  type="password" name='password' placeholder='Password' value={data.password} required onChange={handleChange} />

        <input className={styles.inPuts} type="submit" value='submit' />

      </form>
    </div>

  )

}

export default Userlogin;