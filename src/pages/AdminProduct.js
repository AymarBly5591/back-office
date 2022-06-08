

import React from 'react'
import  NavbarAdmin from "../components/NavbarAdmin.js";
import AllProducts from '../components/AdminProduit/AllProducts.js';
const AdminDash = () => {
  return (
    <div >
            <NavbarAdmin/>
            <AllProducts/>        
    </div>
  )
}

export default AdminDash;
