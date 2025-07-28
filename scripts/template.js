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