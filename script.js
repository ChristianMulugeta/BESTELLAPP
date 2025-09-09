const basketMenuDesktop = document.getElementById("basket_menus_desktop");
const costsDesktop = document.getElementById("kosten_desktop");
const basketWrapperResponsive = document.getElementById("basket_desktop");
const basketTitle = document.getElementsByClassName("basket_title")[0];
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

// Zu erst lasse ich nach diesem Produkt im db suchen, falls es dieses Produkt nicht findet dann Suche beenden. Dann soll es schauen ob das 
// Produkt schon im Warenkorb vorhanden ist, wenn ja dann die menge um 1 erhöhen wenn nicht dann neues Objekt ins basket Array legen. 
// Und dann die Gesamtsumme erhöhen und zum schluss den Warenkorb aktualisieren. 
function addProductToBaket(id) {
    let productItem = product.find(p => p.id === id);
    if (!productItem) return;
    let item = basket.find(p => p.id === id);
    if (item) {
        item.quantity++;
    } else {
        basket.push({...productItem, quantity: 1});
    }
    total += productItem.price;
    updateBasketDisplay();
}

// Funktion für alle Buttons das sie eine klick funktion bekommen, wenn man dann auf ein Button klickt wird dann addProductToBaket(id) aufgerufen
// (button.dataset.id) liest die data-id aus dem html aus und wird mit addProductToBaket zu warenkorb hinzugefügt.
function addToCartButton() {
    for (let button of buttons) {
        button.onclick = () => addProductToBaket(Number(button.dataset.id));
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
        return;
    }
    costsDesktop.innerText = `${total.toFixed(2)}$`;
    shortcuts();
}

function shortcuts() {
    createDesktopBasketItem();
    plusButtons();
    minusButtons();
    updateCartCount();
    orderButton();
}

function createDesktopBasketItem() {
    basketItemsDesktop.innerHTML = "";
    for (let item of basket) {
        let itemTotal = item.price * item.quantity;
        let html = basketItemString(item, itemTotal);
        basketMenuDesktop.innerHTML += html;
    }
}

function plusButtons() {
    const plusButtons = document.getElementsByClassName("basket_plus");
    for (let btn of plusButtons) {
        btn.onclick = function () {
            let id = Number(btn.dataset.id);
            let item = basket.find(product => product.id === id);
            if (item) {
                item.quantity = item.quantity + 1;
                total = total + item.price;
                updateBasketDisplay();
            }
        };
    }
}

function minusButtons() {
    const minusButtons = document.getElementsByClassName("basket_minus");
    for (let btn of minusButtons) {
        btn.onclick = function () {
            let id = Number(btn.dataset.id);
            let item = basket.find(product => product.id === id);
            if (item) {
                item.quantity = item.quantity - 1;
                total = total - item.price;
                if (item.quantity <= 0) {
                    let index = basket.findIndex(product => product.id === id);
                    basket.splice(index, 1);
                }
                updateBasketDisplay();
            }    
        };
    }
}