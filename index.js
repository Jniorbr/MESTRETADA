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

exercicio6();
