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
  const l1 = await Number(prompt("Insira o primeiro lado do seu Triângulo :"));
  const l2 = await Number(prompt("Insira o segundo lado do seu Triângulo :"));
  const l3 = await Number(prompt("Insira o terceiro lado do seu Triângulo :"));
  let triangulo = "Dado inválido"

  if ((l1 + l2) >= l3 & (l1 + l3) >= l2 & (l2 + l3) >= l1) {
    if (l1 == l2) {
      if (l2 == l3) {
        triangulo = "Triângulo Equilátero."
      } else {
        triangulo = "Triângulo Isósceles."
      }
    } else if (l1 == l3) {
      triangulo = "Triângulo Isósceles."
    } else if (l2 == l3) {
      triangulo = "Triângulo Isósceles."
    } else {
      triangulo = "Triângulo Escaleno."
    }
  } else { }
  console.log(triangulo);
}
async function exercicio17() {
  const a = await prompt("Insira o valor de A :");
  if (a == 0) {
    console.log("Não é uma equação do segundo grau , encerrando programa");
  } else {
    const b = await prompt("Insira o valor de B :");
    const c = await prompt("Insira o valor de C :");
    const delta = (b * b) - (4 * a * c)
    const raiz = Math.sqrt(delta);
    const raizbaixo = 2 * a;
    const x1 = (-b + raiz) / raizbaixo;
    const x2 = (-b - raiz) / raizbaixo;
    if (delta < 0) {
      console.log("O valor de delta é ", delta, " , não é uma equação do segundo grau. Encerrando programa")
    } else {
      if (x1 == x2) {
        console.log("A expressão possui apenas uma raiz real e é = ", x1)
      } else {
        console.log("A raiz 1 da equação é ", x1);
        console.log("A raiz 2 da equação é ", x2);
      }
    }
  }
}
async function exercicio18() {
  const ano = await prompt("Insira o ano :");

  const quatro = ano % 4;
  const cem = ano % 100;
  const quatrocentos = ano % 400;
  let resultado = "não é bissexto.";

  if (quatro == 0) {
    if (cem == 0) {
      if (quatrocentos == 0) {
        resultado = "é bissexto."
      }
    } else
      resultado = "é bissexto."
  }
  console.log("O ano de", ano, resultado);
}
async function exercicio19() {
  const n1 = await prompt("Insira um número inteiro ");
  const resto = parseFloat(n1) % 2;
  let result = "ÌMPAR";

  if (resto == 0) {
    result = "PAR";
  }
  console.log("O número :", n1, " ele é ", result);
}
async function exercicio20() {
  const n1 = await prompt("Digite o primeiro número inteiro : ");
  const n2 = await prompt("Digite o segundo número inteiro  : ");
  const op = await prompt("Qual operação deseja realizar ? (soma,subtracao,multiplicacao ou divisao) : ");
  let result = (parseFloat(n1) / parseFloat(n2)) * 0
  op == op.toLowerCase()

  if (op == "soma") {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (op == "subtracao") {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (op == "multiplicacao") {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (op == "divisao") {
    result = parseFloat(n1) / parseFloat(n2)
  } else { }
  let num1 = "ímpar"
  let num2 = "negativo"
  let rest = result % 2
  if (rest == 0) {
    num1 = "par"
  } if (result >= 0) {
    num2 = "positivo"
  }
  console.log("O resultado da operação é = ", result);
  console.log("É um número", num1, ",e um número", num2);
}
async function exercicio21() {
  console.log("Responda com SIM OU NAO");
  const fone = await prompt("Telefonou para a vítima?");
  let result = 0
  let suspect = "Inocente"
  if (fone == "sim" || "SIM ") {
    result + 1
  } 
  const local = await prompt("Esteve no local do crime?");
  if (local == "sim" || "SIM ") {
    result + 1
  }
  const mora = await prompt("Mora perto da vítima?");
  if (mora == "sim" || "SIM ") {
    result + 1
  }
  const devia = await prompt("Devia para a vítima?");
  if (devia == "sim" || "SIM ") {
    result + 1
  }
  const trabalha = await prompt("Já trabalhou com a vítima?");
  if (trabalha == "sim" || "SIM ") {
    result = result + 1
  } if (result >= 5) {
    suspect = "Assassino!!!!!"
  } else if (result >= 3) {
    suspect = "Cúmpliceeeeee"
  } else if (result > 1) {
    suspect = "Suspeito otário"
  } else { }
  console.log(suspect);
}
async function exercicio22() {
  const litros = await prompt("Insira quantos litros vendidos: ");
  const comb = await prompt("Insira 'A' para álcool ou 'G' para gasolina: ");
  let desconto = 0;
  let result = "Selecione uma opção de combustivel válida";
  comb == comb.toLocaleLowerCase();

  if (comb == "a") {
    if (litros >= 20) {
      desconto = 0.05
    } else { desconto = 0.03 }
    let comdesconto = parseFloat(litros) * desconto
    let diferenca = parseFloat(litros) - comdesconto
    result = `O valor pago de diferença é , ${diferenca} litros`;
  } else if (comb == "g") {
    if (litros >= 20) {
      desconto = 0.06
    } else { desconto = 0.04 }
    let comdesconto = parseFloat(litros) * desconto
    let diferenca = parseFloat(litros) - comdesconto
    result = `O valor pago de diferença é , ${diferenca} litros`;
  } else { }
  console.log(result);
}
async function exercicio23() {
  const n1 = await prompt("Insira o primeiro número: ");
  const n2 = await prompt("Insira o segundo número: ");

  console.log("O numero maior é:", (n1 > n2) ? n1 : n2);
  console.log("O numero menor é:", (n1 > n2) ? n2 : n1);
}
async function exercicio24() {
  const n1 = await prompt("Insira o primeiro número:");
  const n2 = await prompt("Insira o segundo número:");
  const n3 = await prompt("Insira o terceiro número:");
  let maior = n1
  let meio = n2
  let menor = n3

  n1 < n2 && n1 < n3 ? menor = n1 : 0;
  n2 < n1 && n2 < n3 ? menor = n2 : 0;
  n2 > n1 && n2 > n3 ? maior = n2 : 0;
  n3 > n1 && n3 > n2 ? maior = n3 : 0;

  console.log("O número maior é ", maior, " e o menor é ", menor);
}
async function exercicio25() {
  const n1 = await prompt("Insira um número:");
  const result = parseFloat(n1) % 2;
  console.log(`O número ${n1} é :`, result == 0 ? "par" : "ímpar");
}
async function exercicio26() {
  const raio = await prompt("Qual o RAIO da circunferência ? ");
  const dia = 2 * raio
  const comp = 2 * Math.PI * raio
  const area = (raio * raio) * Math.PI
  console.log("O diâmetro dessa circunferência é ", dia);
  console.log("O comprimento dessa circunferência é ", comp);
  console.log("A área dessa circunferência é ", area);
}
async function exercicio27() {
  const age = await prompt("Insira sua idade ? ")
  console.log(age > 18 && age < 67 ? "Você pode doar sangue (mas não deveria)" : "Você não pode doar sangue (idade permitada para doar entre 18 e 67 anos)")
}
async function exercicio28errado() {
  console.log("Insira a data do seu nascimento!");
  const dia = await prompt("Digite o dia: ")
  const mes = await prompt("Digite o mês: ")
  const ano = await prompt("Digite o ano: ")
  let data = "a";
  let motivodia = "";
  let motivomes = "";
  let motivoano = "";

  dia > 0 && dia < 32 ? 0 : data = "data inválida", motivodia = ",o mês possui 1 a 31 dias";
  mes > 0 && mes <= 12 ? 0 : data = "data inválida", motivomes = " ,o ano possui no máximo 12 meses";
  ano <= 2013 ? data = "Data válida" : data = "data inválida", motivoano = " ,estamos no ano de 2013 e o valor informado foi maior "
  console.log(dia , "/" , mes , "/" , ano , " é " , data , " " , motivodia , motivomes , motivoano, ".");
}
async function exercicio28() {
  console.log("Insira a data do seu nascimento!");
  const dia = await prompt("Digite o dia: ")
  const mes = await prompt("Digite o mês: ")
  const ano = await prompt("Digite o ano: ")
  let data = "a";
  let motivodia = "";
  let motivomes = "";
  let motivoano = "";

  if (dia > 0 && dia < 32) {
   data = "data válida"
  } else  {
    data = "data inválida", motivodia = ",o mês possui 1 a 31 dias";
  } if (mes > 0 && mes <= 12) {}
  else {
    data = "data inválida", motivomes = " ,o ano possui no máximo 12 meses";
  } if (ano <= 2013) {}
  else {
    data = "data inválida", motivoano = " ,estamos no ano de 2013 e o valor informado foi maior "
  }
  console.log(dia , "/" , mes , "/" , ano , " é " , data , " " , motivodia , motivomes , motivoano, ".");
}
async function exercicio29() { 
  const x = await prompt("Insira um valor para X: ")
  const y = await prompt("Insira um valor para Y: ")
  let a = x
  let b = y
  console.log(`X  = ${a} Y = ${b}`);
  a = y
  b = x
  console.log(`X  = ${a} Y = ${b}`);
}

exercicio21();