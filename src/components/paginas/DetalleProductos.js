import React, {useState, useEffect} from 'react';
import { Link, useParams,useNavigate  } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2'; 
import Sidebar from '../ui/Sidebar';


const DetalleProductos = (   ) => {
  
   // Hook para redireccionar
  const navigate = useNavigate();
 
  const formik = useFormik({
      initialValues: {
          reference: "",
          size: "",
          category: "",
          description: "",
          availability: "",
          price: "",
          quantity: "",
          photography:"",
      }, 
      onSubmit: datos => {
          Swal.fire({
              title: 'Quieres crear el producto?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#49854f',
              cancelButtonColor: '#d6304e',
              confirmButtonText: 'Yes, do it!'
            }).then((result) => {
              if (result.isConfirmed) {
                  try{ console.log(datos);
                      fetch(`http://129.151.124.186:80/api/clothe/new`, {
                          method: "POST",
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
                  
                  'Se creo correctamente.',
                  'success'
                  
                  
                );
                navigate('/productos');
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
      <h1 className="text-3xl font-light mb-4">Agregar productos</h1>
           <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form
                      onSubmit={formik.handleSubmit}
                    > 
                        <div className="mb-4">

                        <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">REFERENCIA</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="reference"
                                type="text"
                                placeholder="Referencia" 
                                value={formik.values.reference} 
                                onChange={formik.handleChange}  
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">TALLA</label>
                            <select 
                            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                            id="size"   
                            value={formik.values.size}
                            onChange={formik.handleChange}        
                            >
                            <option value="">Seleccione la talla</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                        </div>
            
                        <div className="mb-4">
                            <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">CATEGORIA</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="category"
                                type="text"
                                placeholder="Categoria"
                                value={formik.values.category}
                                onChange={formik.handleChange} 
                            />
                        </div>
                
                        <div className="mb-4">
                            <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">DESCRIPCION</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description"
                                type="text"
                                placeholder="Descripción" 
                                value={formik.values.description}
                                onChange={formik.handleChange}   
                            />
                        </div>
                   
                        <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">DISPONIBILIDAD</label>
                        <select 
                            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                            id="availability"   
                            value={formik.values.availability}
                            onChange={formik.handleChange}        
                            >
                            <option value="true">Disponible</option>
                            <option value="false">No Disponible</option>
                        </select>

                        <div className="mb-4">
                            <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">PRECIO</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="price"
                                type="number"
                                placeholder="Precio"
                                value={formik.values.price }
                                onChange={formik.handleChange}
                            />
                        </div>
                  

                        <div className="mb-4">
                            <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">CANTIDAD</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="quantity"
                                type="number"
                                placeholder="Cantidad"
                                value={formik.values.quantity}
                                onChange={formik.handleChange}                          
                            />
                        </div>
                
                    <div className="mb-4">
                            <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="nombre">FOTOGRAFIA</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="photography"
                                type="text"
                                placeholder="Fotografia"
                                value={formik.values.photography }
                                onChange={formik.handleChange}
                            />
                        </div>
                   <input
                            type="submit"
                            className="bg-green-900 hover:bg-green-700 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="Agregar Producto"
                        />
                    </form>
                </div>
            </div>
    
    </div>
    </div>
          
        </>
     );
}
 
export default DetalleProductos;