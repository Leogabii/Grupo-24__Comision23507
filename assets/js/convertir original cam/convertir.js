export function convertir (vectorAconvertir) {
    let item;
    let items = "";
  
    if (!vectorAconvertir) {
      console.log("no hay elementos nabo");
      return;
    }
    console.log("logitud del vector recibido en convertir: " + vectorAconvertir.length)




    /*
 ladrar():
var perro = {
 nombre: "Milo",
 edad: 12,
 vivo: true,
 quienSoy() {return "Soy " + this.nombre},
 ladrar() {return this.nombre + " dice guau!"}


    */


 


    


    let indice = 1;
    let contadore=0;

    for(let i=0;i<vectorAconvertir.length;i++){
        console.log("valor de i: " + i);
        let pattern="";
        let variable = {
            image:vectorAconvertir[i]
        }
    //vectorAconvertir.forEach((cervecita) => {
        switch (indice) {
            case 1:
                if(contadore<vectorAconvertir.length){
                    pattern = `
                    <ul class="ul-acercade">
                    <li class="li-acercade" style="align-content: center;">
                        <img src="`+ variable.image + `"  alt="" class="tamaño_acercade">
                            <h3 style="padding-top: 10px;">BEER pub</h3>
                                <p class="p-acercade">El mejor Bar, ubicado en la zona de Palermo, es uno de los locales mas climatizados el cual disfruta de un ambiente divertido con una decoración espectacular, 
                                su ambiente moderno te asegura una noche divertida única e inolvidable. Su estructura se presenta con una capacidad  
                                aproximadamente para 150 personas y una espectacular infraestructura en sonido, iluminación y video imagen.
                                </p>
                    </li>
                    `;
                    indice++;
                }
               
                break;
            case 2:
                if(contadore<vectorAconvertir.length){
                    pattern = `
                    <li class="li-acercade">
                    <img src="`+ variable.image + `"  alt="" class="tamaño_acercade">
                    <h3 style="padding-top: 10px;">DIVERSION</h3>
                    <p class="p-acercade"> En BEER pub lo encontraras todo, Alta tecnología,
                        decoración vanguardista, son mezclas originales para que bailes desde tu mesa o en la pista. En su barra te ofrecerán una inmensa variedad de cócteles 
                        que son preparados por barman profesionales, licores variados, bebidas internacionales, nacionales y cerveza. Cuenta con un muy buen servicio al cliente, servicio de estacionamiento. 
                        </p>
                     </li>
                    `;
                    indice++;
                }
                break;
            case 3:
                if(contadore<vectorAconvertir.length){
                    pattern = `
                    <li class="li-acercade">
                    <img src="`+ variable.image + `" alt="" class="tamaño_acercade">
                    <h3 style="padding-top: 10px;">CERVEZAS</h3>
                    <ul style ="list-style-type: square;" class="ul-acercade-sinborde">
                        <li>Todas las canillas te esperan.</li>
                         <li>Cerveza Cartago Lather,
                        <li>Cerveza Artesanal Argentina,
                        <li>"Comunidad Cervecera" Alma Mater - Cerveza Artesanal.</li>
                        -
                    </li> Happy Hour hasta las 21 hs.</p></li> 
                    </ul>
            </li>
                    `;
                    indice++;
                }
                break;
            case 4:
                if(contadore<vectorAconvertir.length){
                    pattern = `
                    <li class="li-acercade" style="padding-right: .5rem;">
                    <img src="`+ variable.image + `" alt="" class="tamaño_acercade">
                    <h3 style="padding-top: 10px;">AMBIENTE</h3>
                    <ul style ="list-style-type: square;" class="ul-acercade-sinborde">
                     
                        <li>Ambiente calido,
                        <li>Amplio espacio de reunion,</li>
                        <li>Gran variedad de tragos y cervezas artesanales,</li>
                        <li>Cuenta con buena iluminacion acorde al ambiente.</li>
                    </li>
                </ul>
                </li>
            </ul>
                    `;
                    indice=1;
                }
                break;
            }
        items += pattern;
        contadore++;
    
           // });
        } // end for
        return items;
   
  } // end modulo
  

  /*
      let pattern = `
        
          <div>
              <img src="` + variable.image + `"alt="" width="102px" height="100px">
              <div>
              <h2>precio : 10</h2>
              <p>cerveza muy helada lo mejor</p>
              </div>
          </div>
          `;
  */

          /*
 switch (indice) {
            case 1:
                if(contadore<vectorAconvertir.length){
                    pattern = `
                        <div>
                        <img src="` + variable.image + `"alt="" width="102px" height="100px">
                        <div>
                        <h2>Titulo 1</h2>
                        <p>Primer case </p>
                        </div>
                    </div>
                    `;
                    indice++;
                }
               
                break;
            case 2:
                if(contadore<vectorAconvertir.length){
                    pattern = `
                        <div>
                        <img src="` + variable.image + `"alt="" width="102px" height="100px">
                        <div>
                        <h2>Titulo 2</h2>
                        <p>Segundo case </p>
                        </div>
                    </div>
                    `;
                    indice++;
                }
                break;
            case 3:
                if(contadore<vectorAconvertir.length){
                    pattern = `
                        <div>
                        <img src="` + variable.image + `"alt="" width="102px" height="100px">
                        <div>
                        <h2>Titulo 3</h2>
                        <p>tercer case </p>
                        </div>
                    </div>
                    `;
                    indice++;
                }
                break;
            case 4:
                if(contadore<vectorAconvertir.length){
                    pattern = `
                        <div>
                        <img src="` + variable.image + `"alt="" width="102px" height="100px">
                        <div>
                        <h2>Titulo 4</h2>
                        <p>Cuarto case </p>
                        </div>
                    </div>
                    `;
                    indice=1;
                }
                break;
        }
    items += pattern;
    contadore++;

       // });
    } // end for
          */