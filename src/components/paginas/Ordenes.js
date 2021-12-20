import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../ui/Sidebar';

const Ordenes = () => {
       return( 
        <>

<div className="md:flex min-h-screen" >
      <Sidebar />
      <div className="md:w-2/5 xl:w-4/5 p-6">
      <h1 className="text-3xl font-light mb-4">Ordenes</h1>
         <Link to="/nueva-orden" className="  bg-green-600 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                Agregar Orden Prueba
            </Link>
    
    </div>
    </div>
         
        </>
     );
}
 
export default Ordenes;