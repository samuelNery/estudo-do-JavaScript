function verificaUm(){
   if(document.querySelectorAll('button')[0].classList.contains('preto')){//verifica se exite essa class no button 0 que é o primeiro button
    document.querySelectorAll('button')[0].classList.add('azul')
    document.querySelectorAll('button')[0].classList.add('editGeral')
    document.querySelectorAll('button')[0].classList.remove('preto')        
   }else{
    document.querySelectorAll('button')[0].classList.remove('azul')
    document.querySelectorAll('button')[0].classList.add('preto')
    document.querySelectorAll('button')[0].classList.remove('editGeral')       
   }
}
function verificaDois(){
    if(document.querySelectorAll('button')[1].classList.contains('branco')){
        document.querySelectorAll('button')[1].classList.add('preto')
        document.querySelectorAll('button')[1].classList.add('editGeral')
        document.querySelectorAll('button')[1].classList.remove('branco')
    }else{
        document.querySelectorAll('button')[1].classList.remove('preto')
        document.querySelectorAll('button')[1].classList.add('branco')
        document.querySelectorAll('button')[1].classList.remove('editGeral')
    }
}
function verificaTres(){
    if(document.querySelectorAll('button')[2].classList.contains('azul')){
        document.querySelectorAll('button')[2].classList.add('branco')
        document.querySelectorAll('button')[2].classList.remove('azul')
        document.querySelectorAll('button')[2].classList.add('editGeral')
    }else{
        document.querySelectorAll('button')[2].classList.remove('preto')
        document.querySelectorAll('button')[2].classList.add('azul')
        document.querySelectorAll('button')[2].classList.remove('editGeral')
    }
}
