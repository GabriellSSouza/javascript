num = document.getElementById('num')
c=0
n=[0]

function adicionar() {
    var tab = document.querySelector('#tabela')
    c=c+1
    //n=[0]
    n[c] = Number(num.value)
    
    var item = document.createElement('option')
    item.text = `valor ${n[c]} Adicionado`
    tab.appendChild(item)

}
function finalizar(){
    res = document.getElementById('res')
    res.innerHTML = ''
    parg = document.createElement('p')
    parg.text = `O maior valor informado foi`
    res.appendChild(parg)   
}
//console.log(`${n[0]}`)