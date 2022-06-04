
import React  ,  {useState} from 'react'
import { Link } from  "react-router-dom";

const Navbar = () => {

  const [item  , setItem] =  useState(false);
  function showItem(){
    setItem(!item);
  }

  return (
      
       <header  className=" relative w-full flex items-center bg-indigo-800 text-gray-100 sticky top-0 z-10" >
        <div className="container ">
         <div className="flex -mx-4 items-center justify-between relative">
           <div className="px-4 w-60 max-w-full">
             <a href="/" className="w-full block py-5 flex space-x-1 items-center hover:underline">
               <img className="h-10 w-10 rounded-lg"
                 src="https://th.bing.com/th/id/OIP.a-DXks1QvPZc3iwsmgr1BAHaE7?w=238&h=180&c=7&r=0&o=5&pid=1.7"
                 alt="logo"
               />
               <h1 className="uppercase">Vente en ligne</h1>
             </a>
           </div>
           <div className=" relative flex px-4 justify-between items-center w-full">
             <div>
               <button id=""  onClick={showItem} onMouseLeave={()=>showItem(false)} onMouseEnter={()=>showItem(true)}  className="block border m-1 absolute right-4  top-1/2 -translate-y-1/2 lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg">
                 <span className="relative w-10 h-1 my-[6px] block bg-gray-800" ></span>
                 <span className="relative w-10 h-1 my-[6px] block bg-gray-800"></span>
                 <span className="relative w-10 h-1 my-[6px] block bg-gray-800" ></span>
               </button>
               {
                // show Item de lien
                item ==  true ?
                     <div className="absolute z-10 py-3 right-1 top-[60px] rounded flex flex-col bg-gradient-to-t from-blue-100  to-gray-100 border-lg shadow-lg ">
                          <a href="/profile" className="border-t  border-b py-2 my-1 px-5 text-gray-700 hover:bg-gray-200 hover:underline cursor-pointer">Mon profile</a>
                          <a href="/cart" className="border-t border-b py-2 my-1 px-5 text-gray-700 hover:bg-gray-200 hover:underline cursor-pointer">Mes artciles</a>
                          <a href="/posts" className="border-t border-b py-2 my-1 px-5 text-gray-700 hover:bg-gray-200 hover:underline cursor-pointer">Ajouter Article</a>
                          <button type="submit" className="border-t border-b py-2 my-1 px-5 text-gray-700 hover:bg-gray-200 hover:underline cursor-pointer">Déconnexion</button>
                     </div>
                     :
                       null                  
              }
               
             </div>
             <div className="sm:flex justify-end hidden pr-16 lg:pr-0">
               <a href="/admin/" className=" text-base font-medium text-dark hover:text-primary py-3 px-7 ">
                 admin
               </a>
               {
                 // ajoute function "showItem" pour montrer les différents liens ;(compte  ,  articles  ,  mise ajour articles)
               }
               <button type="button" onClick={showItem}  className=" text-base font-medium text-dark hover:text-primary py-3 px-7 ">
                 aymat559@gmail.com
               </button>
              
             </div>
                
           </div>
         </div>
       </div>
     </header>
    
  )
}

export default Navbar ;
