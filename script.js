



const temaOscuro = () => {""
    document.querySelector("body").setAttribute("data-bs-theme","dark");
    document.querySelector("#dl-icon").setAttribute("class","bi bi-sun-fill");
  }


const temaClaro = () => {""
  document.querySelector("body").setAttribute("data-bs-theme","light");
  document.querySelector("#dl-icon").setAttribute("class","bi bi-moon-fill");
  }

const changeTheme = () => {
    document.querySelector("body").getAttribute("data-bs-theme")=="light"?
    temaOscuro() : temaClaro();
  }



function cambiarAtributoSegunHora() {

    const horaActual = new Date().getHours();
  
    if (horaActual > 6 && horaActual <= 16 ) { // 6 AM
      // temaOscuro();
      temaClaro();
    } else if (horaActual <= 6 && horaActual > 16 ) { // 6 PM
      // temaClaro();
      temaOscuro();
    }
  }
  
  window.addEventListener('load', cambiarAtributoSegunHora);
  
  