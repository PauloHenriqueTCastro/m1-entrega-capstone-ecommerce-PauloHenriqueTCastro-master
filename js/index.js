let produtos = document.querySelector('.produtos')

let vtotal = 0

for (let i = 0; i <= data.length; i++) {

    if (i != data.length) {
        const liP = document.createElement('li')
        const divP = document.createElement('div')
        const imgP = document.createElement('img')
        const tagP = document.createElement('button')
        const nomeP = document.createElement('h2')
        const descrP = document.createElement('span')
        const precoP = document.createElement('b')
        const addCart = document.createElement('button')

        imgP.src = data[i].img
        tagP.innerHTML = data[i].tag
        descrP.innerText = data[i].description
        precoP.innerText = 'R$' + ' ' + data[i].value
        addCart.innerText = data[i].addCart
        nomeP.innerText = data[i].nameItem



        addCart.id = data[i].id

        liP.classList.add('card')
        divP.classList.add('fundoText')

        imgP.classList.add('imgP')
        tagP.classList.add('buttTag')
        nomeP.classList.add('nomeP')
        descrP.classList.add('descrP')
        precoP.classList.add('precoP')
        addCart.classList.add('buttAdd')

        addCart.value = data[i].value

        produtos.appendChild(liP)
        liP.append(imgP, divP)
        divP.append(tagP, nomeP, descrP, precoP, addCart)

    }
}

const ulCar = document.querySelector('.ulCar')


produtos.addEventListener("click", adicionarProdutoCar)

let contador = 0
let counter = document.querySelector('.quantidade')
function adicionarProdutoCar(event) {


    let bntComprar = event.target

    if (bntComprar.tagName == "BUTTON") {




        contador++
        counter.innerText = contador

        const liC = document.createElement('li')
        let bntC = document.createElement('button')
        let imgDiv = document.createElement('div')
        let textDiv = document.createElement('div')

        let produto = bntComprar.closest("li").cloneNode(true)

        let imgC = produto.querySelector('img')
        let nomeC = produto.querySelector('h2')
        let precoC = produto.querySelector('b')


        vtotal += Number(event.target.value)

        let somaCar = document.querySelector('.valorT')

        somaCar.innerText = vtotal


        nomeC.classList.add('nomeC')
        imgC.classList.add('imgC')
        imgDiv.classList.add('imgDiv')
        textDiv.classList.add('textDiv')
        bntC.classList.add('bntC')
        liC.classList.add('liC')

        bntC.value = Number(event.target.value)

        bntC.innerText = 'Remover Produto'

        imgDiv.appendChild(imgC)
        textDiv.append(nomeC, precoC, bntC)
        liC.append(imgDiv, textDiv)
        ulCar.appendChild(liC)
    }
}



let bnt = document.querySelector('.ulCar')

bnt.addEventListener("click", removerProdutoCar)

function removerProdutoCar(event) {

    let bntRemover = event.target

    if (bntRemover.tagName == "BUTTON") {
        let teste = bntRemover.closest("li").remove()
        let counter = document.querySelector('.quantidade')
        contador--
        counter.innerText = contador

        let somaCar = document.querySelector('.valorT')

        vtotal -= Number(bntRemover.value)
        somaCar.innerText = vtotal

    }
}



