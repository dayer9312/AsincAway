import { clientServices } from "../service/clientService.js";
const crearNuevaLinea = (nombre, email, id) =>{
    const linea = document.createElement('tr');
    const contenido = `
    <td class="td" data-td>
    ${nombre}
    </td>
    <td>
    ${email}
    </td>
    <td>
      <ul class="table__button-control?id=${id}">
        <li>
            <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
            >Editar
            </a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button" id="${id}">
            Eliminar
          </button>
        </li>
      </ul>
    </td> 
    `;
    linea.innerHTML=contenido;
    const btn = linea.querySelector("button")
    btn.addEventListener("click",()=>{
        const id = btn.id //parametro del boton
        clientServices.eliminarCliente(id).then(respuesta=>console.log(respuesta))
        .catch (error=>console.log("ERROR"))
    })
    return linea;
  };
  const table = document.querySelector("[data-table]")
  clientServices.listaClientes()
  .then((data)=>{
    data.forEach((perfil)=> {
      const nuevaLinea = crearNuevaLinea(perfil.nombre,perfil.email)
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error)=>alert("No hay conexion"));