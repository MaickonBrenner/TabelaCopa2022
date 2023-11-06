let grupoA = ["Catar", "Equador", "Senegal", "Holanda"];
let grupoAPartidas = [0, 0, 0, 0]
let grupoAVitorias = [0, 0, 0, 0]
let grupoAEmpates = [0, 0, 0, 0]
let grupoADerrotas = [0, 0, 0, 0]
let grupoAGolsPro = [0, 0, 0, 0]
let grupoAGolsContra = [0, 0, 0, 0]
let grupoASaldos = [0, 0, 0, 0]
let grupoAPontos = [0, 0, 0, 0]
let grupoGolsACatar = [0, 0, 0, 0]
let grupoGolsAEquador = [0, 0, 0]
let grupoGolsASenegal = [0, 0, 0]
let grupoGolsAHolanda = [0, 0, 0]
let jogoAcon = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

document.oninput = function() {
    grupoGolsACatar[0] = window.document.getElementById("aJogo1a").value; //Catar 0
    grupoGolsAEquador[0] = window.document.getElementById("aJogo1b").value; //Equador 0
    grupoGolsASenegal[0] = window.document.getElementById("aJogo2a").value; //Senegal 0
    grupoGolsAHolanda[0] = window.document.getElementById("aJogo2b").value; //Holanda 0
    grupoGolsACatar[1] = window.document.getElementById("aJogo3a").value; //Catar 1
    grupoGolsASenegal[1] = window.document.getElementById("aJogo3b").value; //Senegal 1
    grupoGolsAHolanda[1] = window.document.getElementById("aJogo4a").value; //Holanda 1
    grupoGolsAEquador[1] = window.document.getElementById("aJogo4b").value; //Equador 1
    grupoGolsAEquador[2] = window.document.getElementById("aJogo5a").value; //Equador 2
    grupoGolsASenegal[2] = window.document.getElementById("aJogo5b").value; //Senegal 2
    grupoGolsAHolanda[2] = window.document.getElementById("aJogo6a").value; //Holanda 2
    grupoGolsACatar[2] = window.document.getElementById("aJogo6b").value; //Catar 2
    grupA(0,1,0);
}

