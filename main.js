const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    const imc = getIMC(peso, altura);
    const percentIMC = getPercentIMC(imc);

    const msg = `Seu IMC é ${imc}(${percentIMC})`;
    setResultado(msg, true);

    if (!peso) {
        setResultado('Altura Inválida', false);
     return;
    }
    if(!altura){
        setResultado('Altura inválida', false);
    }
});

function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function getPercentIMC(percentIMC) {
    const percent = ['Abaixo do peso', 'Peso ideal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (percentIMC >= 39.9) {
        return percent[5];
    }
    if (percentIMC >= 34.9) {
        return percent[4];
    }
    if (percentIMC >= 29.9) {
        return percent[3];
    }
    if (percentIMC >= 24.9) {
        return percent[2];
    }
    if (percentIMC >= 18.5) {
        return percent[1];
    }
    if (percentIMC < 18.5) {
        return percent[0];
    }
}
function criarP() {
    const p = document.createElement('p'); //criando um paragrafo para aparecer no resultado
    return p;
}
function setResultado(msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criarP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}