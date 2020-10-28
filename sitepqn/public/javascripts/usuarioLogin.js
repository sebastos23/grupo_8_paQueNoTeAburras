const query = function(argument){
    return document.querySelector(argument)
}

window.addEventListener('load', function(){
   
    let formLogin = query('#logueate')
    let elements = formLogin.elements
    for (let index = 0; index < elements.length; index ++){
    elements[index].value = ""
}
 
 let emailLog = query('#email2');
 let passLog = query('#passLog');
 let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
 let errors = { };
 let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
 

 emailLog.addEventListener('blur', function(){
    switch (true) {
        case this.value.length == 0:
            errors.email = "Escribe un email para continuar";
            errorEmail.innerHTML = errors.email
            this.classList.add('is-invalid')
            break;
    case !regExEmail.test(this.value):
        errors.email = "Debes escribir un mail válido";
        errorEmail.innerHTML = errors.email
        this.classList.add('is-invalid')
        break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorEmail.innerHTML = ""  // lo vacio
            break;
    }
})
passLog.addEventListener('blur', function(){
  switch (true) {
        case this.value.length == "":
            errors.pass = "Escribe una contraseña para continuar";
            errorPass.innerHTML = errors.pass
            this.classList.add('is-invalid')
            break;
    case !regExPass.test(this.value):
        errors.pass = "El campo contraseña debe tener: entre 6 y 12 caracteres, al menos 1 mayúscula, una minúscula y un número";
        errorPass.innerHTML = errors.pass
        this.classList.add('is-invalid')
        break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorPass.innerHTML = ""  // lo vacio
            break;
    }
})
formLogin.addEventListener('submit',function(event){
    let error = false
    event.preventDefault()

    let elementsForm = this.argument
    
    for (let index = 0; index < elementsForm.length-1; index++) {
        if(elementsForm[index].value == ""){
            elementsForm[index].classList.add('is-invalid');
            msgError.innerHTML = "Los campos señadados son obligatorios";
            error =true
        }
    }
    if(!error){
        //alert("perfecto")
        formLogin.submit()
    }
    
})

})
