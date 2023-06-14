const superContent = document.getElementById("superContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const productos = [
  {
    id: 1,
    nombre: "Harina",
    precio: 180,
    img: "https://cdn.shopify.com/s/files/1/0567/2907/5873/products/panes.png?v=1642434309",
  },

  {
    id: 2,
    nombre: "Yerba",
    precio: 780,
    img: "https://http2.mlstatic.com/D_NQ_NP_911140-MLA51482594795_092022-O.webp",
  },
  {
    id: 3,
    nombre: "Leche",
    precio: 390,
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/350/887/products/al83300-leche-entera-tetra-veronica-x-1-lt1-c7c8957705ae8fc52b16091114716574-640-0.jpg",
  },
  {
    id: 4,
    nombre: "Fideos",
    precio: 120,
    img: "https://http2.mlstatic.com/D_NQ_NP_654781-MLA43356660403_092020-O.webp",
  },
  {
    id: 5,
    nombre: "Yogur",
    precio: 500,
    img: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3262639_f.jpg",
  },
];

let carrito = [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p Class="price">$ ${product.precio} </p>
    `;

  superContent.append(content);

  let compra = document.createElement("button");
  compra.innerText = "comprar";
  compra.className = "comprar";

  content.append(compra);

  compra.addEventListener("click", () => {
    carrito.push({
      id: product.id,
      img: product.img,
      nombre: product.nombre,
      precio: product.precio,
    });
    console.log(carrito);
  });
});

verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display ="flex";
  const modalHaeder = document.createElement("div");


  modalHaeder.className = "modal-header";

  modalHaeder.innerHTML = `
   <h1 class="modal-header-title">Carrito.</h1>
`;
  modalContainer.append(modalHaeder);

  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";
  modalbutton.addEventListener("click", () =>{
    modalContainer.style.display ="none";
  });

  modalHaeder.append(modalbutton);

  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
    <img  src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>$ ${product.precio}</p>

    `;

    modalContainer.append(carritoContent);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);

  const totalCompra = document.createElement("div");
  totalCompra.className = "total-content";
  totalCompra.innerHTML = `total a pagar: $ ${total}`;
  modalContainer.append(totalCompra);
});
