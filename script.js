const superContent = document.getElementById("superContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

const productos = [
  {
    id: 1,
    nombre: "Harina",
    precio: 180,
    img: "https://cdn.shopify.com/s/files/1/0567/2907/5873/products/panes.png?v=1642434309",
    cantidad: 1,
  },

  {
    id: 2,
    nombre: "Yerba",
    precio: 780,
    img: "https://http2.mlstatic.com/D_NQ_NP_911140-MLA51482594795_092022-O.webp",
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Leche",
    precio: 390,
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/350/887/products/al83300-leche-entera-tetra-veronica-x-1-lt1-c7c8957705ae8fc52b16091114716574-640-0.jpg",
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Fideos",
    precio: 120,
    img: "https://http2.mlstatic.com/D_NQ_NP_654781-MLA43356660403_092020-O.webp",
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Yogur",
    precio: 500,
    img: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3262639_f.jpg",
    cantidad: 1,
  },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p Class="price">$ ${product.precio} </p>
    `;

  superContent.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "comprar";
  comprar.className = "comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    const repeat = carrito.some(
      (repeatProduct) => repeatProduct.id === product.id
    );

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === product.id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
      });
    }
    carritoNumero();
    saveLocal();
  });
});
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify (carrito));
}
