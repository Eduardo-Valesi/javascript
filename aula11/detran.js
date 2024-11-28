
var txtv = document.getElementById('txtvel')
var res = document.getElementById('res')
var vel = Number(txtv)

function calcular() {
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value)
    if (vel == 0) {
        res.innerHTML = 'Insira a velocidade do carro'
    }
    else if (vel > 60) {
        res.innerHTML = 'Você foi multado'
    }
    else {
        res.innerHTML = 'Velocidade dentro das leis.'
    }
}
