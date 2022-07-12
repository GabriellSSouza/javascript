
function contar() {
    inicio = document.getElementById('inicio')
    fim = document.getElementById('fim')
    passo = document.getElementById('passo')
    ini = Number(inicio.value)
    fi = Number(fim.value)
    pas = Number(passo.value)
    c = document.getElementById('cont')
    if(ini <fi) {
        for(i = ini;ini<=fi;i += pas){
        c.innerText += ` ${ini}`
        ini++
        }
    }else {
        for(i = ini;ini>=fi;i -= pas){
            c.innerText += ` ${ini}`
            ini--
        }
    }
    
}
