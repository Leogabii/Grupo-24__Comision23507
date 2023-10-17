document.querySelector('.menu-btn').addEventListener('click',() => { document.querySelector('nav').classList.toggle('show');});





// cree una funcion generica

function ocultar2(vlor){
    if(document.getElementById(vlor).style.visibility==='hidden'){

        document.getElementById(vlor).style.visibility='visible' 
    }else{

        document.getElementById(vlor).style.visibility='hidden'    ;
    }
}






document.querySelector('.btn-faq1').addEventListener('click',() => {ocultar2('id-faq1')});

document.querySelector('.btn-faq2').addEventListener('click',() => {ocultar2('id-faq2')});

document.querySelector('.btn-faq3').addEventListener('click',() => {ocultar2('id-faq3')});



