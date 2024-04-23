//Menu Hamburguer//
function toggleHamburgerMenu() {
    var menuContent = document.getElementById('menuContent');
    if (menuContent.style.display === 'block') {
        menuContent.style.display = 'none';
    } else {
        menuContent.style.display = 'block';
    }
}

// Fechar o menu se clicar em qualquer lugar fora dele
window.onclick = function(event) {
    var menuContent = document.getElementById('menuContent');
    if (!event.target.matches('.menu-icon')) {
        menuContent.style.display = 'none';
    }
}
 //Grid Loja//
 function openDetails(detailsPage) {
    // Abre a página de detalhes em uma nova aba
    window.open(detailsPage, '_blank');
}
//Hover//
function openDetails(detailsPage) {
    window.open(detailsPage, '_blank');
}

//Print//
// Adicione isso ao seu scripts.js existente
function redirectNow() {
    window.location.href = "https://printsoflove.com/ref/LULUBRASILSTORE";
}


//Cod pág About US//
function toggleMenu() {
    var menuContent = document.getElementById('menuContent');
    menuContent.classList.toggle('show');
}

//carrinho//
let cart = [];

function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartArea = document.querySelector("#shopping-cart");
    cartArea.innerHTML = '';
    cart.forEach((item, index) => {
        cartArea.innerHTML += `<div>${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></div>`;
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function toggleHamburgerMenu() {
    const menu = document.getElementById('menuContent');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

//Produtos com botão//
function buyProduct(productName, price, canvaUrl) {
    // Simulação de um pagamento
    console.log(`Starting payment for ${productName} Price $${price}`);
    // Em um cenário real, aqui você integraria com uma API de pagamentos

    // Simulação de redirecionamento pós-pagamento
    alert(`Thank you for purchasing ${productName}! You will be redirected to Canva.`);
    window.open(canvaUrl, '_blank');
}

//Carrossel//
let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }    
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
}

function toggleHamburgerMenu() {
    var menuContent = document.getElementById("menuContent");
    if (menuContent.style.display === "block") {
        menuContent.style.display = "none";
    } else {
        menuContent.style.display = "block";
    }
}