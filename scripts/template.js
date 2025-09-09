function createDesktopBasketItembtns (item, itemTotal) {
    return`
    <span class="item_info">${item.title} x${item.quantity} - ${itemTotal.toFixed(2)}$</span>
    <div class="item_buttons">
        <button class="basket_minus" data-id="${item.id}">-</button>
        <button class="basket_plus" data-id="${item.id}">+</button>
    </div>
    `;
}

function basketItemString(item, itemTotal) {
    return`
        <div class="basket_item">
            ${createDesktopBasketItembtns(item, itemTotal)}
        </div>
    `;
}

function orderButton() {
    order_button.onclick = function() {
        document.getElementById("basket_menus_desktop").innerHTML = ""
        document.getElementById("basket_menus_desktop").innerHTML = "Vielen Dank für Ihre Bestellung"
        document.getElementById("kosten_desktop").innerHTML = "0.00$"

        basket.splice(0);
        total = 0;
        
        updateCartCount();
    };

}

