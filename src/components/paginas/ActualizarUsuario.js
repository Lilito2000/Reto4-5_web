import React, {useState, useEffect} from 'react';
import { Link, useParams,useNavigate  } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2'; 
import Sidebar from '../ui/Sidebar';



const ActualizarUsuario = () => {
    
      // Hook para redireccionar
      const navigate = useNavigate();

    const {id} = useParams();
  

    const [ usuariosActualizar, guardarUsuariosActualizar] = useState([]);

    fetch(`http://129.151.124.186:80/api/user/${id}`)
    .then((res) => res.json())
    .then((data) => {
       
        guardarUsuariosActualizar(data);
    });
    
    const { name, identification,birthDay,monthBirthtDay,address,email,cellPhone,password,zone,type } = usuariosActualizar;
   
    const formik = useFormik({
        initialValues: {
            id: id,
            identificatión: "",
            name: "",
            birthtDay: "",
            monthBirthtDay: "",
            address: "",
            cellPhone: "",
            email:"",
            password: "",
            zone: "",
            type:"",

        }, 
        onSubmit: datos => {
            Swal.fire({
                title: 'Quieres actualizar el usuario?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#49854f',
                cancelButtonColor: '#d6304e',
                confirmButtonText: 'Yes, do it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    try{ console.log(datos);
                        fetch(`http://129.151.124.186:80/api/user/update`, {
                            method: "PUT",
                            body: JSON.stringify(datos),
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                            })
                              .then((res) => res.json())
                              .then((data) => {
                                //console.log(data);             
                        });
                       
                  Swal.fire(
                    'Actualizado!',
                    'Se actualizo correctamente.',
                    'success'
                    
                    
                  );
                  navigate('/usuarios');
                } catch (error) {
                    console.log(error)
                }
                
            }
          })
               
        }
     });   
    
    return( 
        <>
                  <div className="md:flex min-h-screen" >
      <Sidebar />
      <div className="md:w-2/5 xl:w-4/5 p-6">
      <h1 className="text-3xl font-light mb-4 text-green-900">Actualizar Usuarios</h1>

<div className="flex justify-center mt-10">
     <div className="w-full max-w-3xl">
         <form
           onSubmit={formik.handleSubmit}
         > 
         
             <div className="mb-4">
             <p className="font-bold text-2xl text-yellow-600 mb-4">{id} </p>
                 <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">Identificación</label>
                 <input 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="identification"
                     type="number"
                     placeholder="identification"
                     value={formik.values.identification || identification}
                     onChange={formik.handleChange} 
                 />
             </div>
             <div className="mb-4">
                 <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                 <input 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="name"
                     type="text"
                     placeholder="name"
                     value={formik.values.name || name}
                     onChange={formik.handleChange} 
                 />
             </div>
             <div className="mb-4">
                 <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">Fecha de cumpleaños</label>
                 <input 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="birthDay"
                     type="date"
                     placeholder="Fecha de cumpleaños"
                     value={formik.values.birthDay || birthDay}
                     onChange={formik.handleChange} 
                 />
             </div>
             <div className="mb-4">
                 <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">Mes de cumpleaños</label>
                 <input 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="monthBirthtDay"
                     type="number"
                     placeholder="Mes de cumpleaños"
                     value={formik.values.monthBirthtDay || monthBirthtDay}
                     onChange={formik.handleChange} 
                 />
             </div>
             <div className="mb-4">
                 <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">Dirección</label>
                 <input 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="address"
                     type="text"
                     placeholder="Dirección"
                     value={formik.values.address || address}
                     onChange={formik.handleChange} 
                 />
             </div>
             <div className="mb-4">
                 <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">Teléfono</label>
                 <input 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="cellPhone"
                     type="number"
                     placeholder="Teléfono"
                     value={formik.values.cellPhone || cellPhone}
                     onChange={formik.handleChange} 
                 />
             </div>
             <div className="mb-4">
                 <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">Correo</label>
                 <input 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="email"
                     type="email"
                     placeholder="Correo"
                     value={formik.values.email || email}
                     onChange={formik.handleChange} 
                 />
             </div>
             <div className="mb-4">
                 <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">Contraseña</label>
                 <input 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="password"
                     type="password"
                     placeholder="Correo"
                     value={formik.values.password || password}
                     onChange={formik.handleChange} 
                 />
             </div>
             <div className="mb-4">
                 <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">Zona</label>
                 <input 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="zone"
                     type="text"
                     placeholder="Zona"
                     value={formik.values.zone || zone}
                     onChange={formik.handleChange} 
                 />
             </div>
                 
             <div className="mb-4">
                 <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">Tipo</label>
                 <select 
                 className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                 id="type"   
                 value={formik.values.type}
                 onChange={formik.handleChange}        
                 >
                 <option value="">Seleccione tipo de usuario</option>
                 <option value="ADM">ADMINISTRADOR</option>
                 <option value="COORD">COORDINADOR</option>
                 <option value="ASE">ASESOR</option>
                 </select>
             </div>
 
        <input
                 type="submit"
                 className="bg-gray-900 hover:bg-gray-700 w-full mt-5 p-2 text-white uppercase font-bold"
                 value="Actualizar Usuario"
             />
         </form>
     </div>
 </div>
    
    </div>
    </div>
          
       
        </>
     );
}
 
export default ActualizarUsuario;