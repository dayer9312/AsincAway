
import { clientServices } from "../service/clientService.js"

const formulario = document.querySelector("[data-form]");
const obtenerInfo = ()=>{
    const url = new URL(window.location)
    const id = url.searchParams.get("id")

    if (id==null){
        window.location.href="/screens/error.html"
    }

    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    clientServices.detalleCliente(id).then((perfil)=>{
        nombre.value = perfil.nombre
        email.value = perfil.email
    });
};

obtenerInfo();

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const url = new URL (window.location);
    const id = url.searchParams("id")

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    clientServices.actualizarCliente(nombre,email,id).then(()=>{
        window.location.href="/screens/edicion_concluida.html";
    });
});