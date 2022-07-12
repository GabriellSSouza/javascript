function contar() {
    ini = document.getElementById('txti')
    fim = document.getElementById('txtf')
    passo = document.getElementById('txtp')
    res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        //alert('[ERRO] Faltam dados!')
        
    } else {
        res.innerHTML = 'Contando...<br>'
        i = Number(ini.value)
        f = Number (fim.value)
        p = Number(passo.value)
        if (p <= 0) {
            alert('Passo Invalido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            for (c = i; c <= f; c += p ){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }else {
            for (c = i; c >= f; c -= p ){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }   
    }
    res.innerHTML += `\u{1f3c1}`
}
            