


const temaOscuro = () => {
  document.querySelector("body").setAttribute("data-bs-theme","dark");
  document.querySelector("#dl-icon").setAttribute("class","bi bi-sun-fill");
}


const temaClaro = () => {
document.querySelector("body").setAttribute("data-bs-theme","light");
document.querySelector("#dl-icon").setAttribute("class","bi bi-moon-fill");
}


const iconDark = () => {
  const svgs = document.querySelectorAll("svg");
  svgs.forEach((svg) => {
    svg.classList.remove("icon_dark");
    svg.classList.add("icon_light");
  });
}

const iconLight = () => {
  const svgs = document.querySelectorAll("svg");
  svgs.forEach((svg) => {
    svg.classList.remove("icon_light");
    svg.classList.add("icon_dark");

  });
}




const changeTheme = () => {
  const theme = document.querySelector("body").getAttribute("data-bs-theme");

  if (theme === "light") {
    temaOscuro();
    iconLight();
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
  } else {
    temaClaro();
    iconDark();
    document.querySelector("body").setAttribute("data-bs-theme", "light");
  }
}


// function cambiarAtributoSegunHora() {

//     const horaActual = new Date().getHours();
  
//     if (horaActual > 6 && horaActual <= 16 ) { // 6 AM
//       // temaOscuro();
//       temaClaro();
//       iconLight();
//     } else if (horaActual <= 6 && horaActual > 16 ) { // 6 PM
//       // temaClaro();
//       temaOscuro();
//       iconDark();
//     }
//   }
  
//   window.addEventListener('load', cambiarAtributoSegunHora);
  
  