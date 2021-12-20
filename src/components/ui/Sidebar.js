import React from 'react';
import { NavLink } from 'react-router-dom';



const Sidebar = () => {
       return( 
        <div className="md:w-2/6 xl:w-1/5 bg-gray-900">
            <div className="p-6">
            
                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">De alto turmequé</p>
                <img src="https://res.cloudinary.com/dimonyrmf/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1639947252/logo_pbwy82.jpg" alt='imagen logo' className='w-1/2 mx-auto'/>
                <p className="mt-7 text-gray-500">Administra tu empresa en las siguientes opciones:</p>

                <nav className="mt-10">
                    <NavLink className="p-1 text-gray-400 block font-bold hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/">Login</NavLink>
                    <NavLink className="p-1 text-gray-400 block font-bold hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/ordenes">Ordenes</NavLink>
                    <NavLink className="p-1 text-gray-400 block font-bold hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/productos">Productos</NavLink>
                    <NavLink className="p-1 text-gray-400 block font-bold hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/usuarios">Usuarios</NavLink>
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;