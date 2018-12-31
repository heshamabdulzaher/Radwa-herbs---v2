const products = [
  {
    name: "ليمون مجفف",
    src: "./images/products/1.jpg"
  },
  {
    name: "شمر",
    src: "./images/products/2.jpg"
  },
  {
    name: "بردقوش",
    src: "./images/products/3.jpg"
  },
  {
    name: "بقدونس",
    src: "./images/products/4.jpg"
  },
  {
    name: "حبة البركة",
    src: "./images/products/5.jpg"
  },
  {
    name: "ريحان",
    src: "./images/products/6.jpg"
  },
  {
    name: "فلفل",
    src: "./images/products/7.jpg"
  },
  {
    name: "فول",
    src: "./images/products/8.jpg"
  },
  {
    name: "كراوية",
    src: "./images/products/9.jpg"
  },
  {
    name: "كركدية",
    src: "./images/products/10.jpg"
  },
  {
    name: "نعناع",
    src: "./images/products/11.jpg"
  },
  {
    name: "ينسون",
    src: "./images/products/12.jpg"
  }
];

window.onload = function() {
  handleProducts();
};

const cardContainer = document.querySelector(".card_container");
function handleProducts() {
  products.forEach(item => {
    let card = `<div class="card">
        <div class="img" style="background-image: url('${item.src}')"></div>
        <div class="name">${item.name}</div>
    </div>`;
    cardContainer.innerHTML += card;
  });
}
