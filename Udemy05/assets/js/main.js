const elementos = [
    {tag:'p', texto:'Aula de Javascript.'},
    {tag:'div', texto:'Aula de Javascript 02.'},
    {tag:'section', texto:'Aula de Javascript 03.'},
    {tag:'footer', texto:'Aula de Javascript 04.'}

];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createElement(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);
