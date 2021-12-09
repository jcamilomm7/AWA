let contador = 0;
let div = document.querySelector(".container");
let cliente1 = document.querySelector(".cliente1");
let cliente2 = document.querySelector(".cliente2");
let cliente3 = document.querySelector(".cliente3");
let cliente4 = document.querySelector(".cliente4");
let cliente5 = document.querySelector(".cliente5");
let cliente6 = document.querySelector(".cliente6");
let tiempo = () => {
    contador++;
  if (contador== 1) {
    cliente1.src= "./src/image/esta.jpg";
    cliente2.src= "./src/image/esta.jpg";
    cliente3.src= "./src/image/esta.jpg";
    cliente4.src= "./src/image/esta.jpg";
    cliente5.src= "./src/image/esta.jpg";
    cliente6.src= "./src/image/esta.jpg";
   
    
  } else if(contador==2) {
    cliente1.src= "./src/image/platillo1.jpg";
    cliente2.src= "./src/image/platillo1.jpg";
    cliente3.src= "./src/image/platillo1.jpg";
    cliente4.src= "./src/image/platillo1.jpg";
    cliente5.src= "./src/image/platillo1.jpg";
    cliente6.src= "./src/image/platillo1.jpg";
    contador=0;
    
  }
  
};

setInterval(tiempo, 5000);