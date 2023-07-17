

function toggleText(element) {
    element.classList.toggle("text-compressed");
    element.classList.toggle("text-full");
  }


  const temaOscuro = () =>{""
    document.querySelector("body").setAttribute("data-bs-theme","dark");
    document.querySelector("#dl-icon").setAttribute("class","bi bi-sun-fill");
  }


  const temaClaro = () =>{""
  document.querySelector("body").setAttribute("data-bs-theme","light");
  document.querySelector("#dl-icon").setAttribute("class","bi bi-moon-fill");
}

const changeTheme = () => {
    document.querySelector("body").getAttribute("data-bs-theme")=="light"?
    temaOscuro() : temaClaro();
}



function cambiarAtributoSegunHora() {

    const horaActual = new Date().getHours();
  
    if (horaActual === 18) { // 6 AM
      temaClaro();
    } else if (horaActual === 6) { // 6 PM
      temaOscuro();
    }
  }
  
  window.addEventListener('load', cambiarAtributoSegunHora);
  
  