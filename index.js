let resultado = calculadoraRankeadas(100,10);//inserir numeros de vitorias e derrotas
console.log(resultado) //mostrar resultado

function calculadoraRankeadas (vitorias, derrotas){
    let saldoRankeadas = vitorias - derrotas;
    let nivel;


    if (vitorias < 10){
        nivel = "Ferro";
    }else if (vitorias >=11 && vitorias <=20){
        nivel = "Bronze"
    }else if (vitorias >=21 && vitorias <=50){
        nivel = "Prata"
    }else if (vitorias >=51 && vitorias <=80){
        nivel = "Ouro"
    }else if (vitorias >=81 && vitorias <=90){
        nivel = "Diamante"
    }else if (vitorias >=91 && vitorias <=100){
        nivel = "Lendário"
    }else {
        nivel = "Imortal";
    }
    return `O Herói tem saldo de ${saldoRankeadas} e está no nível de ${nivel}`;

}

