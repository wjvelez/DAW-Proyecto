
var conEntidad=0;
var entrada=0;
var xAnterior;
var yAnterior;
var entidadSeleccionada;





function crearEntidad(){
    var entidad=document.createElement("div");
    var nombreEntidad=document.createElement("div");
    var elementoEntidad=document.createElement("div");
    var input=document.createElement("input");
    
    input.setAttribute("type","text");
    input.style.width="100px";
    input.style.color="black";
    
    conEntidad=conEntidad+1;
    entidad.setAttribute("id","E"+conEntidad);
    entidad.setAttribute("class","entidad");
    
    nombreEntidad.setAttribute("class","nombreEntidad");
    elementoEntidad.setAttribute("class","elementoEntidad");
    
    nombreEntidad.innerHTML="ENTIDAD "+conEntidad;
    elementoEntidad.innerHTML="ATRIBUTO";
    
    entidad.appendChild(nombreEntidad);
    entidad.appendChild(elementoEntidad);
    
    entidad.appendChild(input);
    
    lienzo.appendChild(entidad);
    entidad.addEventListener("mousedown",pulso,true);
    entidad.addEventListener("mouseup",despulso,true);
    
    
}


function moverSobreLienzo(e){
    

    if(entrada==1 && conEntidad!=0){
         entidadSeleccionada.style.left=parseInt(getComputedStyle( entidadSeleccionada).left.substring(0,(getComputedStyle( document.getElementById("E1")).left.length)-2))+(e.clientX-xAnterior)+"px";
         entidadSeleccionada.style.top=parseInt(getComputedStyle( entidadSeleccionada).top.substring(0,(getComputedStyle( document.getElementById("E1")).top.length)-2))+(e.clientY-yAnterior)+"px";
        xAnterior=e.clientX;
        yAnterior=e.clientY;
    }
}

function pulso(e){
    entrada=1;
    xAnterior=e.clientX;
    yAnterior=e.clientY;
    entidadSeleccionada=this;
  
    //contenedor.style.background="rgba(251,231,13,0.5)";    
}

function despulso(e){
    entrada=0;
     xAnterior=e.clientX;
    yAnterior=e.clientY;
}


function inicializar(){
    //alert(getComputedStyle(paleta).height);
    lienzo.style.height=getComputedStyle(paleta).height;
    boton.addEventListener("click",crearEntidad,false);
    lienzo.addEventListener("mousemove",moverSobreLienzo,false);
    
}




window.addEventListener("load",inicializar,false);