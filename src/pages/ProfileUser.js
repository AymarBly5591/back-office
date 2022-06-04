import React ,  {useState} from 'react'
import ProfileEdit from '../components/Profile/ProfileEdit'
import ProfileActivity from '../components/Profile/ProfileActivity'
import  Navbar from "../components/Navbar";


const ProfileUser = () => {
  // **************************************** function show component Profile
  const [Edit, setEdit] = useState(true) ;
  const [Activity, setActivity] = useState(false);
  // Afficher ProfilEdit
  function showEdit() {
    setEdit(true);
    setActivity(false);
  }
  // Afficher ProfileActivity
  function showActivity() {
    setEdit(false);
    setActivity(true)
  }
  
   
  return (
    <div>
       {/*  Navbar */}
       <Navbar/>
       
    <div className="container">
          <div className="flex xs:flex-col md:flex-col sm:flex-col lg:flex-row">
          
              <div className="flex border my-10 items-center md:w-full sm:w-full lg:w-[300px] justify-center border-10xl mx-5 w-[300px] h-[200px] rounded-lg bg-dark-100">
                   <div className="relative flex flex-col items-center justify-center">
                       <div className=" relative rounded-lg">
                           <img className="cover img-fluid w-[50px] h-[50px] rounded-[50%]"  src="https://th.bing.com/th/id/OIP.xvWKm_YbOVUgOlIPziwN8QHaJf?pid=ImgDet&w=193&h=247&c=7"/>
                           <button className="absolute right-10 top-2  bottom-3 rounded-2xl py-2 px-1 bg-gray-400">edit</button>
                        </div>
                        <div className="flex-col  my-2 xs:flex md:flex sm:flex">
                            <div type="button" onClick={showEdit} className="bg-gray-600 text-gray-100 m-1 cursor-pointer  hover:underline hover:bg-gray-00 active:bg-gray-300 active:text-gray-600 px-3 py-2 rounded-3xl" >Modifier compte</div>
                            <div type="button" onClick={showActivity} className="bg-gray-100 m-1  cursor-pointer  hover:underline hover:bg-gray-200 active:bg-gray-300 px-3 py-2 rounded-3xl">mes activité</div>
                            <div type="button" className="bg-gray-100 m-1  cursor-pointer  hover:underline hover:bg-gray-200 active:bg-gray-300 px-3 py-2 rounded-3xl">Deconnexion</div>
                            <div type="button" onClick={()=> window.history.back()} className="bg-gray-100 m-1  cursor-pointer  hover:underline hover:bg-gray-200 active:bg-gray-300 px-3 py-2 rounded-3xl">retour</div>
                        </div>
                    </div>
              </div>
                <br className="h-full "/>
               <div className="w-full border">
                        {
                          //  ProfuileEdit
                          Edit == true ? <ProfileEdit/> : null
                        }
                        
                        {
                          // ProfileActivity 
                          Activity == true ? <ProfileActivity/> : null
                        }
                        
               </div>
          </div>
    </div>
    </div>
  )
}

export default ProfileUser