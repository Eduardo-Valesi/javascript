function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('img')
    let data = new Date()
    const hora = data.getHours()
    const body = document.getElementById('body')
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = '../images/manha.jpg'
        body.style.background = '#b9aa50d2'
        
    }
    else if (hora >= 12 && hora <= 18) {
        img.src = '../images/tarde.jpg'
        body.style.background = '#94511bd2'
    }
    else {
        img.src = '../images/noite.jpg'
        body.style.background = '#091633d2'
    }
}
