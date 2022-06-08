import  React from  "react";


function AddProduct(props){
    return(
        <div style={{ transform: props.showAdd  ? 'translateY(0vh)':'translateY(-100vh)' , opacity : props.showAdd  ? '1' : '0'}} class=' flex dark:bg-gradient-to-t from-gray-900 to-transparent-3 drop-shadow-2xl overflow-x-hidden overflow-y-auto fixed top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center h-modal sm:h-full' id="add-product-modal" aria-hidden="true">
               <div class="relative w-full max-w-2xl px-4 h-full md:h-auto">
                   <div class="bg-white blur-none brightness-none rounded-lg shadow relative">
                       <div class="flex items-start bg-cyan-700 text-white justify-between p-5 border-b rounded-t">
                           <h3 class="text-xl font-semibold">
                              Ajouter nouveau produit
                           </h3>
                           <button type="button" onClick = {props.HideAdd} class="text-gray-800 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="add-product-modal">
                               <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                           </button>
                       </div>
                       <div class="p-6 space-y-6">
                           <form action="#">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="product-name" class="text-sm font-medium text-gray-900 block mb-2">Titre  du produit</label>
                                        <input type="text" name="product-name" id="product-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Mac Book Pro Hair 5”" required=""/>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="category" class="text-sm font-medium text-gray-900 block mb-2">Catégories</label>
                                        <select type="text" name="category" id="category" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                                             <option Value="" classname="uppercase font-bold">....</option>
                                             <option Value="" classname="uppercase font-bold">Electromenager</option>
                                             <option Value="" classname="uppercase font-bold">Accessoires</option>
                                             <option Value="" classname="uppercase font-bold">Informatiques</option>
                                        </select>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="brand" class="text-sm font-medium text-gray-900 block mb-2">prix <span className="text-red-500">(Francs cfa)</span></label>
                                        <input type="number" name="brand" id="brand" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="750000" required=""/>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="price" class="text-sm font-medium text-gray-900 block mb-2">Rates</label>
                                        <input type="number" name="price" id="price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="5" required=""/>
                                    </div>
                                    <div class="col-span-full">
                                        <label for="product-details" class="text-sm font-medium text-gray-900 block mb-2">Description</label>
                                        <textarea id="product-details" rows="6" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="
                                        Faite la description de votre produit ici (Lenovo Core i3 , RAM 4GB  ,  n pouces"></textarea>
                                    </div>
                               </div>
                           </form>
                       </div>

                       <div class="p-6 border-t border-gray-200 rounded-b">
                           <button class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Ajouter Produits</button>
                       </div>
                   </div>
               </div>
           </div>
    )
}
export default AddProduct; 