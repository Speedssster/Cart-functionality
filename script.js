let total = 0;

document.querySelectorAll('button').forEach((button) => {
    button.onclick = () => {
        if (total >= 28)
            return;
        else total++;
        document.getElementById('total').innerText = total;
        document.getElementById('cart').innerHTML += `<button disabled>${button.value}</button>`;
        document.getElementById('cart').style.display = 'flex';
    };
});