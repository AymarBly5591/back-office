
import './App.css';
import  {Routes  ,  Route} from  "react-router-dom"
import Dashboard from './pages/Dashboard';
import Articles from './pages/Articles';
import ProfileUser from './pages/ProfileUser';
import PostArticles  from  "./pages/PostArticles" ;
import AdminDash from "./pages/AdminDash";


import ViewArticle from './components/ViewArticle';
import  ProfileActivity  from  "./components/Profile/ProfileActivity";
import  ProfileEdit  from  "./components/Profile/ProfileEdit" ;
import ProfileInfo  from  "./components/Profile/ProfileInfo" ;

import  ArticlesRegistrer from "./components/PostArticles/ArticlesRegistrer";
import  ArticlesDelete from "./components/PostArticles/ArticlesDelete";



function App() {
  return (
    <div>
         
         <Routes>
            { 
               // 1-) Page D'accueil ( Dashboard  ) 
            }
            <Route path="/" element={<Dashboard/>}/>
            {
              //  2-) Page des articles ou l'on peut voire les différentes articles qui sont actuellemnt en at ceux qui on été ajouter par les autres clients ou utilisateur 
            }
            <Route  path="/cart" element={<Articles/>}  />
            {
              //  3-) Page de profle de l'utilateur 
              
            }
            <Route  path="/profile/" element={<ProfileUser/>} />
                {
                  // 4 Admin Articles pour ajouter des articles dans
                }
            <Route path="/posts" element={<PostArticles/>}/> 
            {
              // 5 Articles enregistrer des articles 
            }
            <Route path="/posts/registrer" element={<ArticlesRegistrer/>} /> 

            <Route path="/posts/delete" element={<ArticlesDelete/>} />
              
            {/*Page non existante */}
            <Route path="*" element={<div >Page de n'existes pas </div>}/>
            <Route path="/view/article" element={<ViewArticle/>}/>
            <Route path="/admin/" element={<AdminDash/>} />
         </Routes>
    </div>
  );
}

export default App;
