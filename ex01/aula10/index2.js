
function somar() {
    var tn1 = document.getElementById('textn1')
    var tn2 = document.querySelector('input#textn2')

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)

    var res = document.getElementById('res')
    let s = n1 + n2

    res.innerHTML = s
}

function limpar() {
    const tn1 = document.getElementById('textn1')
    const tn2 = document.querySelector('input#textn2')
    var res = document.getElementById('res')

    res.innerHTML = '0'
    tn1.value = ' '
    tn2.value = ' '
}

