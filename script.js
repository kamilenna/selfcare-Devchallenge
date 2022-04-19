const produtos = [
    {
        id: 0,
        img: "assets/gabrielle-henderson-1DMNn6gBbwQ-unsplash.jpg",
        nomeDoProduto: "Shampoo - Thicken & restore + Bamboo Fibers",
        valor: "30,00"
    },
    {
        id: 1,
        img: "assets/devin-avery-bMH8ub9z1_U-unsplash.jpg",
        nomeDoProduto: "Juice - turmeric, lemon, coconut water, black pepper",
        valor: "18,00"
    },
    {
        id: 2,
        img: "assets/devin-avery-BRVqq2uak4E-unsplash.jpg",
        nomeDoProduto: "Juice - assorted flavors",
        valor: "18,00"
    },
    {
        id: 3,
        img: "assets/nery-montenegro-SmEty_TVr80-unsplash.jpg",
        nomeDoProduto: "Loose face powder",
        valor: "40,00"
    },
    {
        id: 4,
        img: "assets/olena-sergienko-GOVTETevRm8-unsplash.jpg",
        nomeDoProduto: "Perfume",
        valor: "100,00"
    },
    {
        id: 5,
        img: "assets/pharma-hemp-complex-tAzdKblAinw-unsplash.jpg",
        nomeDoProduto: "Body balm - various fragrances",
        valor: "70,00"
    },
    {
        id: 6,
        img: "assets/phaedra-botanicals-uFAHrKYkTVI-unsplash.jpg",
        nomeDoProduto: "Antioxidant treatment oil",
        valor: "50,00"
    },
    {
        id: 7,
        img: "assets/pharma-hemp-complex-yVAXSK6zFIM-unsplash.jpg",
        nomeDoProduto: "Bath bomb - various fragrances",
        valor: "25,00"
    },
    {
        id: 8,
        img: "assets/chandra-oh-y5hRv6UNKMg-unsplash.jpg",
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