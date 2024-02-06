//imc-page
const campoAltura = document.querySelector("#altura");
const campoPeso = document.querySelector("#peso");
const botao = document.querySelector("#btCalcular");
const bloco = document.querySelector("#imc-page");

function main() {

    botao.addEventListener(('click'), botaoClicado);
    campoAltura.addEventListener(('change'),()=>{
        if(campoAltura.value > 2.20 || campoAltura.value < 1.00){
            alert("Altura inválida. Favor digitar no formato '0,00'")
            campoAltura.value = "";
        }
    })
    campoPeso.addEventListener(('change'),()=>{
        if(campoPeso.value > 550 || campoPeso.value < 1){
            alert("Peso inválido.")
            campoPeso.value = "";
        }
    })
}

function botaoClicado() {
    if(isNaN(campoAltura.value) && isNan(campoPeso.value)){
        alert('Valor inválido inserido')
    }else{

        const resultado = calcularImc(campoAltura.value, campoPeso.value);
        exibirTela(resultado);
    }
    }

function calcularImc(altura, peso) {
    const numeroImc = Math.round((peso/(altura*altura)))
    console.log(numeroImc)
    return consultarImc(numeroImc);
}

function exibirTela(resultado) {
    if (bloco.querySelector(".caixa-resultado")){
        const caixa = document.querySelector(".caixa-resultado")
        caixa.innerHTML = `<h2> Seu resultado foi: </h2></br>
        <p> ${resultado}  </p> `;
    }else{
        const caixa = document.createElement("div");
        caixa.classList.add("caixa-resultado")
        caixa.innerHTML = `<h2> Seu resultado foi: </h2></br>
                       <p> ${resultado}  </p> `;
        bloco.appendChild(caixa);
    };
    

}

function consultarImc(numeroImc) {
    const lista = [
        {
            numero: 24.9,
            imc: 'Peso Normal'
        },
        {
            numero: 18.5,
            imc: "Abaixo do Peso"
        },

        {
            numero: 29.9,
            imc: 'Sobrepeso'
        },
        {
            numero: 34.9,
            imc: 'Obesidade grau 1'
        },
        {
            numero: 39.9,
            imc: 'Obesidade grau 2'
        },
        {
            numero: 40,
            imc: 'Obesidade grau 3'
        }
    ];
    lista.sort(function(a, b){return a.numero - b.numero});
    console.log(lista)
    if(numeroImc <= lista[0].numero){
        return  "Abaixo do Peso"
    }else if( numeroImc > lista[lista.length - 1].numero){
        return "Gordasso hein pai kkkk"
    }
    for (let index = 1; index < lista.length; index++) {
        if(numeroImc <= lista[index].numero && numeroImc > lista[index - 1].numero && numeroImc < lista[index + 1].numero){
            return lista[index].imc
        }
    }
}


main()

        // if(lista[index].numero >= numeroImc){
        //     lista[index - 1].numero === undefined ? console.log("undefined") : console.log("Indefinido mas ao menos deu certo a verificacao");
        // }else if(lista[index].numero >= numeroImc && lista[index - 1].numero < numeroImc ){
        //     return lista[index].imc
        // }else{
        //     lista[index + 1].numero < numeroImc ? console.log("Cheguei a outra verificacao") : console.log("Cheguei a ultima verificacao")
            
        // }