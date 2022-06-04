


import React, { useState } from "react";
import {useNavigate} from  "react-router-dom";
import Navbar from  "../Navbar";

function ArticlesRegistrer() {
    // varicles de niviguation
    var navigate =  useNavigate()

    // varicles du loocalStorage de suppresion
    var articleDel = localStorage.getItem("articleDel").split(",")

    
    function retourPage(){
        window.history.back();
    }


    return (
        <div>
        <Navbar/>
        <div  className="container ">
            <div className="flex-col ">
               <div className="pt-4 px-3">
                  <button type="button" onClick={retourPage} className="bg-blue-400 py-2 px-3 rounded-2xl text-white hover:bg-blue-500" >retour </button>
               </div>
               



               <div className="container mx-auto bg-white dark:bg-gray-100 mt-10 rounded px-4">
                    <div className="xl:w-full border-b bg-red-400 border-gray-300 dark:border-gray-700 py-5">
                        <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                            <p className="text-lg text-gray-800  dark:text-gray-800 font-bold">Supprimer Produit </p>
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

                             <div className="flex flex-col mb-6">
                                <img  className="w-[140px] h-[140px]" src={articleDel[1]}/>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                               
                                <input readOnly value={articleDel[2]} type="text" id="FirstName" name="firstName" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-800 dark:text-gray-800" placeholder />
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                
                                <input readOnly value={articleDel[3]} id="categorie" name="cartegorie" className="border space-y-2 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-blue rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-800 dark:text-gray-900"/>
                            </div>
                            
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                
                                <input readOnly value={articleDel[4]} type="number" id="number" name="number" required  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-800 dark:text-gray-800" placeholder="0525162771" />
                            </div>                            
                            
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                               
                                <textarea readOnly value={articleDel[5]} type="password" id="password" name="password" required   className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-800 dark:text-gray-800" placeholder="......." />
                            </div>
                            <div className="bg-gray-200 py-3 border-t space-x-10">
                                <button type ="button" onClick={retourPage} className="bg-gray-600 text-white py-2 px-4 rounded-2xl">retour</button>
                                <button type="submit"  className="bg-red-600 text-white py-2 px-4 rounded-2xl">supprimer</button>
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