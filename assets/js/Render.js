const { log } = console;
let contador = 0;
let maximoDeImagenes=20;
export class Render {
  constructor(containerID) {
    this.container = document.getElementById(containerID);
  }S


  fetchData(URI, cb, convertidor,options = {}) {
    fetch(URI, options)
      .then((res) => res.json())
      .then((data) => {
        if (!cb) {
          // log(data);
          return null;
        } // es del if (!cb)
        setInterval(() => {

          if(contador<maximoDeImagenes){
        let itemsRenderizar = cb(data,convertidor,contador);  // aca me trae el array leido del json
        this.#renderInContainer(itemsRenderizar);
        contador=contador+4;
        console.log("la veriable contador vale: "+ contador)
          }else{
            contador=0;
            let itemsRenderizar = cb(data,convertidor,contador);  // aca me trae el array leido del json
            this.#renderInContainer(itemsRenderizar);
            contador=+4;
          }
      
        }
        , 2_000);
        return;
      }) // es del .then((data)
      .catch((error) => console.log({ error }));
  }







  #renderInContainer(items) {
        
          this.container.innerHTML =  items;
    }

}


// `¡Hola ${nombre}!`
