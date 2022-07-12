function tabuar() {
    num = document.getElementById('num')
    res = document.getElementById('res')
    res.innerHTML = ''
     
    if (num.value.length == 0){
        alert('Por favor digite um número...')
    }else {
        for(c=1 ; c<=10 ; c++){
            n = Number(num.value)
            s = n*c
            res.innerHTML += `<tr> <td>${n} x ${c} = ${s}</td> </tr>`

    }
    }
    

    /*
    for(c=1 ; c<=10 ; c++){
        n = Number(num.value)
        s = n*c
        res.innerHTML += `${n} x ${c} = ${s}<br>`

}
*/
}