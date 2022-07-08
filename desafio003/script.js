 function contar(){
    var inicio = document.getElementById('txtInicio')
    var fim = document.getElementById('txtFim')
    var passo = document.getElementById('txtPasso')
    var res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO!] Verifique os dados e tente novamente!')
        res.innerHTML = 'Impossivel contar!'  
    } else {
        res.innerHTML = ('Contando: <br>')
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0){
            alert('Passo invalido! Será considerando passo 1')
            p = 1
        }

        if (i < f){
            for (cont = i; cont <= f; cont += p){
                res.innerHTML += ` ${cont} \u{27A1}`
            }
        } else {
            for (cont = i; cont >= f; cont -= p){
                res.innerHTML += ` ${cont} \u{27A1}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }

}
