function verify() {
    let data = new Date()
    const ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else {
        let sexo = document.getElementsByName('sexo')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
        }
        else {
            genero = 'Mulher'
        }
        res.style.textAlign= 'center'
        
    }
}

