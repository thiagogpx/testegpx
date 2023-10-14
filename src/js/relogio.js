// Variáveis para pegar os elementos de horas, minutos e segundos do HTML.
let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');

// Variáveis para pegar os elementos de círculo (circle) do HTML.
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

// Variáveis para pegar os elementos de ponto (pontos) do HTML.
let hr_ponto = document.querySelector('.hr_ponto');
let min_ponto = document.querySelector('.min_ponto');
let sec_ponto = document.querySelector('.sec_ponto');

// Função para atualizar o relógio.
setInterval(() => {
    // Obtém a hora atual da máquina.
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // Atualiza os elementos de horas, minutos e segundos no HTML.
    horas.innerHTML = h + '<br><span>Horas</span>';
    minutos.innerHTML = m + '<br><span>Minutos</span>';
    segundos.innerHTML = s + '<br><span>Segundos</span>';

    // Define o valor do atributo 'strokeDashoffset' para os círculos.
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    // Rotaciona os ponteiros das horas, minutos e segundos.
    hr_ponto.style.transform = `rotate(${h * 15}deg)`;
    min_ponto.style.transform = `rotate(${m * 6}deg)`;
    sec_ponto.style.transform = `rotate(${s * 6}deg)`;
});