import React from 'react'
import  NavbarAdmin from "./NavbarAdmin.js";
import AdminCommands from "./AdminCommands";
const AdminDash = () => {
  return (
    <div>
        <NavbarAdmin/>
        <div className="flex space-x-10 border-t mt-6 ">


             { /* barre  d'outils ou boutton de commandes */ }
              <div className="flex-col bg-white mx-1 border-gray-800 border rounded mt-5 text-gray-800 shadow-lg">
                   <div className="space-y-3 ">
                        {/*button */}
                        <div className="py-4 border-t border-b w-100 col px-6">
                            <button  className="bg- py-2 px-3 text-gray-800 hover:bg-gray-500 hover:text-gray-100 "> Accueil</button>
                        </div>
                   </div>
              </div>



             { /* Interface mutiples */}
                  
                 {/* Interface de Commandes*/}
               <div>
                  <AdminCommands/>
               </div>



                 {/* Interface de produits envoyés */}
               <div>
               </div>

                 {/* Interface de produits mis hors services*/}
               
               <div>
                 </div>


        </div>
    </div>
  )
}

export default AdminDash;
