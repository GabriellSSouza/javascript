
function contar() {
    inicio = document.getElementById('inicio')
    fim = document.getElementById('fim')
    passo = document.getElementById('passo')
    ini = Number(inicio.value)
    fi = Number(fim.value)
    pas = Number(passo.value)
    c = document.getElementById('cont') 
    while(ini<=fi){
        c.innerText = ini
        ini++
    }
}
