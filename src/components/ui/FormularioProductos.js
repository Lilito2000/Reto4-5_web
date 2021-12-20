import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ActualizarProducto from '../paginas/ActualizarProducto';

const FormularioProductos = ({producto}) => {

    const {reference, size, price, photography, category,quantity } = producto;

    const [ productos, guardarProductos] = useState([]);

    fetch("http://129.151.124.186:80/api/clothe/all")
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);
        guardarProductos(data);
    });
   

    const borrarProducto = reference =>{

        Swal.fire({
            title: 'Quieres borrar el producto?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#49854f',
            cancelButtonColor: '#d6304e',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                try{
                    console.log(reference);
                    fetch(`http://129.151.124.186:80/api/clothe/${reference}`,{
                        method: "DELETE",
                        headers: {
                            Accept: "aplication/json",
                            "Content-Type": "aplication/json",
                        },
                      }).then((data) =>{
                         // console.log(data);
                      });   
              Swal.fire(
                'Deleted!',
                'Se borro correctamente.',
                'success'
              );
            } catch (error) {
                console.log(error)
            }
            
        }
      })
}
       


    return( 
        <>
    
                

        <div className="w-full px-3 mb-4">
            <div className="p-5 shadow-md bg-white">
                <div className="lg:flex">
                    <div className="lg:w-5/12 xl:w-3/12">
                   
                      <img src={photography} alt=" imagen platillo " />
                            <div className="sm:flex sm:-mx-2 pl-2">
                                
                            </div>
                            </div>
                            <div className="lg:w-7/12 xl:w-9/12 pl-5">
                            <p className="font-bold text-2xl text-yellow-600 mb-4">{size} </p>
                            <p className="font-bold text-2xl text-yellow-600 mb-4">{reference} </p>
                            <p className="text-green-600 mb-4">{category} </p>
                             <p className="text-green-600 mb-4">Precios: {''}
                            <span className="text-green-700 font-bold">$ {price}</span> 
                            <p className="text-green-600 mb-4">Cantidad: {''}
                            <span className="text-green-700 font-bold">{quantity}</span> 
                        </p>
                        </p>
                        <button
                            onClick={ () => borrarProducto(producto.reference)}
                            type="submit"
                            className="bg-green-700 hover:bg-green-900 inline-block mb-5 p-2 text-white uppercase font-bold"> 
                            Borrar
                           
                           </button>
                          
                            <Link to={`/actualizar-producto/${producto.reference}`} 
                            className="  bg-yellow-500 hover:bg-yellow-700 inline-block mb-5 p-2 text-white uppercase font-bold">
                            Actualizar Producto
                            </Link>
                           
                          
                    </div>
                </div>
            </div>
        </div>
        
        </>
        
        
     );
}
 
export default FormularioProductos;