let Cantidad = [];
let ProductosHtml = [];
let IdCarro = []
let Total = 0;

let Escritura = document.getElementById('Losproductos');
let Carrito = document.getElementById('carro')
let sumaTotal = document.getElementById('total')


const addProduct = (Producto, Precio, count) =>{


    Cantidad.push({
        Nombre: Producto,
        Precio: Precio,
        Count: count

    })

    ProductosHtml.push(`<ul>
    <li><h3>${Producto}</h3></li>
    <li><p>${Precio}</p></li>
   </ul>`)



 let idActual = ProductosHtml.length - 1


    escribiendo(idActual)
    sumaFinal(Precio)
    setCount()


}
function sumaFinal (parametro) {
    Total += parametro;
    console.log(Total)
    sumaTotal.innerText = `${Total}`
    // sumaTotal.innerHTML+= ProductosHtml
}

function escribiendo (x) {
Escritura.innerHTML += ProductosHtml[x];
}

const setCount = () => {
    let totalCount = 0

    for(let item in Cantidad){
        totalCount += Cantidad[item].Count
    }
Carrito.innerText =`${totalCount}`

return totalCount()
}