import { log } from "console";
import prompt from "./readline.js";

async function exercicio1() {
  const n1 = await prompt("Insira o primeiro número: ");
  const n2 = await prompt("Insira o segundo número: ");

  console.log("O numero maior é: ", (n1 > n2) ? n1 : n2);
}

async function exercicio2() {
  const n1 = await prompt("Insira um número: ");

  console.log(`O número ${n1} é:` , n1 > 0 ? "positivo" : "negativo");  
}

async function exercicio3() {
  const letra = await prompt("Insira uma letra: ");

  switch (letra.toLowerCase()) {
    case "m":
      console.log("Masculino");
      break;
      case "f":
      console.log("Feminino");
      break;
    
    default:
      console.log("É gaysaço!!");
      break;
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
      console.log("O número maior é", n3);
    }
  }
}

async function exercicio7() {
  const n1 = await prompt("Insira o primeiro número:");
  const n2 = await prompt("Insira o segundo número:");
  const n3 = await prompt("Insira o terceiro número:");

  if (n1 > n2 && n1 > n3) {
    if (n2 > n3) {
      console.log("O número maior é", n1, "e o número menor é", n3);
    } else {
      console.log("O número maior é", n1, "e o número menor é", n2);
    }
  } else {
    if (n2 > n3) {
      if (n3 > n1) {
        console.log("O número maior é", n2, "e o número menor é", n1);
      } else {
        console.log("O número maior é", n2, "e o número menor é", n3);
      }
    }
    if (n1 > n2) {
      console.log("O número maior é", n3, "e o número menor é", n2);
    } else {
      console.log("O número maior é", n3, "e o número menor é", n1);
    }
  }
}
async function exercicio8() {
  const p1 = await prompt("Insira o preço do primeiro produto:");
  const p2 = await prompt("Insira o preço do segundo produto:");
  const p3 = await prompt("Insira o preço do terceiro produto:");

  if (p1 < p2 && p1 < p3) {
    console.log("O produto 1 tem menor valor");
  } else {
    if (p2 < p3 && p2 < p3) {
      console.log("O produto 2 tem menor valor");
    } else {
      console.log("O produto 3 tem menor valor");
    }
  }
}
async function exercicio9() {
  const n1 = await prompt("Insira o primeiro número:");
  const n2 = await prompt("Insira o segundo número:");
  const n3 = await prompt("Insira o terceiro número:");

  let maior = n1;
  let meio = n2;
  let menor = n3;

  if (n1 > n2 && n1 > n3) {
    if (n2 < n3) {
      meio = n3;
      menor = n2;
    }
  } else {
    if (n2 > n1 && n2 > n3) {
      maior = n2;
      if (n1 > n3) {
        meio = n1;
      } else {
        meio = n3;
        menor = n1;
      }
    } else {
      maior = n3;
      if (n1 > n2) {
        meio = n1;
        menor = n2;
      } else {
        menor = n1;
      }
    }
  }
  console.log(
    "Número maior =",
    maior,
    " , número meio =",
    meio,
    ", número menor =",
    menor
  );
}
async function exercicio10() {}
async function exercicio11() {}
async function exercicio12() {}
async function exercicio13() {}
async function exercicio14() {}
async function exercicio15() {}
async function exercicio16() {}
async function exercicio17() {}
async function exercicio18() {}
async function exercicio19() {}
async function exercicio20() {}
async function exercicio21() {}
async function exercicio22() {}
async function exercicio23() {}
async function exercicio24() {}
async function exercicio25() {}
async function exercicio26() {}
async function exercicio27() {}
async function exercicio28() {}
async function exercicio29() {}

exercicio3();
