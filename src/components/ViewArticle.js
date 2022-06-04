import  React from  "react";

import {FiEdit} from "react-icons/fi";

function ViewArticle(){
    return(
        <main class="my-8 m-t-3 py-2 border-b">
        <div class="container mx-auto px-6">
            <div class="md:flex md:items-center">
                <div class="w-full h-64 md:w-1/2 lg:h-96">
                    <img class="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="https://images.unsplash.com/photo-1578262825743-a4e402caab76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="Nike Air"/>
                </div>
                <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h3 class="text-gray-700 uppercase text-lg">Nike Air</h3>
                    <span class="text-gray-500 mt-3 font-bold">27000 francs CFA</span>
                    <hr class="my-3"/>
                    <div class="mt-2">
                        <label class="text-gray-700 text-sm" for="count">Quantité :</label>
                        <div class="flex items-center mt-1">
                            <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                            <span class="text-gray-700 text-lg mx-2">20</span>
                            <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="mt-3">
                        <label class="text-gray-700 text-sm" for="count">Catégorie:</label>
                        <div class="flex items-center mt-1">
                            <h2>Electromégager</h2>
                        </div>
                    </div>
                    <div class="mt-3">
                        <label class="text-gray-700 text-sm" for="count">Color:</label>
                        <div class="flex items-center mt-1">
                            <button class="h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 mr-2 focus:outline-none"></button>
                            <button class="h-5 w-5 rounded-full bg-teal-600 mr-2 focus:outline-none"></button>
                            <button class="h-5 w-5 rounded-full bg-pink-600 mr-2 focus:outline-none"></button>
                        </div>
                    </div>
                    <div class="mt-3">
                        <label class="text-gray-700 text-sm" for="count">description:</label>
                        <div class="flex items-center mt-1">
                            <p className="text-gray-800 ">cette chussures max de 10 test 'un des meilleur spaire sur le marché actuellemet </p>
                        </div>
                    </div>
                    <div class="flex items-center mt-6 space-x-3">
                        <button class="px-8 py-2 flex bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                           <FiEdit className="w-5 h-5"/> modifier
                        </button>
                    </div>
                </div>
            </div>
            </div>
      </main>
    )
}
export  default ViewArticle;