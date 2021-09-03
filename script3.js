function verificar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var resultado = document.getElementById('res')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Não é possível contar'
        alert('Alguns dados estão em branco! Por favor, verifique e tente novamente')
    } else {
        resultado.innerHTML = `Contando... <br> `
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0) {
            alert('Passo inválido!')
            alert('Considerando Passo = 1')
            p = 1
        } 

        if(i < f) {
            for(var x = i; x <= f; x += p) {
                resultado.innerHTML += `\u{1F449} ${x} `
            }
        } else {
            for(var x = i; x >= f; x -= p) {
                resultado.innerHTML += `\u{1F449} ${x} `
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}