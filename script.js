function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passos = document.getElementById('passos')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || 
        fim.value.length == 0 || 
        passos.value.length == 0) {
            res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)

        if (p <= 0) {
            window.alert('Passo inválido. Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F7E2} `
            }
        } else 
            for(let c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1F7E2}`
        }
        res.innerHTML += `\u{1f3c1}`
    }
}