function insert(num) {
  var numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + num;
}

function porc() {
  var porce = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = porce / 100;
}

function clean() {
  document.getElementById("resultado").innerHTML = "";
}

function back() {
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

function calcular() {
  var resultado = document.getElementById("resultado").innerHTML;
  if (resultado) {
    document.getElementById("resultado").innerHTML = eval(resultado);
  } else {
    document.getElementById("resultado").innerHTML = "";
  }
}

document.addEventListener("keyup", function (event) {
  let tecla = event.key; // armazena a tecla
  // console.log(tecla);

  const limpar = document.querySelector("#limpar");
  const backspace = document.querySelector("#Backspace");
  const porcento = document.querySelector("#porcento");
  const barra = document.querySelector("#barra");

  const sete = document.querySelector("#sete");
  const oito = document.querySelector("#oito");
  const nove = document.querySelector("#nove");
  const vezes = document.querySelector("#vezes");

  const quatro = document.querySelector("#quatro");
  const cinco = document.querySelector("#cinco");
  const seis = document.querySelector("#seis");
  const menos = document.querySelector("#menos");

  const um = document.querySelector("#um");
  const dois = document.querySelector("#dois");
  const tres = document.querySelector("#tres");
  const mais = document.querySelector("#mais");

  const zero = document.querySelector("#zero");
  const ponto = document.querySelector("#ponto");
  const igual = document.querySelector("#igual");

  switch (tecla) {
    case "c":
      limpar.click();
      break;
    case "C":
      limpar.click();
      break;
    case "Delete":
      limpar.click();
      break;
    case "Backspace":
      backspace.click();
      break;
    case "%":
      porcento.click();
      break;
    case "/":
      barra.click();
      break;
    case "7":
      sete.click();
      break;
    case "8":
      oito.click();
      break;
    case "9":
      nove.click();
      break;
    case "*":
      vezes.click();
      break;
    case "4":
      quatro.click();
      break;
    case "5":
      cinco.click();
      break;
    case "6":
      seis.click();
      break;
    case "-":
      menos.click();
      break;
    case "1":
      um.click();
      break;
    case "2":
      dois.click();
      break;
    case "3":
      tres.click();
      break;
    case "+":
      mais.click();
      break;
    case "0":
      zero.click();
      break;
    case ".":
    case ",":
      ponto.click();
      break;
    case "Enter":
      igual.click();
      break;
    default:
  }
});
