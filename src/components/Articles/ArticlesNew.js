import React from 'react'
import ArticlesOnline from './ArticlesOnline'

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




const ArticlesNew = () => {
  return (
    <div className="container mt-10 ">
         <div className="border-t my-2 relative p-3 ">
              
             <div className="mx-2">
                  <button></button>
             </div>
         
                <div className="flex  border-b mb-10 ">
                    <div className="leading-9 text-3xl font-bold">Articles</div>
                     <div  className="right-2 absolute border rounded ml-20  h-18 m flex items-center justify-content">
                        <input className="focus:bg-gray-100 p-2 mx-3 my-2 focus:border-gray-100 rounded w-100 focus:border-1  h-10 "   type="text" placeholder="recherché item ajouté..." />
                        <button type="submit" className="bg-gray-200 text-gray-500 hover:bg-gray-300 rounded  my-1 px-3 py-2 mx-1"> rechercher</button>
                     </div>
                </div>

                <div className="container ">
                    
                    <div className="leading-9  bg-gradient-to-r from-green-300 to-orange-200 text-2xl py-15 px-5 ">
                        <h2 className="font-bold"> Recement ajouté</h2>
                    </div>

                    <div className="flex grid overflow-x-scroll scrollbar-hide h-96 py-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8    ">
                         {
                           articles.map((article)=>{
                             return(
                               <div key={article.id} className="flex m-2 z-index-2  bg-white mx-3 hover:shadow-md relative  m-5 h-100 w-[310px] rounded-md  flex-col border items-center justify-center  hover:shadow-lg    cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto ">
                                     <a ><img className="w-[210px] h-[180px]" src={article.imageSrc}/></a>
                                    <div className=" mx-1 border">
                                        <h2 className="text-2xl leading cover font-bold text-gray-800 uppercase">{article.name}</h2>
                                        <span className="text-2xl bg-red-100 text-red-700">{article.price} francs CFA</span>
                                    </div>
                                    <button  type="button" className="absolute mx-3 p-1  bottom-1 bg-blue-800 w-full  text-white rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">voir</button>
                                    <p className="m-1">
                                       {article.description}
                                    </p>
                                    <div  className="absolute right-1 top-1 ">{article.date}</div>
                               </div>
                             )
                           })
                         }
                    </div>



                    {
                      /*   composant Article Oniligne    :    
                           les articles qui seront en ligne
                       */
                         
                          <ArticlesOnline articles={articles}/>
                    }
                    
                </div>




         </div>
    </div>
  )
}

export default ArticlesNew ;