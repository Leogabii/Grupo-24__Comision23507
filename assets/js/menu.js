document.querySelector('.menu-btn').addEventListener('click',() => { document.querySelector('nav').classList.toggle('show');});

// document.querySelector('.btn-faq1').addEventListener('click',() => { document.querySelector('div-faq1').classList.toggle('visible-faq1');});
/*
visible-faq1
*/



function ocultar(){
    if(document.getElementById('id-faq1').style.visibility==='hidden'){

        document.getElementById('id-faq1').style.visibility='visible' 
    }else{

        document.getElementById('id-faq1').style.visibility='hidden'    ;
    }
}

function muestra(){
    document.getElementById('id-faq1').style.visibility='visible';
}

document.querySelector('.btn-faq1').addEventListener('click',() => {ocultar()});

// document.querySelector('.btn-faq1').addEventListener('click',() => {document.querySelector('div-faq1').classList.toggle('muestra()');});