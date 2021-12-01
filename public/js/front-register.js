window.addEventListener("load", function () {

    let form = document.querySelector("form")


    form.addEventListener("submit", function (e) {
        var inputs = document.querySelectorAll('.inputs');
        e.preventDefault();
        let errores = [];

        let nombre = document.querySelector("#firstName");
        if (nombre.value == "") {
            errores.push("El campo nombre no debe estar vacio")
        } else if (nombre.value.length < 2) {
            errores.push("El campo de nombre debe tener al menos 2 caracteres")
        }
        let apellido = document.querySelector("#lastName");
        if (apellido.value == "") {
            errores.push("El campo apellido no debe estar vacio")
        }
        let email = document.querySelector("#email");
        if (email.value == "") {
            errores.push("El campo mail no debe estar vacio")
        } else if ((!email.value.indexOf("@") != "" && (email.value.indexOf(".")))) {
            errores.push("Debes ingresar un email válido")
        }
        let imagen = document.querySelector("#image");
        if (imagen.value == "") {
            errores.push("Debes subir una imagen de perfil")
        } else if (!imagen.value.includes(".png")) {
            console.log("ok2")
            errores.push("Debes subir un archivo válido")
        }
        let Password = document.querySelector("#password")
        if (Password.value == "") {
            errores.push("Debes ingresar una contraseña ")
        } else if (campoPassword.value.length < 4) {
            errores.push("Debes ingresar una contraseña de al menos 4 caracteres")
        }
        if (errores.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector("div.errores ul");
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        } else {
            form.submit()
        }
    });
})