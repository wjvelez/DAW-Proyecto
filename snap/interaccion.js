function colocarInput(e){
    
   var input=document.createElement("input");
   //alert(this.parent().selectAll("rect")[1]);
    
    input.setAttribute("type","text");
    input.setAttribute("class","textoEntidad");
    //input.style.width=this.getBBox().width+"px";
    //input.style.height=this.getBBox().height+"px";
    //input.setAttribute("class","input");
    alert(this.getBBox().x-this.parent().selectAll("rect")[1].getBBox().x);
   
    
    //input.style.paddingLeft=parseInt(getComputedStyle(midiv).left)-parseFloat(this.getBBox().x)+"px";
    //input.style.padding=parseInt(getComputedStyle(midiv).top)-this.getBBox().y+10+"px";
    
    input.style.paddingLeft=this.getBBox().x-this.parent().selectAll("rect")[1].getBBox().x+"px";
    input.style.paddingTop=this.getBBox().y-this.getBBox().height-this.parent().selectAll("rect")[1].getBBox().y+"px"
    
     input.style.width=this.parent().selectAll("rect")[1].getBBox().width+"px";
    input.style.height=this.parent().selectAll("rect")[1].getBBox().height+"px";
    
    seccion.appendChild(input);
    input.focus();
    input.value=this.innerSVG();
    input.select();
    //input.style.left=parseInt(getComputedStyle(midiv).left)+parseFloat(this.getBBox().x)+"px";
    //input.style.top=parseInt(getComputedStyle(midiv).top)+parseFloat(this.getBBox().y)+"px";
    input.style.left=parseInt(getComputedStyle(midiv).left)+this.parent().selectAll("rect")[1].getBBox().x+"px";
    input.style.top=parseInt(getComputedStyle(midiv).top)+this.parent().selectAll("rect")[1].getBBox().y+"px";
    this.attr({
        text:""
        
    })
}

function moviendo(e){
    
    //console.log("gika");
    
}

function moviendome(e){
     console.log("gika");
}

function comienzaDrag(event){
    /*if((this.transform().localMatrix.f+50+30)>200){
        console.log("te pasaste");
    }
    
    */
    //console.log(event.target.getAttribute("class"));
    //console.log(this.getBBox().cx+"  "+this.getBBox().height);
    //console.log(this.transform().localMatrix.f+50);
}

function sobre(){
    this.attr({
        fill:"lime"
    });
    
}

function fuera(b){
    
    console.log("hola");
    this.attr({
        fill:"white"
    });
}

