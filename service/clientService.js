
//create = post
//read = get obtener
//update = put/patch
//delete = delete
/*const listaClientes=()=>{
  const promise = new Promise ((resolve,reject)=>{
      const http = new XMLHttpRequest();
      http.open("GET","http://localhost:3000/perfil");
      http.send();

      http.onload=()=>{
        const response = JSON.parse(http.response);
        if(http.status>=400){
          reject(response);
        }else 
        resolve(response);
      };
  });
  return promise;   
}*/

import { v4 as uuidv4 } from 'https://jspm.dev/uuid';


const listaClientes =()=>{
  return fetch("http://localhost:3000/perfil").then((respuesta)=>respuesta.json());
}


const crearCliente =(nombre, email)=>{
  return fetch("http://localhost:3000/perfil", {
    method:"POST", //promise para para la conexion
    headers:{ //para ver que tipo de archivo se enviara
      "Content-Type": "application/json",
    },
    body: JSON.stringify({nombre, email, id: uuidv4()})
  });
};

const detalleCliente=(id)=>{
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta)=>respuesta.json())
};

const actualizarCliente = (nombre, email, id)=>{
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method:"PUT",
    headers:{ //para ver que tipo de archivo se enviara
      "Content-Type": "application/json",
    },
    body: JSON.stringify({nombre, email}),
  }).then((respuesta)=>(respuesta))
  .catch((error)=>console.log(error))
}

const eliminarCliente =(id)=>{
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method:"DELETE"
  });
}

export const clientServices={
  listaClientes,
  crearCliente,
  detalleCliente,
  actualizarCliente,
  eliminarCliente
};