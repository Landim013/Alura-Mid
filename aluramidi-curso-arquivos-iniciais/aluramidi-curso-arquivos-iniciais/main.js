// iniciando a função de som
//passando parametros (idElementoSom)
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
   
    if(elemento != null && elemento.localName === 'audio'){
        //console.log(elemento)
        elemento.play();
    }
    else{
        console.log('Elemento  ou seletor não encontrado!');
    }
};

//selecionando o elemento ()
//document.querySelector('.tecla_pom').onclick = tocaSomPom;

//selecionando todos os elementos (tecla) e add numa constante
const listaDeTeclas = document.querySelectorAll('.tecla');


for (let cont = 0; cont < listaDeTeclas.length;cont ++) {

    const tecla =listaDeTeclas[cont]

    // selecionando todos os elementos e enumerando atraves do claslist
    const  instrumento = tecla.classList[1]
    
    // template string (crase + $ + {var})
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    // definindo a posição d lista e chamando a função atraves do onclick
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
  

    console.log(cont);
    
    tecla.onkeydown= function(evento){
        
        if(evento.code === 'Space'|| evento.code === 'Enter'){
            
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
