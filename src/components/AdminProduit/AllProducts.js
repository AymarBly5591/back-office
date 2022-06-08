import React from 'react'
import NavbarAdmin from '../NavbarAdmin';
import ListProducts from './ListProducts';

const  products =  [{
    id:1, name:"Appareil Electromenager" ,details:"coleur rouge , de xpéria , puissance = 10w  , conconsommation", price  :10000,  description :"c'est un produit de marque",category:"electromenager",
    imageSrc :"" , rates :<div>❤️❤️❤️❤️❤️</div>
}]
const AllProducts = () => {
    
  return (
    <div className="container-fluid bg-white flex items-center justify-center">
         <div className="flex ">
             <ListProducts products={products}/>
         </div>
    </div>
  )
}

export default AllProducts;
