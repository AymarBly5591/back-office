

import React from 'react'

/* CXet fichier concerne les article qui seron en ligne , d'une part
 l'utilisateur poourra voir les articles qui pourrait ajouter */



const ArticlesStop = ({articles}) => {
  return (
                <div className="container  my-10 border">
                    
                    <div className="leading-9 text-red-600 border-b border-gray-100 mb-2 pb-3  bg-gray-300 text-2xl py-15 px-5 ">
                        <h2  className="font-bold"> Produits Refusés</h2>
                    </div>

                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                       <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                           <thead class="text-xs text-gray-700 uppercase bg-red-50 dark:bg-red-700 dark:text-gray-100">
                              <tr>
                                  <th scope="col" class="p-4">
                                     <div class="flex items-center">
                                         <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                         <label for="checkbox-all" class="sr-only">checkbox</label>
                                      </div>
                                  </th>
                                  <th scope="col" class="px-3 py-3">
                                     nom du produit
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                     date
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                     Prix
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                     description
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                     <span class="sr-only">Edit</span>
                                  </th>
                              </tr>

                              {
                                articles.map((article)=>{
                                  return(
                                    <tr className="bg-red-100 hover:bg-red-200 border-gray-100 border-t border-b">
                                        <th scope="col" class="p-4">
                                            <div class="flex items-center">
                                               <img className="h-[70px] w-[70px]" src={article.imageSrc} />
                                            </div>
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-gray-900">{article.name} </th>
                                        <th scope="col" class="px-6 py-3  text-gray-900">{article.date}</th>
                                        <th scope="col" class="px-6 py-3 text-gray-900 font-extrabold">{article.price}</th>
                                        <th scope="col" class="px-6 py-3 text-gray-500 ">{article.description}</th>
                                        <th scope="col" class="px-6 py-3">
                                           <button type="button" className="bg-gray-800  text-gray-100 py-2 px-2  rounded-lg"> voir </button>
                                        </th>
                                    </tr>
                                  )
                                })
                              }
                          </thead>
                      </table>
                   </div>



                </div>
         
  )
}


export default ArticlesStop;
