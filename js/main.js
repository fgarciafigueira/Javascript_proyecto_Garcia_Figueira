//Arrays de armado
const objetivosAhorro = [
    { id: 1, nombre: "Viaje", precio: 3500 },
    { id: 2, nombre: "Nueva Notebook", precio: 1000 },
    { id: 3, nombre: "Cursos de Programación", precio: 600 },
    { id: 4, nombre: "Auto", precio: 12000 },
    { id: 5, nombre: "Muebles nuevos", precio: 2500 },
    { id: 6, nombre: "Departamento", precio: 35000 }
]

const porcentajeAhorro= ["0", "5","10", "15", "20", "25", "30"]

let cartObjetivos = []

//La primer funcion arma las cartas de los objetivos
function imprimirObjetivosEnHTML(objetivosAhorro){
    let container = document.getElementById("container_objetivos");

    for (const objetivo of objetivosAhorro){
        const card = document.createElement("div")

        precioConvertido=objetivo.precio * 1150.98
        precio_formateado=precioConvertido.toLocaleString("es-Ar", {
            style:"currency",
            currency:"ARS",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })

        card.innerHTML=`<h3>${objetivo.nombre}</h3>
                        <p>Precio: ${precio_formateado}</p>
                        <button class="agregarObjetivo" id="${objetivo.id}">Agregar objetivo </button>`

        container.appendChild(card)

    }
    agregarObjetivoBoton()
}

imprimirObjetivosEnHTML(objetivosAhorro)

//esta funcion agrega al array cartObjetivos el objetivo deseado
function agregarObjetivoBoton (){
     addButton =document.querySelectorAll(".agregarObjetivo")
     addButton.forEach (button => {
        button.onclick=(e) =>{
            const objetivoId= e.currentTarget.id
            const selectObjetivo = objetivosAhorro.find( objetivos =>objetivos.id ==objetivoId)

            cartObjetivos.push(selectObjetivo)
            mostrarCantObjetivos()
        }
     })
}

//una pequeña funcion para mostrar la cantidad de objetivos
function mostrarCantObjetivos(){
    const cantidadElement = document.getElementById("cantidad_objetivos")
    cantidadElement.textContent = cartObjetivos.length
}


//Esta funcion imprime los porcentajes que manejamos para armar la consulta
function imprimirPorcentajesHTML(porcentajeAhorro){
    let selector = document.getElementById("select_porcentajes")

    for (const porcentaje of porcentajeAhorro){
        const deplegable = document.createElement("option")
        deplegable.innerHTML=`<h5 id=${porcentaje} value=${porcentaje}>${porcentaje}%</h5>`
        selector.appendChild(deplegable)
      
    }

}
imprimirPorcentajesHTML(porcentajeAhorro)

const ingresos = document.getElementById('ingresos')
const selector = document.getElementById('select_porcentajes')

const boton_calcular = document.getElementById('boton_calcular')
boton_calcular.addEventListener('click', calcular_objetivos)

//aca se desarrolla todos los calculos. y los guardo en una array
let resultadoObjetivos = []
function calcular_objetivos (){
    if(ingresos!='' && cartObjetivos!=''){
       const totalPrecio= cartObjetivos.reduce((total, objetivo)=>{
        return total+ objetivo.precio
       }, 0)
       const precioConvertido = totalPrecio * 1150.98

       const ingreso =parseFloat(ingresos.value)
       const porcentaje= parseFloat(selector.value)
       const porcentajeDecimal = porcentaje /100
       const ingresoObjetivo=ingreso*porcentajeDecimal
       const totalCalculo= Math.ceil(parseFloat(precioConvertido / ingresoObjetivo))

       const resultado={
            id:Date.now(),
            precioConvertido: precioConvertido,
            ingreso: ingreso,
            porcentaje: porcentaje,
            ingresoObjetivo: ingresoObjetivo,
            totalCalculo: totalCalculo
       }
       resultadoObjetivos.push(resultado)
       console.log(resultadoObjetivos)
       imprimirtablaHTML(resultadoObjetivos)

       localStorage.setItem("objetivosGuardados", JSON.stringify(resultado))

    }
}

function imprimirtablaHTML(resultadoObjetivos){
    let tabla = document.getElementById("cuerpo_tabla")
    tabla.innerHTML=""
    let cabezaTabla = document.getElementById("cabeza_tabla")
    cabezaTabla.innerHTML=""
    const head=document.createElement("tr")
    head.innerHTML=`<th>Total objetivos</th>
                        <th>Ingresos totales</th>
                        <th>Porcentaje dedicado</th>
                        <th>Ingreso dedicado</th>
                        <th>Meses de pagos</th>`
        cabezaTabla.appendChild(head)
    for (const resultado of resultadoObjetivos){
        
        
        const respuesta = document.createElement("tr")
        respuesta.innerHTML=` <td>${resultado.precioConvertido.toLocaleString("es-Ar", { style: "currency", currency: "ARS" })}</td>
                              <td>${resultado.ingreso.toLocaleString("es-Ar", { style: "currency", currency: "ARS" })}</td>
                                <td>${resultado.porcentaje}</td>
                                <td>${resultado.ingresoObjetivo.toLocaleString("es-Ar", { style: "currency", currency: "ARS" })}</td>
                                <td>${resultado.totalCalculo}</td>`
        
        tabla.appendChild(respuesta)
    }
   
}

//Validacion de numeros en input
ingresos.addEventListener('input', function(){
    if (this.value <=0){
        this.value=''
        this.focus()
    }
})

///////////Mostrar la tabla anterior

let objetivosGuardados = JSON.parse(localStorage.getItem("objetivosGuardados")) || []

if (!Array.isArray(objetivosGuardados)) {
    objetivosGuardados = [objetivosGuardados];
}

console.log("Objetivos Guardados:", objetivosGuardados)
function renderTabla (Items){
    let tabla = document.getElementById("cuerpo_tabla")
    tabla.innerHTML=""
    let cabezaTabla = document.getElementById("cabeza_tabla")
    cabezaTabla.innerHTML=""
    const head=document.createElement("tr")
    head.innerHTML=`<th>Total objetivos</th>
                        <th>Ingresos totales</th>
                        <th>Porcentaje dedicado</th>
                        <th>Ingreso dedicado</th>
                        <th>Meses de pagos</th>`
    cabezaTabla.appendChild(head)
    Items.forEach(producto => {
        const fila =document.createElement("tr")
        fila.innerHTML =` <td>${producto.precioConvertido.toLocaleString("es-Ar", { style: "currency", currency: "ARS" })}</td>
                              <td>${producto.ingreso.toLocaleString("es-Ar", { style: "currency", currency: "ARS" })}</td>
                                <td>${producto.porcentaje}</td>
                                <td>${producto.ingresoObjetivo.toLocaleString("es-Ar", { style: "currency", currency: "ARS" })}</td>
                                <td>${producto.totalCalculo}</td>`
        tabla.appendChild(fila)
    })
}

const btnAntiguo = document.getElementById('mostrar_anterior')
btnAntiguo.addEventListener('click', () => renderTabla(objetivosGuardados))

