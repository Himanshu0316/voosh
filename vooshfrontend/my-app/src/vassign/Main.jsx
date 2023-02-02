import React from 'react';
import Navbar from './Navbar';
import { Route,Routes } from 'react-router-dom';
import Usersignup from './Usersignup';
import Userlogin from './Userlogin';


import Home from './Home';


import Order from './Order';
import styles from './Main.module.css'
function Main() {
 
    return (
      <div className={styles.Main}>
       
         <Navbar/>
         <Routes>
        
            
        <Route path='/' element={<Home/>}/>
        <Route path='/userlogin' element={<Userlogin/>} />
        <Route path='/order' element={<Order/>}/>
        <Route path='/usersignup' element={<Usersignup/>}/>
        
    </Routes>
      </div>
  
    );
  }
  
  export default Main;