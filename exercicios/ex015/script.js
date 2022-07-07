function verificar() {
    data = new Date()
    ano = data.getFullYear()
    fano = document.getElementById('txtano')
    res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        fsex = document.getElementsByName('radsex')
        idade = ano - Number(fano.value)
        genero = ''
        img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked) {
            genero = 'homem'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'imagens/bebe-m.png')
            }else if (idade <21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            }else if (idade <50){
                //adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        }else if (fsex[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'imagens/bebe-f.png')
            }else if (idade <21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            }else if (idade <50){
                //adulto
                img.setAttribute('src', 'imagens/adulto-f.png')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}