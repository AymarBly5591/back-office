


import React, { useState } from "react";
import  Navbar from  "../Navbar";

function ArticlesRegistrer() {

    const Category = [
        {id:1 , category:"electromenager"}, 
        {id:2 , category:"informatique"}, 
        {id:3 , category:"santé"}, 
        {id:4 , category:"autres"}, 
    ]
    function retourPage(){
        window.history.back();
    }


    return (
        <div>
        {/* Navbar */}
        <Navbar/>
        <div  className="container ">
            <div className="flex-col ">
               <div className="pt-4 px-3">
                  <button type="button" onClick={retourPage} className="bg-blue-400 py-2 px-3 rounded-2xl text-white hover:bg-blue-500" >retour </button>
               </div>
               



               <div className="container mx-auto bg-white dark:bg-gray-100 mt-10 rounded px-4">
                    <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                        <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                            <p className="text-lg text-gray-800  dark:text-gray-800 font-bold">Enregistrer Produit </p>
                            <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>

                  <form>
                    <div className="mx-auto pt-4">
                        <div className="container mx-auto">
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-800">
                                    Nom du produit
                                </label>
                                <input type="text" id="FirstName" name="firstName" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <label htmlFor="LastName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-800">
                                    Catégorie
                                </label>
                                <select  id="categorie" name="cartegorie" className="border space-y-2 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-blue rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-800 dark:text-gray-900">
                                     {
                                         Category.map((val)=>{
                                             return(
                                                 <option value={val.id} className="border-t border-b py-3 px-10 leading-9 uppercase">{val.category}</option>
                                             )
                                         
                                         })
                                     }
                                </select>
                            </div>
                            
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-800">
                                    Prix (francs cfa)
                                </label>
                                <input type="number" id="number" name="number" required  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="0525162771" />
                            </div>                            
                            
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <label htmlFor="password" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-800">
                                    Description du produit <span className="text-red-400 m-x3"> descrition 50 ligne minimn</span>
                                </label>
                                <textarea type="password" id="password" name="password" required   className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="......." />
                            </div>
                            <div className="bg-gray-200 py-3 border-t space-x-10">
                                <button type ="button" className="bg-gray-600 text-white py-2 px-4 rounded-2xl">retour</button>
                                <button type="button" onClick={retourPage} className="bg-blue-600 text-white py-2 px-4 rounded-2xl">enregistrer</button>
                            </div>
                        </div>
                        
                    </div>
                  </form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ArticlesRegistrer;
