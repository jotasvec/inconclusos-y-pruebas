
var formulario = document.getElementById('formulario'),
    nombre = formulario.nombre,
    email = formulario.correo,
    sexo = formulario.sexo,
    terminos = formulario.terminos,
    error = document.getElementById('error');


function validarNombre(e) {
    if (nombre.value == null || nombre.value == '' ) {
        error.style.display = 'block';
        console.log('ingresar nombre');
        error.innerHTML += '<li>Ingresar Nombre</li>';
        
        e.preventDefault();
    } else{
        error.display = 'none';
    }
}

function validarEmail(e) {
    if (email.value == null || email.value == '' ) {
        error.style.display = 'block';
        console.log('ingresar Correo');
        error.innerHTML += '<li>Ingresar Correo</li>';
        
        e.preventDefault();
    } else{
        error.display = 'none';
    }
}

function validarSexo(e) {
    if (sexo.value == null || sexo.value == '' ) {
        error.style.display = 'block';
        console.log('seleccionar Sexo');
        error.innerHTML += '<li>seleccionar Sexo</li>';
        
        e.preventDefault();
    } else{
        error.display = 'none';
    }
}

function validarTerminos(e) {
    if (terminos.checked == false) {
        error.style.display = 'block';
        console.log('Aceptar Terminos y condiciones');
        error.innerHTML += '<li>Aceptar Terminos y condiciones</li>';
        
        e.preventDefault();
    } else{
        error.display = 'none';
    }
}

formulario.addEventListener('submit', function(e) {
    error.innerHTML = '';
    console.log("entrando al addEventListener");
    validarNombre(e);
    validarEmail(e);
    validarSexo(e);
    validarTerminos(e);
});