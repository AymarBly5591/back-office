


import React, { useEffect , useState } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";
import ArticlesStop from  "../Articles/ArticlesStop";
import ArticlesOnline from  "../Articles/ArticlesOnline";

// articles API
const  articles = [{
    id : 1 , price : 10000 ,
    name:"Chaussure Luis Viton",
    imageSrc : "https://th.bing.com/th/id/OIP.y-H__tZSOxQtvDySFZPF0wHaFQ?w=258&h=183&c=7&r=0&o=5&pid=1.7" ,
    description : "cette chaussurs composé d'une elegance sans preécedante , elle fait partie des toute dernières paire de la collectiion Luis Viton",
    date:"27/05/2022"
  },{
    id : 2 , price : 180000 ,
    name:"ordinateur Portable",
    imageSrc : "https://th.bing.com/th/id/OIP.6HfUxxfS9a6FBmCGJsleuAHaGk?w=240&h=213&c=7&r=0&o=5&pid=1.7" ,
    description : "cette chaussurs composé d'une elegance sans preécedante , elle fait partie des toute dernières paire de la collectiion Luis Viton",
    date:"27/05/2022"
  },{
    id : 3 , price : 7000 ,
    name:"samsung a 40",
    imageSrc : "https://th.bing.com/th/id/OIP.SimWpLcWQhienJiz6Q9ijwHaFj?w=206&h=180&c=7&r=0&o=5&pid=1.77" ,
    description : "Après la sortie du tout derinier samsung S11 , la sociéte frappre fort avec la toute dernière de la familel un samsung A 40",
    date:"27/05/2022"
  },{
    id : 4 , price : 210000 ,
    name:"Chemise de premier choix",
    imageSrc : "https://th.bing.com/th/id/OIP.VSymk4fyk_oyCdD-0EJUrAHaJO?w=185&h=230&c=7&r=0&o=5&pid=1.7" ,
    description : "Chemise de preimer choisis dans les magins de premier choix pour vous  , tout en mettenat env son acheteur",
    date:"27/05/2022"
  },{
    id : 5 , price : 45000 ,
    name:"Disque dur externe USB 3",
    imageSrc : "https://th.bing.com/th/id/OIP.mIb2L-co6fl06nbRm4LbhAHaHa?w=189&h=189&c=7&r=0&o=5&pid=1.7" ,
    description : "Disque dure de capcaité de 2000 GB comptible sur n'importe quelle support usb",
    date:"27/05/2022"
  }]


export default function ProfileActivity() {

    const [showStop  ,  setStop] = useState(false);
    const [showOnline  ,  setOnline] = useState(true);

    // montrer Composant en ligne
    function ShowOnline(){
        setOnline(true)
        setStop(false);
    }
    // montrer Composant bloqué
    function ShowStop(){
        setOnline(false);
        setStop(true)
    }
    
    return (
        <div>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
                <script defer src="https://cdn.tuk.dev/dev/light-dark-switch.js"></script>
            </Helmet>
            <div className="flex items-center justify-center py-8 px-4">
                <div className="w-full">
                    <div className="flex flex-col justify-between h-full">
                        
                        <div className="border ">
                              <h2 className="leading-9 font-bold  text-2xl bg-gray-300 text-gray-800">Mes activités</h2>
                        </div>
                        <div>
                        
                            <div className="lg:flex w-full justify-left pt-3 pb-3 mb-1 border-b">

                                <button type="button" onClick={ShowOnline}>
                                    <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 bg-green-500 hover:bg-green-600 active:text-gray-100 ml-4 sm:ml-8">
                                        <p>Profuit en ligne </p>
                                    </div>
                                </button>
                                <button type="button" onClick={ShowStop}>
                                    <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 bg-red-300 hover:bg-red-600 active:text-gray-100 ml-4 sm:ml-8">
                                        <p>Refusés </p> 
                                    </div>
                                </button> 
                                                                                                                             
                            </div>
                        </div>
                        <div className="flex items-end mt-6">
                            {
                                showOnline == true ?
                                <ArticlesOnline articles={articles}  />
                                :null
                            }
                            {
                                showStop == true?
                                <ArticlesStop articles={articles} />
                                :null
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