function inicializar(){
var ancho=150,alto=150;
var posx=10,posy=100;
var bordeado=3;
var img= Snap("#imagen");


var grupoEntidad=img.g();

    
var cuadroCabeceraEntidad=img.rect(posx,posy,ancho,alto/3,bordeado,bordeado);

var cuadroNombreEntidad=img.rect(posx,posy,ancho-(ancho/5),alto/3,bordeado,bordeado);

var cuadroConfig=img.rect(cuadroNombreEntidad.getBBox().x2,cuadroNombreEntidad.getBBox().y,cuadroCabeceraEntidad.getBBox().width/5,cuadroNombreEntidad.getBBox().height/2,0,0);
var cuadroMin=img.rect(cuadroConfig.getBBox().x,cuadroConfig.getBBox().y2,cuadroConfig.getBBox().width,cuadroNombreEntidad.getBBox().height/2,0,0);

var cuadroElementos=img.rect(cuadroCabeceraEntidad.getBBox().x,cuadroCabeceraEntidad.getBBox().y2,cuadroCabeceraEntidad.getBBox().width,alto-cuadroCabeceraEntidad.getBBox().height);
    
var cuadroElemento=img.rect(cuadroNombreEntidad.getBBox().x,cuadroNombreEntidad.getBBox().y2,cuadroCabeceraEntidad.getBBox().width,cuadroElementos.getBBox().height/3.3,bordeado,bordeado);
var cuadroPk=img.rect(cuadroNombreEntidad.getBBox().x,cuadroNombreEntidad.getBBox().y2,cuadroCabeceraEntidad.getBBox().width/5,cuadroElemento.getBBox().height,0,0);
var cuadroTipo=img.rect(cuadroPk.getBBox().x2,cuadroNombreEntidad.getBBox().y2,cuadroCabeceraEntidad.getBBox().width/3.5,cuadroElemento.getBBox().height,0,0);
var cuadroNombreAtributo=img.rect(cuadroTipo.getBBox().x2,cuadroNombreEntidad.getBBox().y2,cuadroCabeceraEntidad.getBBox().width-cuadroTipo.getBBox().width-cuadroPk.getBBox().width,cuadroElemento.getBBox().height,0,0); 
//var textoNombreEntidad=img.text(entidad.attr("x")+(entidad.attr("width")/3),entidad.attr("y")+(r1.attr("height")/10),"ENTIDAD");
var textoNombreEntidad=img.text(cuadroCabeceraEntidad.getBBox().x+cuadroCabeceraEntidad.getBBox().width/5,cuadroCabeceraEntidad.getBBox().y+cuadroCabeceraEntidad.getBBox().height/1.6,"Entidad");
var textoPk=img.text(cuadroCabeceraEntidad.getBBox().x+cuadroPk.getBBox().width/5,cuadroPk.getBBox().y+cuadroPk.getBBox().height/1.5,"pk");
var textoTipoAtributo=img.text(cuadroTipo.getBBox().x+cuadroTipo.getBBox().width/6,cuadroTipo.getBBox().y+cuadroTipo.getBBox().height/1.5,"tipo");
var textoNombreAtributo=img.text(cuadroNombreAtributo.getBBox().x+cuadroNombreAtributo.getBBox().width/7,cuadroNombreAtributo.getBBox().y+cuadroNombreAtributo.getBBox().height/1.5,"nombre");
//var textoPk=img.text(15,parseInt(cuadroAtributoDiv1.attr("y"))+(parseInt(cuadroAtributoDiv1.attr("height"))/1.5),"pk");
var grupoTextoElemento=img.g();
textoNombreEntidad.dblclick(colocarInput);
textoPk.dblclick(colocarInput);
    
textoNombreEntidad.attr({
    class:"textoEntidad"
});
    
grupoTextoElemento.attr({
    fill:"red",stroke:"none", class:"textoElemento"
});

grupoTextoElemento.add(textoPk,textoTipoAtributo,textoNombreAtributo);

var grupoElemento=img.g();
var grupoAdd=img.g();
    
var x=70,y=210;
var badd=img.circle(x+15,y+5,20);
var add=img.polyline(x,y,x+10,y,x+10,y-10,x+20,y-10,x+20,y,x+30,y,x+30,y+10,x+20,y+10,x+20,y+20,x+10,y+20,x+10,y+10,x,y+10,x,y);
grupoAdd.add(badd,add);

cuadroElementos.attr({
    fill:"white",stroke:"black"
});
    
add.attr({
    fill:"white",stroke:"black"
});

badd.attr({
    fill:"black",stroke:"black",fillOpacity:"0.7"
});

cuadroCabeceraEntidad.attr({
    fill:"white",stroke:"black", fillOpacity:"0.8"
});
    
cuadroNombreEntidad.attr({
    fill:"black",stroke:"black", fillOpacity:"0.8" , id:"recuadro"
});
cuadroConfig.attr({
    fill:"black",stroke:"black", fillOpacity:"0.8" , id:"recuadro2"
});
cuadroMin.attr({
    fill:"black",stroke:"black", fillOpacity:"0.8" , id:"recuadro3"
});

cuadroElemento.attr({
    fill:"transparent",stroke:"black"
});

cuadroPk.attr({
    fill:"transparent" , stroke:"black"
});
    
cuadroTipo.attr({
    fill:"transparent" , stroke:"black"
});

cuadroNombreAtributo.attr({
    fill:"transparent" , stroke:"black"
});

    
grupoElemento.add(cuadroPk,cuadroTipo,cuadroNombreAtributo,grupoTextoElemento);
   //cuadroAtributoDiv1.animate({width:140},200); 
grupoEntidad.add(cuadroCabeceraEntidad,cuadroNombreEntidad,cuadroConfig,cuadroMin,cuadroElementos,cuadroElemento,grupoElemento,grupoAdd,textoNombreEntidad);

grupoEntidad.drag();
add.hover(sobre,fuera);

//alert(grupoEntidad.selectAll("rect")[1]);
    
    
    //line.drag();
    
    //circulo.drag();
    
    midiv.addEventListener("mousemove",moviendome,false);
   // alert(getComputedStyle(seccion).left);
    //alert(img.getBBox("img").x);
}


window.addEventListener("load",inicializar,false);