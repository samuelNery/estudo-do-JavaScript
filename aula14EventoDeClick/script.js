   document.querySelectorAll('button')[0].addEventListener('click', addTitulo)
   document.querySelectorAll('button')[1].addEventListener('click', addBorda)
   document.querySelectorAll('button')[2].addEventListener('click', addBordaRadius)
   document.querySelectorAll('button')[3].addEventListener('click', addSombra)
   document.querySelectorAll('button')[4].addEventListener('click', mudarTom)
   document.querySelectorAll('button')[5].addEventListener('click', addInfor)
   document.querySelectorAll('button')[6].addEventListener('click', reset)   
   
function addTitulo(){
   document.querySelector('.titulo').innerHTML = "Ave Majestosa, Águia"
}
function addBorda(){
    document.querySelector('.imagem').classList.add('borda')
}
function addBordaRadius(){
    document.querySelector('.imagem').classList.add('bordaRadius')
}
function addSombra(){
    document.getElementsByClassName('imagem')[0].classList.add('Sombra')
}
function mudarTom(){
    document.querySelector('.imagem').classList.add('tomImg')
}
function addInfor(){
    document.querySelector('.infor').innerHTML =`A <strong>águia</strong> é o nome comum dado algumas aves de rapina da família Accipitridae, geralmente de grande porte, carnívoras, de grande acuidade visual. O nome é atribuído a animais pertencentes a gêneros diversos e não corresponde a nenhum clade taxonômico. <em>Wikipédia</em>`
    document.querySelector('.infor').style.display='block'   
}
function reset(){
    document.querySelector('.titulo').innerHTML=''
    document.querySelector('.infor').innerHTML=''
    document.querySelector('.infor').style.display='none'
    document.querySelector('.imagem').classList.remove(
    'borda',
    'bordaRadius',
    'Sombra',
    'tomImg'
    )
    

}