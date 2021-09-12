function trocaAnimal(arquivoImagem, nomeanimal){
    document.querySelector('.imagem').setAttribute('src','imgs/'+arquivoImagem)
    document.querySelector('.imagem').setAttribute('data-animal',nomeanimal)
    document.querySelector('.imagem').classList.add('imagem2')
}
function qualAnimal(){
    let animal = document.querySelector('.imagem').getAttribute('data-animal')
    alert(animal)
}
function resetaConf(){
    document.querySelector('.imagem').classList.remove('imagem2')
}