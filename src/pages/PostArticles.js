import  React  from  "react";
import {useNavigate} from  "react-router-dom";
import Navbar from "../components/Navbar";
import ListArticles from  "../components/PostArticles/ListArticles";

const PostArticles = () => {
     const navigate =  useNavigate()
     function Navigue(){
         navigate("/posts/registrer");
     }
    return (
        <div>
        {/* Navbar */}
          <Navbar/>
        <div className="container-fluid border-t pt-6 ">
            
             <div className="">
             
             
                {
                  //   Entête de l'articles
                }
                  <div className="bg-gray-100">
                      <div className=" relative flex py-3 items-center space-x-5">
                           <div className=" leading-9">
                                <h2 className=" text-2xl font-bold "> Articles</h2>
                           </div>
                            <div className="border py-1 bg-gray-100">
                                <input className="py-2 px-3 bg-white focus:bg-blue-100 focus:border-1xl rounded focus:border-blue-00 " placeholder="rechercher"/>
                                <button className=" py-2 px-3 bg-gradient-to-r from-gray-200 to-gray-100 hover:bg-gray-100 active:bg-gradient-to-r active:from-gray-200 active:to-gray-300 rounded">rechercher</button>
                            </div>
                            <button onClick={Navigue} className="mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-white">Ajouter article</p>
                            </button>
                           
                      </div>
                  </div>
                  {
                      // lsite des articles 
                  }
                  <ListArticles/>
                  {
                      // Ajouter articles
                  }
                  {
                      // mettre à jour articles
                  }
                 
             </div>
        </div>
        </div>
    )
  }
export default PostArticles;