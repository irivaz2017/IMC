
function imc(){
   //Declaracao das variaveis
   let altura = document.getElementById('altura').value;
   let peso   = document.getElementById('peso').value;
   let result = document.getElementById('result');
   let imc    = document.getElementById('imc');   

   //substitui virgula por ponto 
   altura = altura.replace(',','.');
    peso = peso.replace(',','.');

    if(altura !='' && peso != ''){
    
    //calcula  imc
    let calcula = peso/(altura * altura);

        //arredonda valor
    calcula = calcula.toFixed(2);

    //mostra na tela o imc do usuario
    result.innerHTML += calcula.replace('.',',') + '<br />';
    
    //Mostra se o usuario esta dentro do peso ideal ou nao
    if(calcula < 18.5)
        imc.innerHTML = 'Você está abaixo do peso.';
    else if(calcula >= 18.5 && calcula < 24.9)   
        imc.innerHTML = 'Você está no peso ideal.';
    else if(calcula >= 25 && calcula <= 29.9) 
        imc.innerHTML = 'Você está acima do peso ideal.';
    else if(calcula >= 30 && calcula <= 40)
        imc.innerHTML = 'Você está com obesidade.'; 
    else
        imc.innerHTML = 'Você está com obesidade mórbida.'; 
    }
    else{
        alert('Preencha todos os campos!');
    }   

   document.getElementById('altura').value;
   document.getElementById('peso').value;      
}

function verificarInput(event){
    //var express = 'vamos verificar';
    //alert(express.replace()
   //alert('vc clicou em caracter invalido!');
   
    if(letra != 0 && letra !=1 && letra !=2 && letra !=3 && letra !=4 && letra !=5 && letra !=6 && letra !=7 && letra != 8 && letra !=9 && letra != ',' && letra !='.' && letra != 'Backspace' && letra!= 'Delete' && letra != 'Tab' && letra != 'Enter' && letra != 'ArrowLeft' && letra!= 'ArrowRight'){
        alert('Caracter invalido!');
    } 
   
    document.getElementById('altura').value;
    document.getElementById('peso').value;   
}
