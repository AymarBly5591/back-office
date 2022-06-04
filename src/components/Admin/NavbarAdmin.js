import React , {useState} from  "react" ;


function NavbarAdmin(){

    // montrer les items de naviguation 

       /* Items des notifications */
    const [Notif ,  setNotif] =  useState(false);

       /* Items des commandes */
    const [Commands ,  setCommands] =  useState(false);

    const  [Other ,  setOther] =  useState(true);



    // function Afiicher Notification
      function showNotif() {
          setNotif(!Notif);
          setCommands(false);
      }
    // function Afiicher commandes
    function showCommands() {
        setNotif(false)
        setCommands(!Commands);
    }


    return(
        <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
>
  <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
    
      <button className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
      type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation" >

          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="w-6" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >

                  <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                  </svg>
      </button>


    <div className="relative collapse  navbar-collapse flex items-center" id="navbarSupportedContent1">
      <a className="text-xl text-white pr-2 font-semibold" href="flex">Logo</a>
      
      <ul className="navbar-nav flex  pl-0 list-style-none mr-auto">
        <li className="nav-item p-2">
            <button className="nav-link text-white" href="#">Accueil</button>
        </li>
        <li className="nav-item p-2">
            <button type="button" onClick={showCommands} className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 focus:font-extrabold focus: focus:border-b p-0" href="#">
               commandes
            </button>
        </li>
        <li className="nav-item p-2">
            <a className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0" href="#" >
                Produits en ligne
            </a>
        </li>
        <li className="nav-item p-2">
            <a className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0" href="#" >
                ? aide
            </a>
        </li>
      </ul>
      {/*  Montrer les différetns item de commandes  */}
      { 
        Commands == true ?
        <ul className=" absolute right-20  top-10  bg-white  space-y-3 py-2 rounded-lg shadow-lg mt-1 m-0 border-none ">
              <li className="border">
                  <a href="" className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                      Nouvelles commandes <span className=" bg-green-600 text-white font-bold p-1 rounded-[50%]">1</span>
                  </a>
              </li>
              <li className="border">
                  <a href="" className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                       Commmandes fournisseurs<span className=" bg-green-600 text-white font-bold p-1 rounded-[50%]">1</span>
                  </a>
              </li>
          </ul>
          :
             null

    }
    </div>
    

   
    <div className="flex items-center relative">
      
      

      <div className="dropdown relative">
         <button type="button" onClick={showNotif} className="relative  text-white opacity-60 hover:opacity-80 focus:opacity-100 mr-4 dropdown-toggle hidden-arrow flex items-center"
           >

              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                   <path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z">
                   </path>
              </svg>
               <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5" >
                   1
               </span>
         </button>
         { // Item pour les notifcation Commndes et nouveaux produit ajouté 
            Notif == true ?
            <ul className=" absolute right-1 bg-white  space-y-3 py-2 rounded-lg shadow-lg mt-1 m-0 border-none ">
                  <li className="border">
                      <a href="" className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                          Commandes <span className=" bg-green-600 text-white font-bold p-1 rounded-[50%]">1</span>
                      </a>
                  </li>
              </ul>
              :
                 null
        }

         </div>
              <div className="dropdown relative">
                  <a className="dropdown-toggle flex items-center hidden-arrow" href="#" id="dropdownMenuButton2" role="button" data-bs-toggle="dropdown"
                       aria-expanded="false"
                    >
                     <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-full" style={{height: "25px", width: "25px"}}
                           alt="" loading="lazy" />
                 </a>
              </div>
         </div>
    
  </div>


     {/* pour les autre champs de la barre de naviguation  */}
     <div className="absolute">
     </div>
</nav>
    )
}
export default NavbarAdmin;