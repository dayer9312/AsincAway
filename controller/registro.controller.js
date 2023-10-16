import { clientServices } from "../service/clientService.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();//evento por defecto
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    clientServices.crearCliente(nombre,email).then(()=>{
        window.location.href = "/screens/registro_completado.html";
    })
    .catch((error)=>console.log(error));
});