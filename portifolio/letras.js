// Texto que será mostrado no elemento <h1>
const textToType = "Alessandro Cordeiro.";

// Função para animar o texto como se estivesse sendo digitado
function typeText() {
  const element = document.getElementById('typed-text');
  let index = 0;

  function typeNextLetter() {
    const currentText = element.textContent;
    const letter = textToType[index];

    // Adiciona a próxima letra ao texto atual
    element.textContent = currentText + letter;

    // Incrementa o índice para obter a próxima letra na próxima chamada
    index++;

    // Verifica se ainda há letras para digitar
    if (index < textToType.length) {
      // Chama recursivamente a função para digitar a próxima letra após um pequeno intervalo
      setTimeout(typeNextLetter, 100);
    }
  }

  // Inicia o efeito de digitação após um pequeno intervalo
  setTimeout(typeNextLetter, 1000);
}

// Inicia o efeito de digitação quando o documento estiver completamente carregado
document.addEventListener('DOMContentLoaded', typeText);
