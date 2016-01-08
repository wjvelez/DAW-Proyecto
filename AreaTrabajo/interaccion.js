var ancho=150,alto=150;
var posx=10,posy=100;
var contEntidad=0;

function terminoAnimacion(){

    var img=Snap("#imagen");
    var add=this.parent().select(".adicion polyline");
    add.click(clickEnAdd);
}

function clickEnCuadroMin(e){
    
    this.parent().select(".cuadroElementos").animate({height:"0"},1000);
    alert( this.parent().select(".e"));   
    this.parent().select(".e").animate({height:"0"},1000);
    this.attr({display:"hidden"});
    
}

function clickEnAdd(e){
    this.unclick(clickEnAdd);
    var img=Snap("#imagen");
    var matrix;
    var anteriorPosicion=this.parent().parent().selectAll(".e").length;
    var grupoElementoAnterior=this.parent().parent().selectAll(".e")[anteriorPosicion-1];
    var nuevoGrupoElemento=grupoElementoAnterior.clone();
    
    var cuadroElementos=this.parent().parent().select(".cuadroElementos");
    var cuadroElemento=nuevoGrupoElemento.select(".cuadroElemento");
    var cuadroPk=nuevoGrupoElemento.select(".cuadroPk");
    var cuadroTipo=nuevoGrupoElemento.select(".cuadroTipo");
    var cuadroNombreAtributo=nuevoGrupoElemento.select(".cuadroNombreAtributo");
    
    
    cuadroElementos.animate({height:cuadroElementos.getBBox().height+cuadroElemento.getBBox().height} ,300);
    //console.log("tamaño-grupoElemento-"+nuevoGrupoElemento.select(".cuadroElemento").getBBox().height);
    /*
    cuadroElementos.attr({
       height:cuadroElementos.getBBox().height+nuevoGrupoElemento.getBBox().height 
    });
    
*/
    nuevoGrupoElemento.attr({
        indice:parseInt(nuevoGrupoElemento.attr("indice"))+1
    });
    
    //alert(nuevoGrupoElemento.transform().localMatrix.f);
    
    matrix= new Snap.Matrix();
    matrix.translate(0,(cuadroElemento.getBBox().height+nuevoGrupoElemento.transform().localMatrix.f));
    nuevoGrupoElemento.animate({transform:matrix} ,300,terminoAnimacion);
    //nuevoGrupoElemento.transform("t0,"+(nuevoGrupoElemento.getBBox().height+nuevoGrupoElemento.transform().localMatrix.f));
    
    //this.parent().transform("t0,"+nuevoGrupoElemento.getBBox().height);
    //this.parent().transform("t0,"+(nuevoGrupoElemento.getBBox().height+this.parent().transform().localMatrix.f))
    
    matrix= new Snap.Matrix();
    matrix.translate(0,(cuadroElemento.getBBox().height+this.parent().transform().localMatrix.f));
    
    
    this.parent().animate({transform:matrix} ,300);
    
   
    var textoPk=nuevoGrupoElemento.select(".textoElemento[cuadro='cuadroPk']");
    var textoTipo=nuevoGrupoElemento.select(".textoElemento[cuadro='cuadroTipo']");
    var textoNombreAtributo=nuevoGrupoElemento.select(".textoElemento[cuadro='cuadroNombreAtributo']");
    
    textoPk.dblclick(colocarInput);
    textoTipo.dblclick(colocarInput);
    textoNombreAtributo.dblclick(colocarInput);
    
    cuadroPk.dblclick(colocarInput);
    cuadroTipo.dblclick(colocarInput);
    cuadroNombreAtributo.dblclick(colocarInput);
    
    var circuloRelacion=this.parent().parent().select(".circuloRelacion");
    matrix= new Snap.Matrix();
    matrix.translate(0,(cuadroElemento.getBBox().height+circuloRelacion.transform().localMatrix.f));
   
    
    
    circuloRelacion.animate({transform:matrix} ,300);

/*
var grupoElemento=img.g();
var cuadroElemento=img.rect(cuadroNombreEntidad.getBBox().x,cuadroNombreEntidad.getBBox().y2,cuadroCabeceraEntidad.getBBox().width,cuadroElementos.getBBox().height/3.3,bordeado,bordeado);
var cuadroPk=img.rect(cuadroNombreEntidad.getBBox().x,cuadroNombreEntidad.getBBox().y2,cuadroCabeceraEntidad.getBBox().width/5,cuadroElemento.getBBox().height,0,0);
var cuadroTipo=img.rect(cuadroPk.getBBox().x2,cuadroNombreEntidad.getBBox().y2,cuadroCabeceraEntidad.getBBox().width/3.5,cuadroElemento.getBBox().height,0,0);
var cuadroNombreAtributo=img.rect(cuadroTipo.getBBox().x2,cuadroNombreEntidad.getBBox().y2,cuadroCabeceraEntidad.getBBox().width-cuadroTipo.getBBox().width-cuadroPk.getBBox().width,cuadroElemento.getBBox().height,0,0); 
//var textoNombreEntidad=img.text(entidad.attr("x")+(entidad.attr("width")/3),entidad.attr("y")+(r1.attr("height")/10),"ENTIDAD");
var textoNombreEntidad=img.text(cuadroCabeceraEntidad.getBBox().x+cuadroCabeceraEntidad.getBBox().width/5,cuadroCabeceraEntidad.getBBox().y+cuadroCabeceraEntidad.getBBox().height/1.6,"Entidad");
var textoPk=img.text(cuadroCabeceraEntidad.getBBox().x+cuadroPk.getBBox().width/5,cuadroPk.getBBox().y+cuadroPk.getBBox().height/1.5,"pk");
var textoTipoAtributo=img.text(cuadroTipo.getBBox().x+cuadroTipo.getBBox().width/6,cuadroTipo.getBBox().y+cuadroTipo.getBBox().height/1.5,"tipo");
var textoNombreAtributo=img.text(cuadroNombreAtributo.getBBox().x+cuadroNombreAtributo.getBBox().width/7,cuadroNombreAtributo.getBBox().y+cuadroNombreAtributo.getBBox().height/1.5,"nombre");
*/
}

