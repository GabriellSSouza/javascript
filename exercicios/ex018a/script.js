
function contar() {
    inicio = document.getElementById('inicio')
    fim = document.getElementById('fim')
    passo = document.getElementById('passo')
    ini = Number(inicio.value)
    fi = Number(fim.value)
    pas = Number(passo.value)
    c = document.getElementById('cont')
    c.innerHTML = ''
    if(ini <fi) {
        for(i = ini;i<=fi;i += pas){
        c.innerText += ` ${i}`
        //ini++
        }
    }else {
        for(i = ini;i>=fi;i -= pas){
            c.innerText += ` ${i}`
          //  ini--
        }
    }
    
}
