function createDesktopBasketItem() {
    basket.forEach(item => {
        const itemTotal =item.price * item.quantity;
        let itemElementDesktop = document.createElement("div");
            itemElementDesktop.className = "basket_item";
            itemElementDesktop.innerHTML = `
            <span class="item_info">${item.title} x${item.quantity} - ${itemTotal.toFixed(2)}$</span>
            <div class="item_buttons">
                <button class="basket_minus" data-id="${item.id}">-</button>
                <button class="basket_plus" data-id="${item.id}">+</button>
            </div>
            `;
            basketMenuDesktop.appendChild(itemElementDesktop);  
    })
}

function createMobileBasketItem() {
    basket.forEach(item => {
        const itemTotal =item.price * item.quantity;
        let itemElementMobile = document.createElement("div");
            itemElementMobile.className = "basket_item";
            itemElementMobile.innerHTML = `
            <span class="item_info">${item.title} x${item.quantity} - ${itemTotal.toFixed(2)}$</span>
            <div class="item_buttons">
                <button class="basket_minus" data-id="${item.id}">-</button>
                <button class="basket_plus" data-id="${item.id}">+</button>
            </div>
            `;
            basketMenuMobile.appendChild(itemElementMobile);  
    })
}

function orderButton() {
    order_button.onclick = function() {
        document.getElementById("basket_menus_desktop").innerHTML = ""
        document.getElementById("basket_menus_desktop").innerHTML = "Vielen Dank für Ihre Bestellung"
        document.getElementById("kosten_desktop").innerHTML = "0.00$"

        basket.splice(0);
        total = 0;
        
    };
}


function orderButtonMobile() {
    bestell_button_mobile.onclick = function() {
        document.getElementById("basket_menus_mobile").innerHTML = ""
        document.getElementById("basket_menus_mobile").innerHTML = "Vielen Dank für Ihre Bestellung"
        document.getElementById("kosten_mobile").innerHTML = "0.00$"

        basket.splice(0);
        total = 0;

        updateCartCount();
    };
}