function grupA(x,y,j) {
    if (jogoAcon[j] == null) {
        jogoAcon[j] = 0;
    }
    //Primeiro
     if (jogoAcon[j] == 1) {
        grupoAPontos[0] = grupoAPontos[0] - 3
        grupoAPartidas[0]--
        grupoAPartidas[1]--
        grupoAVitorias[0]--
        grupoADerrotas[1]--
        jogoAcon[j] = 0 
    }
    if (jogoAcon[j] == 2) {
        grupoAPontos[1] = grupoAPontos[1] - 3
        grupoAPartidas[0]--
        grupoAPartidas[1]--
        grupoAVitorias[1]--
        grupoADerrotas[0]--
        jogoAcon[j] = 0 
    }
    if (jogoAcon[j] == 3) {
        grupoAPontos[0]--
        grupoAPontos[1]--
        grupoAPartidas[0]--
        grupoAPartidas[1]--
        grupoAEmpates[0]--
        grupoAEmpates[1]--
        jogoAcon[j] = 0
    } //Segundo
    if (jogoAcon[j] == 4) {
        grupoAPontos[2] = grupoAPontos[2] - 3
        jogoAcon[j] = 0
    }
    if (jogoAcon[j] == 5) {
        grupoAPontos[3] = grupoAPontos[3] - 3
        jogoAcon[j] = 0
    }
    if (jogoAcon[j] == 6) {
        grupoAPontos[2]--
        grupoAPontos[3]--
        jogoAcon[j] = 0
    } //Terceiro
    if (jogoAcon[j] == 7) {
        grupoAPontos[0] = grupoAPontos[0] - 3
        jogoAcon[j] = 0
    }
    if (jogoAcon[j] == 8) {
        grupoAPontos[2] = grupoAPontos[2] - 3
        jogoAcon[j] = 0
    }
    if (jogoAcon[j] == 9) {
        grupoAPontos[0]--
        grupoAPontos[2]--
        jogoAcon[j] = 0
    } //Quarto
    if (jogoAcon[j] == 10) {
        grupoAPontos[3] = grupoAPontos[3] - 3
        jogoAcon[j] = 0
    }
    if (jogoAcon[j] == 11) {
        grupoAPontos[1] = grupoAPontos[1] - 3
        jogoAcon[j] = 0
    }
    if (jogoAcon[j] == 12) {
        grupoAPontos[3]--
        grupoAPontos[1]--
        jogoAcon[j] = 0
    }

    
//Primeiro
if (grupoGolsACatar[0]!= null && grupoGolsAEquador[0] != null && jogoAcon[j] == 0) {
    if (grupoGolsACatar[0] > grupoGolsAEquador[0]) {
        grupoAPontos[0] = grupoAPontos[0] + 3
        grupoAPartidas[0]++
        grupoAPartidas[1]++
        grupoAVitorias[0]++
        grupoADerrotas[1]++
        grupoAGolsPro[0] = grupoGolsACatar[0]
        jogoAcon[j] = 1;

    } else if (grupoGolsAEquador[0] > grupoGolsACatar[0]) {
        grupoAPontos[1] = grupoAPontos[1] + 3
        grupoAPartidas[0]++
        grupoAPartidas[1]++
        grupoAVitorias[1]++
        grupoADerrotas[0]++
        grupoAGolsPro[1] = grupoGolsAEquador[1]
        jogoAcon[j] = 2;

    } else if (grupoGolsACatar[0] == grupoGolsAEquador[0]) {
        grupoAPontos[0]++
        grupoAPontos[1]++
        grupoAPartidas[0]++
        grupoAPartidas[1]++
        grupoAEmpates[0]++
        grupoAEmpates[1]++
        jogoAcon[j] = 3;
}
}
//Segundo 
if (grupoGolsASenegal[0]!= null && grupoGolsAHolanda[0] != null && jogoAcon[j] == 0) {
    if (grupoGolsASenegal[0] > grupoGolsAHolanda[0]) {
        grupoAPontos[2] = grupoAPontos[2] + 3

        jogoAcon[j] = 4;
    } else if (grupoGolsAHolanda[0] > grupoGolsASenegal[0]) {
        grupoAPontos[3] = grupoAPontos[3] + 3

        jogoAcon[j] = 5;
    } else if (grupoGolsASenegal[0] == grupoGolsAHolanda[0]) {
        grupoAPontos[2]++
        grupoAPontos[3]++

        jogoAcon[j] = 6;
}
}
//Terceiro
if (grupoGolsACatar[1]!= null && grupoGolsASenegal[1] != null && jogoAcon[j] == 0) {
    if (grupoGolsACatar[1] > grupoGolsASenegal[1]) {
        grupoAPontos[0] = grupoAPontos[0] + 3

        jogoAcon[j] = 7;
    } if (grupoGolsASenegal[1] > grupoGolsACatar[1]) {
        grupoAPontos[2] = grupoAPontos[2] + 3

        jogoAcon[j] = 8;
    } if (grupoGolsACatar[1] == grupoGolsASenegal[1]) {
        grupoAPontos[0]++
        grupoAPontos[2]++

        jogoAcon[j] = 9;
}
}
//Quarto
if (grupoGolsAHolanda[1]!= null && grupoGolsAEquador[1] != null && jogoAcon[j] == 0) {
    if (grupoGolsAHolanda[0] > grupoGolsAEquador[0]) {
        grupoAPontos[3] = grupoAPontos[3] + 3

        jogoAcon[j] = 10;
    } else if (grupoGolsAEquador[1] > grupoGolsAHolanda[1]) {
        grupoAPontos[1] = grupoAPontos[1] + 3

        jogoAcon[j] = 11;
    } else if (grupoGolsAHolanda[1] == grupoGolsAEquador[1]) {
        grupoAPontos[3]++
        grupoAPontos[1]++

        jogoAcon[j] = 12;
}
}

console.log(grupoAPontos[2] + grupoAPontos[3])
window.document.getElementById("aSel0").innerHTML = grupoA[0] //País
window.document.getElementById("aPon0").innerHTML = grupoAPontos[0] //Total de Pontos
window.document.getElementById("aPar0").innerHTML = grupoAPartidas[0] //Partidas
window.document.getElementById("aVit0").innerHTML = grupoAVitorias[0] //Vitorias
window.document.getElementById("aEmp0").innerHTML = grupoAEmpates[0] //Empates
window.document.getElementById("aDer0").innerHTML = grupoADerrotas[0] //Derrotas
window.document.getElementById("aGolM0").innerHTML = grupoAGolsPro[0] //Gols Pro
window.document.getElementById("aGolS0").innerHTML = grupoAGolsContra[0] //Gols Contra
window.document.getElementById("aSal0").innerHTML = grupoASaldos[0] //Saldo de Gols

window.document.getElementById("aSel1").innerHTML = grupoA[1] //País
window.document.getElementById("aPon1").innerHTML = grupoAPontos[1] //Total de Pontos
window.document.getElementById("aPar1").innerHTML = grupoAPartidas[1] //Partidas
window.document.getElementById("aVit1").innerHTML = grupoAVitorias[1] //Vitorias
window.document.getElementById("aEmp1").innerHTML = grupoAEmpates[1] //Empates
window.document.getElementById("aDer1").innerHTML = grupoADerrotas[1] //Derrotas
window.document.getElementById("aGolM1").innerHTML = grupoAGolsPro[1] //Gols Pro
window.document.getElementById("aGolS1").innerHTML = grupoAGolsContra[1] //Gols Contra
window.document.getElementById("aSal1").innerHTML = grupoASaldos[1] //Saldo de Gols

window.document.getElementById("aSel2").innerHTML = grupoA[2] //País
window.document.getElementById("aPon2").innerHTML = grupoAPontos[2] //Total de Pontos

window.document.getElementById("aSel3").innerHTML = grupoA[3] //País
window.document.getElementById("aPon3").innerHTML = grupoAPontos[3] //Total de Pontos


localStorage.setItem(grupoAPontos[0]);
let CatarPontos = localStorage.getItem(grupoAPontos[0]);


}