function presionar(e){
    //alert(e.target.tagName);
    //if(e.target.tagName=="input")
    var input=document.getElementById("inputActivado");
    var texto;
    var img=Snap("#imagen");
    var recuadro;
    
    
    if(input.getAttribute("class")=="cuadroNombreEntidad"){
     recuadro=img.select("#"+input.getAttribute("idParentSvg")+" ."+input.getAttribute("class"));
    //alert("#"+this.getAttribute("idParentSvg")+"."+this.getAttribute("class
    texto=recuadro.parent().select(".textoEntidad");
       
    }
    else{
        //alert(img.select("#"+input.getAttribute("idParentSvg")+" g."+input.getAttribute("parentClassGroup")+" text[cuadro='"+input.getAttribute("cuadro")+"']"));
     recuadro=img.select("#"+input.getAttribute("idParentSvg")+" g[indice='"+input.getAttribute("groupIndice")+"']"+" rect."+input.getAttribute("class"));
       // recuadro=texto.parent().select("")
        //alert(texto.parent().select("rect."+texto.attr("cuadro")));
    texto=recuadro.parent().select("[cuadro='"+input.getAttribute("class")+"']");    
    }
    
    texto.attr({
        text:input.value
    });
    
    
    
    var textoWidth=texto.getBBox().x2-texto.getBBox().x;
    var cuadrotextoWidth=recuadro.getBBox().width;
    var calc=(cuadrotextoWidth/2)-(textoWidth/2);
     texto.attr({
        x:calc+parseInt(recuadro.attr("x"))
    });
    
    input.parentNode.removeChild(input);
    this.unmousedown(presionar);
    
}


