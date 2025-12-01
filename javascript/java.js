const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const numero = document.getElementById('numero');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (e) => {
   e.preventDefault();


   checkInputs();
});

function checkInputs() {
   const nomeValue = nome.value.trim();
   const emailValue = email.value.trim();
   const numeroValue = numero.value.trim();
   const mensagemValue = mensagem.value.trim();

   
    if (nomeValue === '') {
        setErrorFor(nome, 'O nome é obrigatório')
    
    } else{
        setSuccessFor(nome);
    }
    if (emailValue === '') {
        setErrorFor(email, 'O email é obrigatório')
   } else if ( !checkEmail(emailValue)) {
        setErrorFor(email, 'Por favor insira um email válido');

   } else{
        setSuccessFor(email);
   }

    if (numeroValue === '') {  
       setErrorFor(numero, 'O número é obrigatório');
   } else if (!/^\d+$/.test(numeroValue)) {  
       setErrorFor(numero, 'Somente números são permitidos');  
   } else {
       setSuccessFor(numero);
   }


    if (mensagemValue === '') {
        setErrorFor(mensagem, 'A mensagem é obrigatória')
    } else {
        setSuccessFor(mensagem);
    }

    const formControls = form.querySelectorAll('.form-control');

    const  formIsValid = [...formControls].every((formControl) => {
        return ( formControl.className === 'form-control success');
});

if (formIsValid) {
    console.log('O formulário está 100% válido!');
}
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');


    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}

function checkEmail(Email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Email);
}

