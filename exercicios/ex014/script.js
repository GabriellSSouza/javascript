function carregar() {
    msg = document.getElementById('msg')
    img = document.getElementById('Imagem')
    data = new Date()
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >=0 && hora < 12) {
        img.src = 'midia/noite.png' 
    } else if (hora >= 12 && hora <= 18) {
        img.src ='midia/tarde.png'
    } else {
        img.src = 'midia/noite.png' 
    }
}