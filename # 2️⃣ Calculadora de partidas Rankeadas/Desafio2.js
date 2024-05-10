let vitoriaJogador = 200;
let derrotasJogador = 120;
let seuRank = vitoriaJogador - derrotasJogador;

let resultado = calculandoSeuRank(seuRank);
console.log(resultado);

function calculandoSeuRank(seuRank) {
  let nivel;
  if (seuRank < 10) {
      nivel = "Ferro";
  } else if (seuRank >= 11 && seuRank <= 20) {
      nivel = "Bronze";
  } else if (seuRank >= 21 && seuRank <= 50) {
      nivel = "Prata";
  } else if (seuRank >= 51 && seuRank <= 80) {
      nivel = "Ouro";
  } else if (seuRank >= 81 && seuRank <= 90) {
      nivel = "Diamante";
  } else if (seuRank >= 91 && seuRank <= 100) {
      nivel = "Lendário";
  } else if (seuRank >= 101) {
      nivel = "Imortal";
  } else {
      nivel = "Indefinido";
  }

  return "O Herói está no nível de " + nivel;
}