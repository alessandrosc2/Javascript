function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 14
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'img/manha.png'
        document.body.style.background = '#d9ac93'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'img/tarde.png'
        document.body.style.background = '#7a3915'
    } else {
        //BOA NOITE!
        img.src = 'img/noite.png'
        document.body.style.background = '#2e3154'
    }
}
