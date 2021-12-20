import React, {useState, useEffect} from 'react';
import { Link, useParams,useNavigate  } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2'; 
import Sidebar from '../ui/Sidebar';


const DetalleUsuarios = (   ) => {
  
    // Hook para redireccionar
   const navigate = useNavigate();
 
   // validación y leer los datos del formulario
 const formik = useFormik({
   initialValues: {
    id: "",
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
        title: 'Quieres crear el usuario?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#49854f',
        cancelButtonColor: '#d6304e',
        confirmButtonText: 'Yes, do it!'
      }).then((result) => {
        if (result.isConfirmed) {
            try{ console.log(datos);
                fetch(`http://129.151.124.186:80/api/user/new`, {
                    method: "POST",
                    body: JSON.stringify(datos),
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin":"*",
                        "Access-Control-Allow-Credentials":true,

                      },
                    })
                      .then((res) => res.json())
                      .then((datos) => {
                        //console.log(datos);             
                });
               
          Swal.fire(
            
            'Se creo correctamente.',
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
      <h1 className="text-3xl font-light mb-4">Agregar usuarios</h1>
        
      <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form
                      onSubmit={formik.handleSubmit}
                    > 
                        <div className="mb-4">

                        <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">ID</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="id"
                                type="number"
                                placeholder="id" 
                                value={formik.values.id} 
                                onChange={formik.handleChange}  
                            />
                        </div>
                        {formik.touched.id && formik.errors.id ? (
                                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                        <p className="font-bold">Hubo un error:</p>
                                        <p>{formik.errors.id} </p>
                                    </div>
                                ) : null}
                        <div className="mb-4">
                            <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">IDENTIFICACION</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="identification"
                                type="number"
                                placeholder="Identificación" 
                                value={formik.values.identificación} 
                                onChange={formik.handleChange}  
                            />
                        </div>
                        {formik.touched.identificacion && formik.errors.identificacion ? (
                                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                        <p className="font-bold">Hubo un error:</p>
                                        <p>{formik.errors.identificacion} </p>
                                    </div>
                                ) : null}
            
                        <div className="mb-4">
                            <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">NOMBRE</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Nombre"
                                value={formik.values.name}
                                onChange={formik.handleChange} 
                            />
                        </div>
                        {formik.touched.nombre && formik.errors.nombre ? (
                                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                        <p className="font-bold">Hubo un error:</p>
                                        <p>{formik.errors.nombre} </p>
                                    </div>
                                ) : null}
                        
                        <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">FECHA DE CUMPLEAÑOS</label>
                        <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="birthtDay"
                                type="date"
                                placeholder="Fecha de cumpleaños" 
                                value={formik.values.birthtDay}
                                onChange={formik.handleChange}   
                            />

                        <div className="mb-4">
                            <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">MES DE CUMPLEAÑOS</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="monthBirthtDay"
                                type="number"
                                placeholder="Mes de cumpleaños"
                                value={formik.values.monthBirthtDay }
                                onChange={formik.handleChange}
                            />
                        </div>
                        

                        <div className="mb-4">
                            <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">DIRECCION</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="address"
                                type="text"
                                placeholder="Dirección"
                                value={formik.values.address}
                                onChange={formik.handleChange}                          
                            />
                        </div>
                
                    <div className="mb-4">
                            <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">TELEFONO</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="cellPhone"
                                type="text"
                                placeholder="Teléfono"
                                value={formik.values.cellPhone }
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">CORREO</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Correo"
                                value={formik.values.email }
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">CONTRASEÑA</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Contraseña"
                                value={formik.values.password }
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">ZONA</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="zone"
                                type="text"
                                placeholder="Zona"
                                value={formik.values.zone }
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">TIPO</label>
                            <select 
                            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                            id="type"   
                            value={formik.values.type}
                            onChange={formik.handleChange}        
                            >
                            <option value="">Seleccione el tipo de usuario</option>
                            <option value="ADM">ADMINISTRADOR</option>
                            <option value="COORD">COORDINADOR</option>
                            <option value="ASE">ASESOR</option>
                            </select>
                        </div>

                   <input
                            type="submit"
                            className="bg-green-900 hover:bg-green-700 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="Agregar Usuario"
                        />
                    </form>
                </div>
            </div>
    
    </div>
    </div>
          
        </>
     );
}
 
export default DetalleUsuarios;