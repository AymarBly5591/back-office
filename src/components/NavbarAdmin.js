

import React from 'react';

const AdminDash = () => {
  return (

        <nav className="bg-black  text-white container-fluid border-b border-gray-200  w-full">
          <div className="px-3 py-3 ">
              <div className="flex items-center justify-between">
              
                  <div className="flex items-center justify-start">
                      <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                         <svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                         <svg id="toggleSidebarMobileClose" className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>    
                      </button>
                      <a href="/" className="text-xl font-bold flex items-center lg:ml-2.5">
                          <img src="logo_Aymar.png" className="h-6 mr-2" alt="Windster Logo"/>
                          <span className="self-center whitespace-nowrap">BackOffice</span>
                      </a>
                      <div  className="lg:visible md:invisible xs:invisible sm:invisible flex items-center justify-center pl-32 ">
                         <div className="  space-x-4">
                             <button className="py-3 px-3  focus:underline focus:bg-gray-100 focus:text-gray-900 ">Produits</button>
                             <button className="py-3 px-3  focus:underline focus:bg-gray-100 focus:text-gray-900 ">commandes</button>
                             <button className="py-3 px-3  focus:underline focus:bg-gray-100 focus:text-gray-900 ">utilisateurs</button>
                         </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-end">
                        <div className=" lg:flex items-center">
                            <span className="text-base bg-gray-200 text-gray-700 font-normal mr-5">utilisateur</span>
                            <div className="-mb-1">
                                <span></span>
                            </div>
                        </div>
                        <button type="button" className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
                            Déconnexion
                        </button>
                    </div>


                </div>
            </div>
        </nav>
  )
}

export default AdminDash;
