
import React from 'react';
import axios from "axios";
import { useState } from 'react';
import styles from './Main.module.css'
import { useNavigate } from 'react-router-dom';
function Usersignup() {
  const [data, setData] = useState({
    name: "",
    email:"",
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
      const url = "http://localhost:8080/api/users";
      const res = await axios.post(url, data);
      navigate("/userlogin")
      console.log(res);
    } catch (err) {
      alert(err.response.data.message);
      console.log(err);
      
    }
  };
  return (
    <div className={styles.logDiv}>
      <h1 className={styles.h1Tag}>Signup</h1>
      <form onSubmit={handleSubmit} className={styles.formDivs}>
        <input
          className={styles.inPuts}
          type="text"
          name="name"
          placeholder='Name'
          onChange={handleChange}
          value={data.name}
          required
        />
        <input
          className={styles.inPuts}
          type="number"
          name='phoneno'
          placeholder='Phone No.'
          value={data.phoneno}
          required
          onChange={handleChange}
        />
        <input
          className={styles.inPuts}
          type="email"
          name='email'
          placeholder='Email'
          value={data.email}
          required
          onChange={handleChange}
        />
        <input
          className={styles.inPuts}
          type="password" name='password'
          placeholder='Password'
          value={data.password}
          required
          onChange={handleChange}
        />
        <p className={styles.Warntag}>Atlist 8 char(ex:1234#Abc(spacial,capital & small letter))</p>

        <input className={styles.inPuts} type="submit" value='submit' />

      </form>
    </div>

  );
}

export default Usersignup;