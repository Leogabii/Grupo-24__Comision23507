

export function veronicaSuperPower(data,convertir,contador) {
  let item = ""
  let items = ""

  if (!data) {
    console.log("no hay data papu")
    return
  }
  
  let vector=[];
  data.forEach((cervecita) => {

    vector.push(cervecita.image)
    console.log("la longitud del vector es: " + vector.length)
    console.log(vector)
  });

  console.log("longitud definitiva del verctor convertido es:::::::: " + vector.length)
  let porcion=[]

       if (contador<vector.length) {
        console.log("la lngitud de acaaaaaaaa es   sss ss: "+ contador)
        porcion=convertir(vector.slice(contador,(contador+4)))
        //paso de a 3 elementos
      }
      else {
        // esto es para evitar que pinche
        porcion =convertir(vector.slice(1,5))
      }

  //return items;
   return porcion
}
/*
    // let pattern = `
    //     <div>
    //         <img src="${cervecita.image}" alt="${cervecita.name}" width="102px" height="100px">
    //         <div>
    //         <h2>precio : ${cervecita.price}</h2>
    //         <p>${cervecita.name}</p>
    //         </div>
    //     </div>
    //     `;
    // items += pattern;
*/









