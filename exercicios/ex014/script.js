function carregar () {
    msg = document.getElementById('msg')
    img = document.getElementById('imagem')
    data = new Date()
    //hora = data.getHours()
    hora = 6
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >=0 && hora <12) {
        img.src = 'manha.png'
        document.body.style.background ='#FCC2B5'
    }else if (hora >=12 && hora<=18) {
        img.src = 'tarde.png'
        document.body.style.background = '#FEBD53'
    }else {
        img.src = 'noite.png'
        document.body.style.background ='#182123'
    }
    }