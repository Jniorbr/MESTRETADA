import { log } from "console";
import prompt from "./readline.js";

async function exercicio1() {
  const n1 = await prompt("Insira o primeiro número: ");
  const n2 = await prompt("Insira o segundo número: ");

  if (n1 > n2) {
    console.log("O numero maior é: ", n1);
  } else {
    console.log("O numero maior é: ", n2);
  }
}

async function exercicio2() {
  const n1 = await prompt("Insira um número: ");

  if (n1 > 0) {
    console.log("O número é positivo");
  } else {
    console.log("O número é negativo");
  }
}
async function exercicio3() {
  const letra = await prompt("Insira uma letra: ");

  if (letra == "M" || letra == "m") {
    console.log("Masculino");
  } else {
    if (letra == "F" || letra == "f") {
      console.log("Feminino");
    } else {
      console.log("Sexo inválido");
    }
  }
}
async function exercicio4() {
  let letra = await prompt("Insira uma letra: ");

  letra = letra.toLowerCase();

  if (
    letra == "a" ||
    letra == "e" ||
    letra == "i" ||
    letra == "o" ||
    letra == "u"
  ) {
    console.log("Vogal");
  } else {
    console.log("Consoante");
  }
}
async function exercicio5() {
  const n1 = await prompt("Insira a primeira média: ");
  const n2 = await prompt("Insira a segunda média: ");

  const media = (parseFloat(n1) + parseFloat(n2)) / 2;

  if (media >= 7) {
    if (media == 10) {
      console.log("Aprovado com distinção");
    } else {
      console.log("Aprovado");
    }
  } else {
    console.log("Reprovado");
  }
}

async function exercicio6() {
  const n1 = await prompt("Insira o primeiro número:");
  const n2 = await prompt("Insira o segundo número:");
  const n3 = await prompt("Insira o terceiro número:");

  if (n1 > n2 && n1 > n3) {
    console.log("O número maior é", n1);
  } else {
    if (n2 > n1 && n2 > n3) {
      console.log("O número maior é", n2);
    } else {
      console.log("O número maior é ", n3);
    }
  }
}

async function exercicio7() {
}
async function exercicio8() {
}
async function exercicio9() {
}
async function exercicio10() {
}
async function exercicio11() {
}
async function exercicio12() {
}
async function exercicio13() {
}
async function exercicio14() {
}
async function exercicio15() {
}
async function exercicio16() {
}
async function exercicio17() {
}
async function exercicio18() {
}
async function exercicio19() {
}
async function exercicio20() {
}
async function exercicio21() {
}
async function exercicio22() {
}
async function exercicio23() {
}
async function exercicio24() {
}
async function exercicio25() {
}
async function exercicio26() {
}
async function exercicio27() {
}
async function exercicio28() {
}
async function exercicio29() {
}

exercicio6();
