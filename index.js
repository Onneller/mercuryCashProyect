
const iconEye = document.querySelector(".eye");
console.log(iconEye)

const changeIcon = iconEye.querySelector("i");

console.log(changeIcon)

iconEye.addEventListener("click", function () {
    const changeIcon = this.querySelector("i");
    if (this.nextElementSibling.type === "password") {
        this.nextElementSibling.type = "text";
        changeIcon.classList.remove("fa-eye-slash");
        changeIcon.classList.add("fa-eye");
    } else {
        this.nextElementSibling.type = "password";
        changeIcon.classList.remove("fa-eye");
        changeIcon.classList.add("fa-eye-slash");
    }
});
/* Hasta aqui codigo de los ojitos */

const sign = document.querySelector(".delay");
// console.log(sign.href)




/*Despues de 5 segundos cambio el valor del href, pero como tal la pagina no espera esos 5s para cargar*/
setTimeout(() => {
    const sign = document.querySelector(".delay");
    sign.href = "registro.html";
    console.log(sign.href);
}, 5000);



sign.addEventListener("click", function () {

    setTimeout(() => {
        sign.addEventListener("onclick")

    }, 5000);

});


// fetch("dev-mercurycash.us/paises")
//     .then((res) => res.json())
//     .then((countrys) => {
//         let template = ""
//         for (const country of countrys) {
//             console.log(
//                 country
//             )
//         }

//     })




