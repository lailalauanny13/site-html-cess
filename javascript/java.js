const form = document.getElementById('form');
const nome = document.getElementById('nome');
const Email = document.getElementById('Email');
const Número = document.getElementById('Número');
const Mensagem = document.getElementById('Mensagem');

form.addEventListener('submit', (e) => {
   e.preventDefault();


   chekinputs();
});

function chekinputs() {
    const nomeValue = nome.value;
    const EmailValue = Email.value;
    const NúmeroValue = Número.value;
    const MensagemValue = Mensagem.value;
   
    if (nomeValue === '') {
        setErrorFor(nome, 'O nome é obrigatório')
    
    } else{
        setSuccessFor(nome);
    }
    if (EmailValue === '') {
        setErrorFor(Email, 'O email é obrigatório')
   } else if ( !checkEmail(EmailValue)) {
        setErrorFor(Email, 'Por favor insira um email válido');

   } else{
        setSuccessFor(Email);
   }

    if (NúmeroValue === '') {  
        setErrorFor(Número, 'O número é obrigatório')

    } else{
        setSuccessFor(Número);
    }

    if (MensagemValue === '') {
        setErrorFor(Mensagem, 'A mensagem é obrigatória')
    } else {
        setSuccessFor(Mensagem);
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
