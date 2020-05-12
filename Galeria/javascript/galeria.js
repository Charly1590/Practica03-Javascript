
var numImage=0;
var fotoEntra=0;
var cont1=100;
var cont2=0;
var pos1=0;
var pos2=926;
var pos3=100;
var aux;
var imagen=["../imagenes/img1.jpg","../imagenes/img2.jpg","../imagenes/img3.jpg","../imagenes/img4.jpg","../imagenes/img5.jpg","../imagenes/img6.jpg","../imagenes/img7.jpg","../imagenes/img8.jpg","../imagenes/img9.jpg","../imagenes/img10.jpg"];
var rand = [];

window.onload = function() {
    var imgSal=document.images["saliente"];
    var imgEnt=document.images["entrante"];
    this.random();
    imgSal.src=imagen[rand[1]];
    imgEnt.src=imagen[rand[0]];
    document.getElementById("anterior").disabled=true;
}

function random(){
    while(rand.length < 6 ){
        var numeroAleatorio = Math.ceil(Math.random()*9);
        var existe = false;
        for(var i=0;i<rand.length;i++){
          if(rand [i] == numeroAleatorio){
              existe = true;
              break;
          }
        }
        if(!existe){
          rand[rand.length] = numeroAleatorio;
        }
    }
    console.log(rand);  
    document.getElementById("siguiente").disabled=false;
    document.getElementById("anterior").disabled=true;
}

function inicio(){
    rand=[];
    numImage=0;
    fotoEntra=0;
    var imgEnt=document.images["entrante"];
    var imgSal=document.images["saliente"];
    random();
    imgSal.src=imagen[rand[1]];
    imgEnt.src=imagen[rand[0]];
    console.log("inicio");
}

function moverDerecha(){
    der=setInterval(derecha,100);
}

function derecha(){
    var imgEnt=document.images["entrante"];
    var imgSal=document.images["saliente"];
    var divEnt=document.getElementById("entrada");
    var divSal=document.getElementById("salida");
    bot();
    divEnt.style.opacity=0;
    fotoEntra=numImage+1;
    cont1-=10;
    cont2+=10; 
    pos2-=150;
    if(pos2<425){
        pos2=425;
    }
    divEnt.style.opacity="0."+cont1;
    divSal.style.opacity="0."+cont2;
    if(numImage==0){
        divSal.style.left=pos2+"px";
    }
    else{
        divEnt.style.left=pos2+"px";
    }
    if(cont1==0){
        cont2=0;
        cont1=100;
        pos2=826;
        console.log(rand[fotoEntra]+1);
        console.log(rand[numImage]+1);
        if(numImage==0){
            console.log("aaaaa");
            divSal.style.opacity=1;
            divEnt.style.opacity=0;
            imgEnt.src=imagen[rand[numImage]]; 
            imgSal.src=imagen[rand[fotoEntra]];
        }
        else if (numImage==1){
            numImage=numImage+1;
            fotoEntra=numImage+1;
            console.log("bbb");
            divSal.style.opacity=0;
            divEnt.style.opacity=1;
            imgEnt.src=imagen[rand[numImage]]; 
            imgSal.src=imagen[rand[fotoEntra]];
        }
        else{
            console.log("cccc");
            divSal.style.opacity=0;
            divEnt.style.opacity=1;
            imgEnt.src=imagen[rand[numImage]]; 
            imgSal.src=imagen[rand[fotoEntra]];
        }
        numImage=fotoEntra;
        clearInterval(der);
        b=1;
    }
}

function moverIzquierda(){
    der2=setInterval(izquierda,100);
}

function izquierda(){
    var imgEnt=document.images["entrante"];
    var imgSal=document.images["saliente"];
    var divEnt=document.getElementById("entrada");
    var divSal=document.getElementById("salida");
    bot();
    divEnt.style.opacity=0;
    fotoEntra=numImage-1;
    cont1-=10;
    cont2+=10; 
    pos3+=50;
    if(pos3>425){
        pos3=425;
    }
    divEnt.style.opacity="0."+cont1;
    divSal.style.opacity="0."+cont2;
    if(numImage==0){
        divSal.style.left=pos3+"px";
    }
    else{
        divEnt.style.left=pos3+"px";
    }
    if(cont1==0){
        cont2=0;
        cont1=100;
        pos3=100;
        console.log(rand[fotoEntra]+1);
        console.log(rand[numImage]+1);
        console.log("cccc");
        divSal.style.opacity=0;
        divEnt.style.opacity=1;
        imgEnt.src=imagen[rand[numImage]]; 
        imgSal.src=imagen[rand[fotoEntra]];
        numImage=fotoEntra;
        clearInterval(der2);
        b=1;
    }
}

function bot(){
    if(fotoEntra>=5){
        document.getElementById("siguiente").disabled=true;
    }
    else if(fotoEntra<=0){
        document.getElementById("anterior").disabled=true;
    }
    else{
        document.getElementById("anterior").disabled=false;
        document.getElementById("siguiente").disabled=false;
    }
}