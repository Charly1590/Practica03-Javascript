function recibir(n){
    var a=document.getElementById("ingreso").value;
    if(a==0){
        document.getElementById("ingreso").value=n;
    }
    else{
        document.getElementById("ingreso").value+=n;
    }
}

function limpiar (){
    document.getElementById("ingreso").value=0;
    document.getElementById("historial").value="";
}

function operaciones(){
    var opercacion=document.getElementById("ingreso").value;
    var i;
    var resultado;
    if(opercacion.indexOf("!")>-1){
        var op=opercacion.split("!");
        var a=Number(op[0]);
        var i;
        var acum=a;
        for(i=a-1;i>0;i--){
            acum=acum*i;
        }
        document.getElementById("ingreso").value=acum;
        document.getElementById("historial").value+=a+"!="+acum+"\n";
    }
    else if(opercacion.indexOf("^")>-1){
        var op=opercacion.split("^");
        var a=Number(op[0]);
        var b=Number(op[1]);
        var resultado=a**b;
        document.getElementById("ingreso").value=resultado;
        document.getElementById("historial").value+=a+"^"+b+"="+resultado+"\n";
    }
    else{
        resultado=eval (opercacion);
        document.getElementById("ingreso").value=resultado;
        document.getElementById("historial").value+=(opercacion+"="+resultado+"\n");
    }
}