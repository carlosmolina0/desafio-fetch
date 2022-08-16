function clickEnProducto(name) {
    console.log(name)
    alert('click en ' + name);
  }
  
  fetch('../data.json')
    .then((resinicial) => resinicial.json())
    .then((res) => {
      const miArray = res;
  console.log(miArray)
      let htmlAux = '';
      for (let i = 0; i < miArray.length; i++) {
        htmlAux =
          htmlAux +
          `<div onclick="clickEnProducto('${miArray[i].id}')">
            <h4 class="titulo-curso">${miArray[i].name}</h4>
            <p class="precio-curso">${miArray[i].price}</p>
        </div>`;
      }
      document.getElementById('listadoDeProductos').innerHTML = htmlAux;
    })
    .catch((e) => {
      console.log(e);
    });