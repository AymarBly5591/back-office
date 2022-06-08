
import './App.css';
import  {Routes  ,  Route} from  "react-router-dom"

import AdminProduct from "./pages/AdminProduct";




function App() {
  return (
    <div>
         
         <Routes>
            {/*Tableau de bord d'administration */}
            <Route path="/" element={<AdminProduct/>} />
         </Routes>
    </div>
  );
}

export default App;
