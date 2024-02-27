const cryptoName = 'bitcoin'; // Puedes cambiar esto por el nombre de la criptomoneda que desees buscar

fetch('https://api.coinlore.net/api/tickers/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const cryptoData = data.data.find(crypto => crypto.name.toLowerCase() === cryptoName);
    if (cryptoData) {
      console.log(`La criptomoneda ${cryptoName.toUpperCase()} se encuentra en el rango ${cryptoData.rank}`);
    } else {
      console.log(`No se encontró la criptomoneda ${cryptoName.toUpperCase()}`);
    }
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud fetch:', error);
  });

/*Primero llamamos a las variables que se van a utilizar */
dinero = document.getElementById("IntroducirCantidad");
/* Definimos las variables por defecto*/

let origen="EUR";
let salida="EUR";



const Boton = document.getElementById("boton");
const TextoOrigen = document.getElementById("TextoOrigen");
const TextoFinal = document.getElementById("TextoFinal");

let dinero_intr=0;


const muestraCantidadFinal = function(valor){
    dinero_intr=dinero.value;
    TextoFinal.textContent= "Se ha introducido un total de : " + dinero_intr + origen + " la conversion es de " + dinero_intr*valor + salida || 'Desconocido';
}

function opcionSeleccionada(valor){
    origen = valor;
    peticion(origen,salida);
}

function otraOpcionSeleccionada(valor){
    salida = valor;
    peticion(origen,salida);

}

function dineroIntroducido(valor){
    dinero_intr=valor;
}

function peticion(origen,salida){
    fetch(`https://open.er-api.com/v6/latest/${origen}`).then(respuesta=>{
    if(respuesta.ok){
        return respuesta.json();  
    }
    }).then(objeto=>{
        muestraCantidadFinal(objeto && objeto.rates[salida]);
    }).catch(error=>{
        console.log("Error");
    });
}

try{
    document.getElementById("IntroducirCantidad").addEventListener("input", function() { /*Esto es para cada vez que cambiemos el valor introducido, se actualice la conversion*/
    peticion(origen,salida);
    }); 
}catch(error){
    
}
    


/*Aqui se va a implementar lo de los idiomas, ahora la conexion con el json lo vamos a hacer con el async/await */
var idioma_actual;

const Inicio = document.getElementById("Inicio");
const Talla = document.getElementById("Talla");
const SobreNosotros = document.getElementById("SobreNosotros");
const Ayuda = document.getElementById("Ayuda");

const AñadirAlCarrito = document.querySelectorAll(".botones");

const elidioma = document.getElementById("SeleccionarIdioma");

const precio1 = document.getElementById("Precio1");
const precio2 = document.getElementById("Precio2");
const precio3 = document.getElementById("Precio3");
const precio4 = document.getElementById("Precio4");
const precio5 = document.getElementById("Precio5");
const precio6 = document.getElementById("Precio6");
const precio7 = document.getElementById("Precio7");
const precio8 = document.getElementById("Precio8");
const precio9 = document.getElementById("Precio9");


const TextoSobreNosotros = document.getElementById("textoooo");

const BotonIngles = document.getElementById("BotonIN");

const conver_moneda = document.getElementById("conver_moneda");
const texto_moneda = document.getElementById("texto_moneda");
const selec_opc = document.getElementById("selec_opc");
const intro_cantidad = document.getElementById("intro_cantidad");
const se_conver = document.getElementById("se_conver");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const metodo_pago = document.getElementById("metodo_pago");
const tarj_cred = document.getElementById("tarj_cred");
const Pagar = document.getElementById("Pagar");


/* Se ha creado el archivo json con las traducciones y se ha subido a github, y a partir de este enlace podemos acceder a los datos*/
const seleccionarIdioma = async function(idioma,numero){
    try{
        const informacion = await fetch(`https://raw.githubusercontent.com/CarlosMarinT/Prueba/main/idioma_${idioma}.json`);
        if(informacion.ok){
            const archivo = await informacion.json();
            Inicio.textContent=archivo.Inicio;
            Talla.textContent=archivo.Tallas;
            SobreNosotros.textContent = archivo.SobreNosotros;
            Ayuda.textContent = archivo.Ayuda;

            if(numero==1){
                precio1.textContent = archivo.Precio1;
                precio2.textContent = archivo.Precio2;
                precio3.textContent = archivo.Precio3;
                precio4.textContent = archivo.Precio4;
                precio5.textContent = archivo.Precio5;
                precio6.textContent = archivo.Precio6;
                precio7.textContent = archivo.Precio7;
                precio8.textContent = archivo.Precio8;
                precio9.textContent = archivo.Precio9;
            }
            AñadirAlCarrito.forEach(elemento =>{
                elemento.textContent=archivo.AñadirAlCarrito;
            });

            
            /*precios.forEach(elemento =>{
                console.log(elemento);
            });
            */

            if(numero==2){
                TextoSobreNosotros.innerHTML = archivo.TextoSobreNosotros;
            }

            if(numero==3){
                conver_moneda.textContent = archivo.conver_moneda;
                texto_moneda.textContent = archivo.texto_moneda;
                selec_opc.textContent = archivo.selec_opc;
                intro_cantidad.textContent = archivo.intro_cantidad;
                se_conver.textContent = archivo.se_conver;
            }

            if(numero==4){
                nombre.textContent = archivo.nombre;
                correo.textContent = archivo.correo;
                telefono.textContent= archivo.telefono;
                metodo_pago.textContent= archivo.metodo_pago;
                tarj_cred.textContent = archivo.tarj_cred;
                Pagar.textContent=archivo.Pagar
            }
            
            
        }else{
            console.log("Se ha cargado mal el archivo");
        }
    }catch(error){
        console.log("Error en idiomas", error);
    }   
}


function actualizarIdioma(idioma,numero){
    idioma_actual=idioma;
    seleccionarIdioma(idioma,numero);
}
function mostrarOpciones() {
    document.querySelector('.BotonesIdiomas').style.display = 'block';
  }
  
function ocultarOpciones() {
    document.querySelector('.BotonesIdiomas').style.display = 'none';
}



/*
function seleccionarIdioma(idioma){
    fetch(`https://raw.githubusercontent.com/CarlosMarinT/Prueba/main/idioma_${idioma}.json`).then(respuesta=>{
    if(respuesta.ok){
        return respuesta.json();  
    }
    }).then(objeto=>{
        console.log(objeto.Inicio);
    }).catch(error=>{
        console.log("Error");
    });
}
*/

/*BotonIngles.addEventListener('click',seleccionarIdioma('in'));*/

