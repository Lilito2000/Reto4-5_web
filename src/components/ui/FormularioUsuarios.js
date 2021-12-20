import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ActualizarUsuario from '../paginas/ActualizarUsuario';

const FormularioUsuarios = ({ usuario }) => {

    const {id, identification, name, birthtDay, monthBirthtDay, address, cellPhone, email, password, zone, type } = usuario;

    const [ usuarios, guardarUsuarios] = useState([]);

    fetch("http://129.151.124.186:80/api/user/all")
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);
        guardarUsuarios(data);
    });

    

    const borrarUsuario = id => {

        Swal.fire({
            title: 'Quieres borrar el usuario?',
            text: "¡No podrás revertir tu decisión!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Fue borrado!'
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    console.log(id);
                    fetch(`http://129.151.124.186:80/api/user/${id}`, {
                        method: "DELETE",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                    }).then((data) => {
                        // console.log(data);
                    });
                    Swal.fire(
                        '¡Borrado!',
                        'Se borro correctamente.',
                        'success'
                    );
                } catch (error) {
                    console.log(error)
                }

            }
        })
    }



    return (
        <div className="w-full px-3 mb-4">
            <div className="p-5 shadow-md bg-white">
                <div className="lg:flex">
                    <div className="lg:w-5/12 xl:w-3/12">

                    <img src="https://res.cloudinary.com/dimonyrmf/image/upload/v1639957280/userlog_csrlod.png" alt='imagen logo' className='w-1/2 mx-auto'/>
                        <div className="sm:flex sm:-mx-2 pl-2">

                        </div>
                    </div>
                    <div className="lg:w-7/12 xl:w-9/12 pl-5">
                        
                        <p className="font-bold text-3xl text-yellow-600 mb-4">{id} </p>
                        <p className="text-green-600 mb-2">Identificacion: {''}
                            <span className="text-green-700 font-bold">{identification}</span>
                        </p>
                        <p className="text-green-600 mb-2">Nombre: {''}
                            <span className="text-green-700 font-bold">{name} </span>
                        </p>
                        <p className="text-green-600 mb-2">Fecha de cumpleaños: {''}
                            <span className="text-green-700 font-bold">{birthtDay}</span>
                        </p>
                        <p className="text-green-600 mb-2">Mes de cumpleaños: {''}
                            <span className="text-green-700 font-bold">{monthBirthtDay}</span>
                        </p>
                        <p className="text-green-600 mb-2">Direccion: {''}
                            <span className="text-green-700 font-bold">$ {address}</span>
                        </p>
                        <p className="text-green-600 mb-2">Telefono: {''}
                            <span className="text-green-700 font-bold">{cellPhone}</span>
                        </p>
                        <p className="text-green-600 mb-2">E-mail: {''}
                            <span className="text-green-700 font-bold">{email}</span>
                        </p>
                        <p className="text-green-600 mb-2">Password: {''}
                            <span className="text-green-700 font-bold">{password}</span>
                        </p>
                        <p className="text-green-600 mb-2">Zona: {''}
                            <span className="text-green-700 font-bold">{zone}</span>
                        </p>
                        <p className="text-green-600 mb-2">Tipo de usuario: {''}
                            <span className="text-green-700 font-bold">{type}</span>
                        </p>
                        
                        
                        <button
                            onClick={() => borrarUsuario(usuario.id)}
                            type="submit"
                            className="bg-indigo-800 shadow-lg rounded-lg hover:bg-green-800 w-full mt-5 p-2 text-white uppercase font-bold"
                        >Borrar</button>

                        <button
                            type="submit"
                            className="bg-indigo-800 shadow-lg rounded-lg hover:bg-green-800 w-full mt-5 p-2 text-white uppercase font-bold">
                            <Link to={`/actualizar-usuario/${usuario.id}`}>
                                Actualizar Usuario
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormularioUsuarios;
