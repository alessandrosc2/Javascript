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