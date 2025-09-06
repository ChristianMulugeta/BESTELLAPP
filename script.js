const basketMenuDesktop = document.getElementById("basket_menus_desktop");
const basketMenuMobile = document.getElementById("basket_menus_mobile");

const costsDesktop = document.getElementById("kosten_desktop");
const costsMobile = document.getElementById("kosten_mobile");

const basketWrapperResponsive = document.getElementById("basket_desktop");

const basketTitle = document.getElementsByClassName("basket")[0];
const basketContent = document.getElementsByClassName("basket_content")[0];

const order_button = document.getElementById("bestell_button");

const buttons = document.getElementsByClassName("plus_button");

const cartCount = document.getElementById("cart_counter");

const basketItemsDesktop = document.getElementById("basket_menus_desktop");

const basket = [];

let total = 0;

basketTitle.addEventListener("click", () => {
    basketContent.classList.toggle("visible");
});

function addToCartButton() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            const id = parseInt(this.dataset.id); 
            const selectedProduct = product.find(p => p.id === id);
            if (selectedProduct) {
                const basketItem = basket.find(item => item.id === id);
                if (basketItem) basketItem.quantity += 1;
                else basket.push({ ...selectedProduct, quantity: 1 });
                total += selectedProduct.price;
                updateBasketDisplay();
            }    
        });
    }
}
addToCartButton();

function updateCartCount() {
    let count = 0;
    for (let item of basket) {
        count += item.quantity;
    }
    cartCount.innerText = count;
}

function updateBasketDisplay() {
    basketMenuDesktop.innerHTML = "";
    order_button.disabled = basket.length === 0;
    if (basket.length === 0) {
        basketMenuDesktop.innerText = "Warenkorb leer";
        costsDesktop.innerText = "0.00$";
        costsMobile.innerText = "0.00$";
        return;
    }
    costsDesktop.innerText = `${total.toFixed(2)}$`;
    shortcuts();
}

function shortcuts() {
    createDesktopBasketItem();
    createMobileBasketItem();
    plusButtons();
    minusButtons();
    updateCartCount();
    orderButton();
}

function createDesktopBasketItem() {
    basket.forEach(item => {
        const itemTotal =item.price * item.quantity;
        let itemElementDesktop = document.createElement("div");
            itemElementDesktop.className = "basket_item";
            itemElementDesktop.innerHTML = createDesktopBasketItembtns(item, itemTotal);
            basketMenuDesktop.appendChild(itemElementDesktop);  
    })
}

function createMobileBasketItem() {
    basket.forEach(item => {
        const itemTotal =item.price * item.quantity;
        let itemElementMobile = document.createElement("div");
            itemElementMobile.className = "basket_item";
            itemElementMobile.innerHTML = createMobileBasketItembtns(item, itemTotal);
    })
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