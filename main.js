
const button = document.querySelector('.button');
const msg = document.querySelector('#msg');



 function calc(){
    const nome = document.querySelector('#name').value;
    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;
    
    if(nome !== '' && altura !== '' && peso !== ''){
       let resultado = (peso / (altura * altura)).toFixed(1);

    
    if(resultado < 25){
        msg.textContent = `Parábens ${nome} seu IMC é ${resultado}, você esta muito bem!!`;
        msg.style.background = 'blue';
        msg.style.color = 'white';
    }else {
       msg.textContent = `Se esforçe ${nome} seu IMC é ${resultado}, você esta acima do peso :(`
       msg.style.background = 'red';
      }
    }
 }
 
  ;

 button.addEventListener('click', calc);