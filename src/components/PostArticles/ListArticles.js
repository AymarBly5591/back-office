

import Nothing  from  "../Articles/Nothing"
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";


function ListArticles() {

    // varible de naviguation vers la page de suppresion d'un element 
    const navigate =  useNavigate();
    const [show, setShow] = useState(null);

    // varible de recuperation du localstorage de Suppresion de l'article
    var articleDel ;

    
    
    // données api
    const articles=[{
        id:1 ,
        name:"Article1" ,
        categorie:"electromager",
        description:"descriotion du produit " ,
        price: 2400000,date:"27/05/2022",
        date:"27/05/2022",
        imageSrc:"https://th.bing.com/th/id/OIP.cD_tXVtrBQhbwqxkH_5qYQHaKQ?w=144&h=200&c=7&r=0&o=5&pid=1.7"
    }]


    return (
        <div>
            <div>
                <div className="sm:px-6 w-full">
                    
                    <div className=" py-4 md:py-7 px-4 md:px-8 xl:px-10">
                        <div className="sm:flex items-center justify-between">
                            <div className="flex items-center">
                                <button type="button">
                                    <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                                        <p>actualiser</p>
                                    </div>
                                </button>
                                <button  type="buttpn">
                                    <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ml-4 sm:ml-8">
                                        <p>supprimer</p>
                                    </div>
                                </button>
                                <button type="button" >
                                    <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 bg-green-300 hover:bg-green-400 rounded-full ml-4 sm:ml-8">
                                        <p>tri par : </p>
                                    </div>
                                </button>
                            </div>
                        </div>
                          
                    </div>


                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                 <th scope="col" className="px-3 py-3"></th>
                                 <th scope="col" className="px-3 py-3">image produit</th>
                                 <th scope="col" className="px-3 py-3">Nom produit</th>
                                 <th scope="col" className="px-3 py-3">Categorie</th>
                                 <th scope="col" className="px-6 py-3">Description</th>
                                 <th scope="col" className="px-6 py-3">Prix</th>
                                 <th scope="col" className="px-6 py-3"><span className="sr-only">delete</span></th>
                              </tr>
                            </thead>
                            <tbody>
                                 {
                                     articles.map((article)=>
                                         
                                            <tr className="border-b dark:bg-gray-100 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-100 even:dark:bg-gray-700">
                                              
                                                <td className="px-3 py-4"> <input type="checkbox"/> </td>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    <img classNameName="h-20 w-20 cover" src={article.imageSrc}/>
                                                </th>
                                                <td className="px-3 py-4"> {article.name} </td>
                                                <td className="px-6 py-4"> {article.categorie} </td>
                                                <td className="px-6 py-4">{article.description}</td>
                                                <td className="px-6 py-4">{article.price}</td>
                                                
                                                <td className="px-6 py-4 text-right">
                                                    <button href="#" 
                                                    // fonction pour recupere les information sur l'article pour le formulaire
                                                    onClick={()=>{
                                                        // variable qui va recuprer la varible de localStorage 
                                                        articleDel = article.id+","+article.imageSrc+","+ article.name +","+article.categorie+","+article.decription+","+article.price                                                      
                                                        localStorage.setItem("articleDel" , articleDel ) ;
                                                        navigate("/posts/delete");

                                                    }} className="font-medium text-red-600 dark:text-red-500 hover:underline">delete</button>
                                                </td>
                                            </tr>
                                        
                                     )
                                 }
                            </tbody>
                        </table>
                    </div>
                    <Nothing/>

                    
                    
                </div>
                
            </div>
        </div>
    );
}

export default ListArticles;
