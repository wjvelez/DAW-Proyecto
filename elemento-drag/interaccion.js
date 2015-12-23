var entrada=0;
var xAnterior;
var yAnterior;



function sobreElemento(e){
    
    var calculo;
  // alert(contenedor.style.left.);
    
    

if(entrada==1){
     x.innerHTML=e.clientX-xAnterior
 y.innerHTML=parseInt(getComputedStyle(contenedor).left.substring(0,(getComputedStyle(contenedor).left.length)-2))+(e.clientX-xAnterior)+"px";
    //contenedor.style.transform="translate("+(e.clientX-xAnterior)+"px,"+(e.clientY-yAnterior)+"px)";
    //contenedor.style.left=(e.clientX)+"px";
    //contenedor.style.top=(e.clientY)+"px";
    //contenedor.style.transform="translate("+(e.clientX-xAnterior)+"px,"+(e.clientY-yAnterior)+"px)";
    contenedor.style.left=parseInt(getComputedStyle(contenedor).left.substring(0,(getComputedStyle(contenedor).left.length)-2))+(e.clientX-xAnterior)+"px";
    contenedor.style.top=parseInt(getComputedStyle(contenedor).top.substring(0,(getComputedStyle(contenedor).top.length)-2))+(e.clientY-yAnterior)+"px";
    xAnterior=e.clientX;
    yAnterior=e.clientY;
}
}

function pulso(e){
   entrada=1;
    xAnterior=e.clientX;
    yAnterior=e.clientY;
    //contenedor.style.background="rgba(251,231,13,0.5)";    
}

function despulso(e){
    entrada=0;
     xAnterior=e.clientX;
    yAnterior=e.clientY;
}

function inicializar(){
 principal.addEventListener("mousemove",sobreElemento,false);
   contenedor.addEventListener("mousedown",pulso,false);
    contenedor.addEventListener("mouseup",despulso,false);
   
}








window.addEventListener("load",inicializar,false);