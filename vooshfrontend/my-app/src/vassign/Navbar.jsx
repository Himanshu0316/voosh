import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Main.module.css'
function Navbar() {
 
  const navigate = useNavigate();
    return (
      <div className={styles.Navbar}>
        <div>
        <NavLink className={styles.navLinks} to={"/"}>Home</NavLink>
        <NavLink className={styles.navLinks} to={"/order"}>Order</NavLink> 
        </div>
       
        <div>
          <button className={styles.Reg} onClick={()=>navigate("/usersignup")}>Get Started</button>
        </div>
        
         
      </div>
  
    );
  }
  
  export default Navbar;