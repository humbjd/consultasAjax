var titulo = document.querySelector(".titulo");		
titulo.textContent = "PESO";
var titulo2 = document.querySelector(".titulo2");
titulo2.textContent = "PACIENTES"

var paciente = document.querySelector(".primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso"); 
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;




if(peso <= 0 || peso >= 1000) {
    alert('Peso Inválido');
    pesoEhValido= false;
    tdImc.textContent = 'Peso inválido!'
}

if(alturaEhValida <= 0 || altura >= 3.00) {
    alert('Altura inválida');
    tdImc.textContent = imc;
}

var imc = peso / (altura * altura);
tdImc.textContent = imc;

titulo.addEventListener("click", mostraMensagem);


function mostraMensagem(){
    console.log("Olá, eu fui clicado");
}

var botaoAdicionar = document.querySelector("adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
    console.log("Oi eu sou o botao e fui clicado");
});




