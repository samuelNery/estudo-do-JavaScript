function verde(){   
    document.querySelector('.nome').classList.remove('azul')
    document.querySelector('.nome').classList.remove('vermelho') 
    document.querySelector('.nome').classList.add('verde')
  
    
}
function azul(){   
    document.querySelector('.nome').classList.remove('vermelho')
    document.querySelector('.nome').classList.remove('verde')
    document.querySelector('.nome').classList.add('azul')
    
  
}
function vermelho(){  
    document.querySelector('.nome').classList.remove('verde')
    document.querySelector('.nome').classList.remove('azul')  
    document.querySelector('.nome').classList.add('vermelho')
  
    
}
