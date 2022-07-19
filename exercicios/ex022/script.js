num = document.getElementById('num')
c=0
n=[0]

function adicionar() {
    tab = document.querySelector('#tabela')
    c=c+1
    //n=[0]
    n[c] = Number(num.value)
    
    item = document.createElement('option')
    item.text = `valor ${n[c]} Adicionado`
    tab.appendChild(item)

}
function finalizar(){
    res = document.getElementById('res')
    res.innerHTML = ''
    ite = document.createElement('p')
    ite.text = `O maior valor informado foi `
    res.appendChild(ite)   
}
//console.log(`${n[0]}`)