function colocarInput(e){
    
   var input=document.createElement("input");
   
    
   
   //alert(this.parent().selectAll("rect")[1]);
    var img=Snap("#imagen");
    var texto;
    input.setAttribute("type","text");
    input.setAttribute("id","inputActivado");
    
    
    if(this.attr("class")=="cuadroNombreEntidad"){
        input.setAttribute("idParentSvg",this.parent().attr("id"));
        input.setAttribute("class",this.attr("class"));
        input.style.width=this.parent().selectAll("rect")[1].getBBox().width+"px";
        input.style.height=this.parent().selectAll("rect")[1].getBBox().height+"px";
        if(this.parent().matrix!=null){
        input.style.left=this.parent().selectAll("rect")[1].getBBox().x+this.parent().matrix.e+"px";
        input.style.top=this.parent().selectAll("rect")[1].getBBox().y+this.parent().matrix.f+"px";
        }
        else{
            //alert(this.parent().selectAll("rect")[1].getBBox().x);
        input.style.left=this.parent().selectAll("rect")[1].getBBox().x+"px";
        input.style.top=this.parent().selectAll("rect")[1].getBBox().y+"px";
        }
        texto=this.parent().select(".textoEntidad");
    }
    else{
        input.setAttribute("idParentSvg",this.parent().parent().attr("id"));
        input.setAttribute("groupIndice",this.parent().attr("indice"));
        input.setAttribute("class",this.attr("class"));
        input.style.width=this.getBBox().width+"px";
        input.style.height=this.getBBox().height+"px";
        if(this.parent().parent().matrix!=null){
                input.style.left=this.getBBox().x+this.parent().parent().matrix.e+"px";
                input.style.top=this.getBBox().y+this.parent().parent().matrix.f+this.parent().transform().localMatrix.f+"px";
        }
        else{
                input.style.left=this.getBBox().x+"px";
                input.style.top=this.getBBox().y+this.parent().transform().localMatrix.f+"px";
        }
    texto=this.parent().select("[cuadro='"+this.attr("class")+"']");
    }
    
    img.mousedown(presionar);
    //input.addEventListener("blur",inputPerdioFocus,false);
    lienzo.appendChild(input);
    input.focus();
    input.value=texto.innerSVG();
    input.select();
    texto.attr({
        text:""
    });
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

function sobreCirculoRelacion(){
    
    if(this.attr("class")=="cuadroMin"||this.attr("class")=="cuadroConfig"){
        this.attr({
        fill:"red"
        });
    }
    else{
        this.attr({
            fill:"red"
        });
        this.parent().undrag();
    }
    
}

function fueraCirculoRelacion(){
    
    
    
    if(this.attr("class")=="cuadroMin"||this.attr("class")=="cuadroConfig"){
        this.attr({
        fill:"transparent"
        });
    }
    else{
        this.attr({
            fill:"black"
        });
        this.parent().drag();
    }
}


function crearEntidad(e){
contEntidad=contEntidad+1;
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

var radio=((ancho+alto)/2)/15;

var line;  
var circle;
var x1,x2,y1,y2;
var circuloRelacion=img.circle(cuadroElementos.getBBox().x+cuadroElementos.getBBox().width/2,cuadroElementos.getBBox().y2+radio,radio).attr({fill:"black",fillOpacity:"0.7", class:"circuloRelacion", indice:"1",Destino:""});
circuloRelacion.hover(sobreCirculoRelacion,fueraCirculoRelacion);
circuloRelacion.drag(function(dx,dy){
   
            circle.attr({cx:+x1+dx,cy:+y1+dy});
            line.attr({x1:+x1+dx,y1:+y1+dy});
},function(){
    line=img.line(cuadroElementos.getBBox().x+cuadroElementos.getBBox().width/2+this.parent().transform().localMatrix.e,cuadroElementos.getBBox().y2+radio+this.parent().transform().localMatrix.f,cuadroElementos.getBBox().x+cuadroElementos.getBBox().width/2+this.parent().transform().localMatrix.e,cuadroElementos.getBBox().y2+radio+this.parent().transform().localMatrix.f,radio)
    .attr({strokeWidth:7,stroke:"black",strokeLinecap:"round"});
    circle=img.circle(cuadroElementos.getBBox().x+cuadroElementos.getBBox().width/2+this.parent().transform().localMatrix.e,cuadroElementos.getBBox().y2+radio+this.parent().transform().localMatrix.f,radio).attr({fill:"black",fillOpacity:"0.7",class:"circuloRelacion", indice:"1",Destino:""});
    
    x1=line.attr("x1");
    y1=line.attr("y1");
},function(event){
    
    circle.node.parentNode.removeChild(circle.node);
    line.node.parentNode.removeChild(line.node);
});
//circuloRelacion.dr

    
    
cuadroNombreEntidad.dblclick(colocarInput);
cuadroPk.dblclick(colocarInput);
cuadroTipo.dblclick(colocarInput);
cuadroNombreAtributo.dblclick(colocarInput);
    
textoNombreEntidad.attr({
    class:"textoEntidad",cuadro:"cuadroNombreEntidad"
});
    
textoPk.attr({
   class:"textoElemento",cuadro:"cuadroPk" 
});
textoTipoAtributo.attr({
   class:"textoElemento" ,cuadro:"cuadroTipo"
});
textoNombreAtributo.attr({
   class:"textoElemento" , cuadro:"cuadroNombreAtributo"
});
    
//grupoTextoElemento.add(textoPk,textoTipoAtributo,textoNombreAtributo);
var grupoAdd=img.g();
var grupoElemento=img.g();

    
var x=70,y=210;

var badd=img.circle(x+15,y+5,20);
var add=img.polyline(x,y,x+10,y,x+10,y-10,x+20,y-10,x+20,y,x+30,y,x+30,y+10,x+20,y+10,x+20,y+20,x+10,y+20,x+10,y+10,x,y+10,x,y);
grupoAdd.add(badd,add);
grupoAdd.attr({
   class:"adicion" 
});
    

cuadroElementos.attr({
    fill:"white",stroke:"black" , class:"cuadroElementos" ,fillOpacity:0.8
});
    
add.attr({
    fill:"white",stroke:"black"
});

badd.attr({
    fill:"black",stroke:"black",fillOpacity:"0.8"
});

cuadroCabeceraEntidad.attr({
    fill:"black",stroke:"black", fillOpacity:"0.8",class:"cuadroCabeceraEntidad"
});
    
cuadroNombreEntidad.attr({
    fill:"transparent",stroke:"black", fillOpacity:"0.8" ,  class:"cuadroNombreEntidad"
});
cuadroConfig.attr({
    fill:"transparent",stroke:"black", fillOpacity:"0.8" , class:"cuadroConfig"
});
cuadroMin.attr({
    fill:"transparent",stroke:"black", fillOpacity:"0.8" ,  class:"cuadroMin"
});

cuadroElemento.attr({
    fill:"transparent",stroke:"black", class:"cuadroElemento"
});

cuadroPk.attr({
    fill:"transparent" , stroke:"black",class:"cuadroPk" 
});
    
cuadroTipo.attr({
    fill:"transparent" , stroke:"black" ,class:"cuadroTipo"
});

cuadroNombreAtributo.attr({
    fill:"transparent" , stroke:"black", class:"cuadroNombreAtributo"
});

grupoEntidad.attr({
   id:"E"+contEntidad 
});
    
grupoElemento.attr({
    class:"e" , indice:"1"
})

    
grupoElemento.add(cuadroElemento,textoPk,textoTipoAtributo,textoNombreAtributo,cuadroPk,cuadroTipo,cuadroNombreAtributo);
   //cuadroAtributoDiv1.animate({width:140},200); 
grupoEntidad.add(cuadroCabeceraEntidad,textoNombreEntidad,cuadroNombreEntidad,cuadroConfig,cuadroMin,cuadroElementos,grupoAdd,grupoElemento,circuloRelacion);
    

grupoEntidad.drag();
add.hover(sobre,fuera);
add.click(clickEnAdd);
cuadroConfig.hover(sobreCirculoRelacion,fueraCirculoRelacion);
cuadroMin.hover(sobreCirculoRelacion,fueraCirculoRelacion);
cuadroMin.click(clickEnCuadroMin);
//alert(grupoEntidad.selectAll("rect")[1]);
    
}

function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;
  
    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}

function inicializar(){
   
    imagen.setAttribute("width",getComputedStyle(lienzo).width);
    imagen.setAttribute("height",getComputedStyle(lienzo).height);
    //svgPaleta.setAttribute("width",getComputedStyle(paleta).width);
    //svgPaleta.setAttribute("height",getComputedStyle(paleta).height);
    boton.addEventListener("click",crearEntidad,false);
    
}
window.addEventListener("load",inicializar,false);