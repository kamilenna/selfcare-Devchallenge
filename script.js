const produtos = [
    {
        id: 0,
        img: "assets/shampoo.jpg",
        nomeDoProduto: "Shampoo - Thicken & restore + Bamboo Fibers",
        valor: "30,00"
    },
    {
        id: 1,
        img: "assets/juice.jpg",
        nomeDoProduto: "Juice - turmeric, lemon, coconut water, black pepper",
        valor: "18,00"
    },
    {
        id: 2,
        img: "assets/flavors-juice.jpg",
        nomeDoProduto: "Juice - assorted flavors",
        valor: "18,00"
    },
    {
        id: 3,
        img: "assets/face-powder.jpg",
        nomeDoProduto: "Loose face powder",
        valor: "40,00"
    },
    {
        id: 4,
        img: "assets/perfume.jpg",
        nomeDoProduto: "Perfume",
        valor: "100,00"
    },
    {
        id: 5,
        img: "assets/body-balm.jpg",
        nomeDoProduto: "Body balm - various fragrances",
        valor: "70,00"
    },
    {
        id: 6,
        img: "assets/antioxidante.jpg",
        nomeDoProduto: "Antioxidant treatment oil",
        valor: "50,00"
    },
    {
        id: 7,
        img: "assets/bath-bomb.jpg",
        nomeDoProduto: "Bath bomb - various fragrances",
        valor: "25,00"
    },
    {
        id: 8,
        img: "assets/anti-aging.jpg",
        nomeDoProduto: "Anti-aging eye cream",
        valor: "60,00"
    },
]

function inicializarLoja() {
    var containerProdutos = document.getElementById("produtos")

    produtos.map((item)=> {
        containerProdutos.innerHTML+= `
        <div class="card-produto">
            <div class="card-img">
                <img src="${item.img}">
            <div>
            <div class="card-info">
                <p class="card-title"><strong>${item.nomeDoProduto}</strong></p>
                <p class="card-valor">R$ <strong>${item.valor}</strong></p>
            </div>
        </div>
        `
    })
}