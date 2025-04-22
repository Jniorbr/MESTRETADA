import { log } from "console";
import prompt from "./readline.js";

async function exercicio1() {
  const n1 = await prompt("Insira o primeiro número: ");
  const n2 = await prompt("Insira o segundo número: ");

  console.log("O numero maior é: ", (n1 > n2) ? n1 : n2);
}

async function exercicio2() {
  const n1 = await prompt("Insira um número: ");

  console.log(`O número ${n1} é:`, n1 > 0 ? "positivo" : "negativo");
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
async function exercicio10() {
  const letra = await prompt("Insira seu turno: ");
  letra == letra.toLowerCase()
  if (letra == "m") {
    console.log("Buenos dias muchacho!")
  } else {
    if (letra == "v") {
      console.log("buenas tardes muchacho!")
    } else
      if (letra == "n") {
        console.log("おやすみ")
      } else {
        console.log("Valor inválido")
      }
  }
}

async function exercicio11() {
  const salario = await prompt("Insira seu salário:");
  let porcentagem = 5;
  let reajuste = salario * (porcentagem / 100)
  let novosalario = parseFloat(salario) + reajuste
  if (salario <= 280) {
    porcentagem = 20;
  } else if (salario <= 700) {
    porcentagem = 15;
  } else if (salario <= 1500) {
    porcentagem = 10;
  }
  console.log("Salário antigo =", "R$", salario)
  console.log("Porcentagem de aumento =", porcentagem, "%")
  console.log("Salário atualizado = R$", novosalario)
}
async function exercicio12() {
  const valorhoras = await prompt("Insira o valor da sua hora :");
  const horas = await prompt("Insira a quantidade de horas trabalhadas :");
  let salariobruto = parseFloat(valorhoras) * parseFloat(horas)
  let porcentagemir = 20;
  let ir = salariobruto * (porcentagemir / 100);
  let inss = salariobruto * 0.1;
  let fgts = salariobruto * 0.11;
  let descontos = inss + ir;
  let salarioliquido = salariobruto - descontos;

  if (salariobruto <= 900) {
    porcentagemir = 0;
  } else if (salariobruto <= 1500) {
    porcentagemir = 5;
  } else if (salariobruto <= 2500) {
    porcentagemir = 10;
  }
  console.log("Salario bruto = R$", salariobruto);
  console.log(` (-) IR = (${porcentagemir + "%"})  = R$`, ir);
  console.log(" (-) INSS (10%) = R$", inss);
  console.log("FGTS (11%) = R$", fgts);
  console.log("Total de descontos = R$", descontos);
  console.log("Salário Líquido = R$", salarioliquido);
}
async function exercicio13() {
  const n1 = await prompt("Insira o dia :")
  switch (n1) {
    case "1":
      console.log("Domingo");
      break;
    case "2":
      console.log("Segunda");
      break;
    case "3":
      console.log("Terça");
      break;
    case "4":
      console.log("Quarta")
      break;
    case "5":
      console.log("Quinta")
      break;
    case "6":
      console.log("Sexta")
      break;
    case "7":
      console.log("Sábado");
      break;
    default:
      console.log("Valor inválido");
      break;
  }
}
async function exercicio14() {
  const n1 = await prompt("Insira a primeira média: ");
  const n2 = await prompt("Insira a segunda média: ");

  const media = (parseFloat(n1) + parseFloat(n2)) / 2;
  let conceito = "E"
  if (media >= 9) {
    conceito = "A"
  } else if (media >= 7.5) {
    conceito = "B"
  } else if (media >= 6) {
    conceito = "C"
  } else if (media >= 4) {
    conceito = "D"
  }
  console.log("A média do aluno foi =", media);
  console.log("Com conceito =", conceito);
}
async function exercicio15() {
  const n1 = await prompt("Insira a primeira média: ");
  const n2 = await prompt("Insira a segunda média: ");

  const media = (parseFloat(n1) + parseFloat(n2)) / 2;
  let conceito = "E"
  let resultado = "REPROVADO"
  if (media >= 9) {
    conceito = "A"
    resultado = "APROVADO"
  } else if (media >= 7.5) {
    conceito = "B"
    resultado = "APROVADO"
  } else if (media >= 6) {
    conceito = "C"
    resultado = "APROVADO"
  } else if (media >= 4) {
    conceito = "D"
  }
  console.log("A média do aluno foi =", media);
  console.log("Com conceito =", conceito);
  console.log("O aluno foi", resultado);
}
async function exercicio16() {
}
async function exercicio17() { }
async function exercicio18() { }
async function exercicio19() { }
async function exercicio20() { }
async function exercicio21() { }
async function exercicio22() { }
async function exercicio23() { }
async function exercicio24() { }
async function exercicio25() { }
async function exercicio26() { }
async function exercicio27() { }
async function exercicio28() { }
async function exercicio29() { }

exercicio15();
