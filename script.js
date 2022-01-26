function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
   }
   
   function porc() {
    var porce = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = porce/100;
   }

   function clean() {
       document.getElementById('resultado').innerHTML = "";
   }

   function back() {
   var resultado = document.getElementById('resultado').innerHTML;
       document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
   }

   function calcular(){
   var resultado = document.getElementById('resultado').innerHTML;
   if(resultado){
       document.getElementById('resultado').innerHTML = eval(resultado);
    
   } else {
       document.getElementById('resultado').innerHTML = "";
   }
   } 

