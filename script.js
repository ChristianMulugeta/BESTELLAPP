const basketMenuDesktop = document.getElementById("basket_menus_desktop");
const basketMenuMobile = document.getElementById("basket_menus_mobile");

const costsDesktop = document.getElementById("kosten_desktop");
const costsMobile = document.getElementById("kosten_mobile");

const basketWrapperResponsive = document.getElementById("basket_mobile");
const basketTitle = document.getElementById("basket_title");

const bestell_button = document.getElementById("bestell_button");

const buttons = document.getElementsByClassName("plus_button");

const cartCount = document.getElementById("cart_counter");


const basket = [];

let total = 0;

function updateCartCount() {
    let count = 0;
    for (let item of basket) {
        count += item.quantity;
    }
    cartCount.innerText = count;
}

basketTitle.addEventListener("click", () => {
    basketWrapperResponsive.classList.toggle("visible");
});

bestell_button.addEventListener("click", () =>{
    document.getElementById("basket_menus_desktop").innerHTML = ""
    document.getElementById("basket_menus_desktop").innerHTML = "Vielen Dank für Ihre Bestellung"
    document.getElementById("kosten_desktop").innerHTML = "0.00$"

    basket.splice(0);
    total = 0;
    
});

bestell_button_mobile.addEventListener("click", () =>{
    document.getElementById("basket_menus_mobile").innerHTML = ""
    document.getElementById("basket_menus_mobile").innerHTML = "Vielen Dank für Ihre Bestellung"
    document.getElementById("kosten_mobile").innerHTML = "0.00$"

    basket.splice(0);
    total = 0;
});

function addToCartButton() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            const id = parseInt(this.dataset.id); 
            const selectedProduct = product.find(p => p.id === id);
            if (selectedProduct) {
                const basketItem = basket.find(item => item.id === id);
                if (basketItem) {
                    basketItem.quantity += 1;
                } else {
                    basket.push({ ...selectedProduct, quantity: 1 });
                }
                total += selectedProduct.price;
                updateBasketDisplay();
            }    
        });
    }
}
addToCartButton();


function updateBasketDisplay() {
    basketMenuDesktop.innerHTML = "";
    basketMenuMobile.innerHTML = "";
    if (basket.length === 0) {
        basketMenuDesktop.innerText = "Warenkorb leer";
        basketMenuMobile.innerText = "Warenkorb leer";
        costsDesktop.innerText = "0.00$";
        costsMobile.innerText = "0.00$";
        return;
    }
    costsDesktop.innerText = `${total.toFixed(2)}$`;
    costsMobile.innerText = `${total.toFixed(2)}$`;
    createDesktopBasketItem();
    createMobileBasketItem();
    plusButtons();
    minusButtons();
    updateCartCount();
}

function plusButtons() {
    const plusButtons = document.getElementsByClassName("basket_plus");
    for (let btn of plusButtons) {
        btn.onclick = function () {
            const id = parseInt(this.dataset.id);
            const item = basket.find(p => p.id === id);
            if (item) {
                item.quantity += 1;
                total += item.price;
                updateBasketDisplay();
            }
        };
    }
}

function minusButtons() {
    const minusButtons = document.getElementsByClassName("basket_minus");
    for (let btn of minusButtons) {
        btn.onclick = function () {
            const id = parseInt(this.dataset.id);
            const item = basket.find(p => p.id === id);
            if (item) {
                item.quantity -= 1;
                total -= item.price;
                if (item.quantity <= 0) {
                    const index = basket.findIndex(p => p.id === id);
                    basket.splice(index, 1);
                }
                updateBasketDisplay();
            }
        };
    }
}


