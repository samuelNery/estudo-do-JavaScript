function subir(){
   scrollTo({
        top:0,
        behavior:"smooth"
    })  
}
function ocultaButton(){   
    if(scrollY === 0){
        document.querySelector('.subir').style.display='none'
    }else{
        document.querySelector('.subir').style.display = 'block'
    }
}
window.addEventListener('scroll', ocultaButton);