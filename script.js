const container = document.getElementById("cart-container");
const total = document.getElementById("total");

let total_qty = 0;
let cart = {
    "first": {
        "name": "horizon view",
        "src": "images/img1.jpg",
        "price": 41,
        "qty": 0
    },
    "second": {
        "name": "rhaetian alps",
        "src": "images/img2.jpg",
        "price": 53,
        "qty": 0
    },
    "third": {
        "name": "cozy isolation",
        "src": "images/img3.jpg",
        "price": 32,
        "qty": 0
    }
};

document.querySelectorAll('.info>button').forEach((button) => {
    button.onclick = () => {
        let cart_item = document.getElementById(button.value);
        if (cart_item)
            plus(cart_item);
        else create(button.value)
    };
});

showCart = () => {
    if (total_qty != 0) {
        container.style.display = 'flex';
        container.scrollIntoView();
    } else
        alert('Your Cart is empty. Buy something first then try!');
}

create = (id) => {
    total.innerText = ++total_qty;
    let selected = cart[id];
    container.innerHTML +=
        `<div class="cart-item" id="${id}">
            <img src="${selected.src}">
            <span class="name">${selected.name}</span>
            <span class="minus" onclick="minus(this.parentElement)">-</span>
            <span class="qty">${++selected.qty} pcs</span>
            <span class="plus" onclick="plus(this.parentElement)">+</span>
            <span class="sum">$ ${selected.qty*selected.price}</span>
        </div>`;
}

minus = (item) => {
    total.innerText = --total_qty;

    if (total_qty == 0)
        container.style.display = 'none';

    let selected = cart[item.id];
    if (selected.qty > 1) {
        item.getElementsByClassName('qty')[0].innerHTML = --selected.qty + ' pcs';
        item.getElementsByClassName('sum')[0].innerHTML = '$ ' + selected.qty * selected.price;
    } else item.remove();
}

plus = (item) => {
    total.innerText = ++total_qty;

    let selected = cart[item.id];

    item.getElementsByClassName('qty')[0].innerHTML = ++selected.qty + ' pcs';
    item.getElementsByClassName('sum')[0].innerHTML = '$ ' + selected.qty * selected.price;
}