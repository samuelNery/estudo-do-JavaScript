function alterar(){
    document.querySelector('h1').innerHTML="Troquei o título da Pagina"
    document.querySelector('input').value ="Troquei o valor ddo Input"
    document.querySelector('p').innerHTML="adicionando texto no parágrafo"
}

alterar();

function somar(a , b){

    var total = a + b

    document.querySelector('p').innerHTML = `valor da soma de a + b é ${total} `
}
somar(1,9)

function addNome(nome, sobreNome){
    document.querySelector('h2').innerHTML = nome
    document.querySelector('h2').classList.add('h2')
    document.querySelector('h3').innerHTML = nome

}
addNome('Samuel')