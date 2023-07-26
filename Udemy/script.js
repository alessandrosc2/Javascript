function apresentar(){

var nom = document.getElementById('noms').value
var res = document.getElementById('res')
// Criar um objeto Date para obter a data e hora atual
const dataHoraAtual = new Date();

// Obter o dia da semana (0 = Domingo, 1 = Segunda-feira, ..., 6 = Sábado)
const diaDaSemana = dataHoraAtual.getDay();

// Array com os nomes dos dias da semana
const diasDaSemana = [
  "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
];

// Obter o dia do mês (1-31)
const diaDoMes = dataHoraAtual.getDate();

// Obter o mês (0-11, pois janeiro é 0)
const mes = dataHoraAtual.getMonth();

// Array com os nomes dos meses
const nomesMeses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

// Obter o ano com quatro dígitos (ex: 2023)
const ano = dataHoraAtual.getFullYear();

// Obter a hora (0-23)
const hora = dataHoraAtual.getHours();

// Obter os minutos (0-59)
const minutos = dataHoraAtual.getMinutes();

// Obter os segundos (0-59)
const segundos = dataHoraAtual.getSeconds();

res.textContent = `Seu nome é ${nom} e você está aprendendo Javascript ás ${hora}:${minutos}:${segundos} do ano de ${ano}`;

}
