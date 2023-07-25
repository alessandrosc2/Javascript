  function tabuadaMultiplicar() {
    const numeroInput = document.getElementById("numero");
    const tabuadaElement = document.getElementById("tabuada");
    const numero = Number(numeroInput.value);

    // Limpa a tabela antes de gerar uma nova tabuada
    tabuadaElement.innerHTML = "";

    // Cria as linhas da tabela com a tabuada
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      const linha = document.createElement("tr");
      const coluna1 = document.createElement("td");
      const coluna2 = document.createElement("td");

      coluna1.textContent = `${numero} x ${i} = `;
      coluna2.textContent = resultado;

      linha.appendChild(coluna1);
      linha.appendChild(coluna2);
      tabuadaElement.appendChild(linha);
    }
  }

  function tabuadaDividir() {
    const dividInput = document.getElementById("divid");
    const tabuadaDividirElement = document.getElementById("tabuadaDividir");
    const divid = Number(dividInput.value);

    // Limpa a tabela antes de gerar uma nova tabuada
    tabuadaDividirElement.innerHTML = "";

    // Cria as linhas da tabela com a tabuada
    for (let i = 1; i <= 10; i++) {
      const resultado = divid / i;
      const linha = document.createElement("tr");
      const coluna1 = document.createElement("td");
      const coluna2 = document.createElement("td");

      coluna1.textContent = `${divid} / ${i} = `;
      coluna2.textContent = resultado;

      linha.appendChild(coluna1);
      linha.appendChild(coluna2);
      tabuadaDividirElement.appendChild(linha);
    }
  }

  function tabuadaSomar() {
    const somarInput = document.getElementById("somar");
    const tabuadaSomarElement = document.getElementById("tabuadaSomar");
    const somar = Number(somarInput.value);

    // Limpa a tabela antes de gerar uma nova tabuada
    tabuadaSomarElement.innerHTML = "";

    // Cria as linhas da tabela com a tabuada
    for (let i = 1; i <= 10; i++) {
      const resultado = somar + i;
      const linha = document.createElement("tr");
      const coluna1 = document.createElement("td");
      const coluna2 = document.createElement("td");

      coluna1.textContent = `${somar} + ${i} = `;
      coluna2.textContent = resultado;

      linha.appendChild(coluna1);
      linha.appendChild(coluna2);
      tabuadaSomarElement.appendChild(linha);
    }
  }

  function tabuadaSubtrair() {
    const subtrInput = document.getElementById("subtr");
    const tabuadaSubtrairElement = document.getElementById("tabuadaSubtrair");
    const subtr = Number(subtrInput.value);

    // Limpa a tabela antes de gerar uma nova tabuada
    tabuadaSubtrairElement.innerHTML = "";

    // Cria as linhas da tabela com a tabuada
    for (let i = 1; i <= 10; i++) {
      const resultado = subtr - i;
      const linha = document.createElement("tr");
      const coluna1 = document.createElement("td");
      const coluna2 = document.createElement("td");

      coluna1.textContent = `${subtr} - ${i} = `;
      coluna2.textContent = resultado;

      linha.appendChild(coluna1);
      linha.appendChild(coluna2);
      tabuadaSubtrairElement.appendChild(linha);
    }
  }

  function calcular() {
    const numero1Input = document.getElementById("numero1");
    const numero2Input = document.getElementById("numero2");
    const operadorInput = document.getElementById("operador");
    const resultadoElement = document.getElementById("resultado");

    const numero1 = Number(numero1Input.value);
    const numero2 = Number(numero2Input.value);
    const operador = operadorInput.value;

    let resultado;

    switch (operador) {
      case "+":
        resultado = numero1 + numero2;
        break;
      case "-":
        resultado = numero1 - numero2;
        break;
      case "*":
        resultado = numero1 * numero2;
        break;
      case "/":
        resultado = numero1 / numero2;
        break;
      default:
        resultado = "Operador inválido!";
    }

    resultadoElement.textContent = `Resultado: ${resultado}`;
  }

  function calcularRaizQuadrada() {
    const raizInput = document.getElementById("raiz");
    const resultElement = document.getElementById("result");

    const raiz = Number(raizInput.value);

    if (raiz < 0) {
      resultElement.textContent = "Não é possível calcular a raiz de um número negativo!";
    } else {
      const raizQuadrada = Math.sqrt(raiz);
      resultElement.textContent = `Raiz Quadrada de ${raiz}: ${raizQuadrada.toFixed(2)}`;
    }
  }

  function calcularPorcentagem() {
    const porcem = parseFloat(document.getElementById('porcem').value);
    const porcentagem = parseFloat(document.getElementById('porcentagem').value);

    if (isNaN(porcem) || isNaN(porcentagem)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    const resultad = porcem * (porcentagem / 100);
    const resultadoSobra = porcem - resultad;
    document.getElementById('resultad').textContent = `Resultado: ${resultad.toFixed(2)}`;
    document.getElementById('resultadoSobra').textContent = `Sobra: ${resultadoSobra.toFixed(2)}`;
}



