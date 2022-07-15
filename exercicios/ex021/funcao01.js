function parimpar(n) {
    if(n % 2 == 0) {
        return  'PAR'
    }else {
        return  'IMPAR'
    }
}

res = parimpar(5)
console.log(res)
console.log(parimpar(4))