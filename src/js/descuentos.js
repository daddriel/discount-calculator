function discountPrice(price, off) {
    return price * (100 - off) / 100
}
const listDiscount = {
    '20WINTER': 20,
    '30SUMMER': 30,
    '50FRIDAY': 50
}
function onClickDiscount() {
    const inputPrice = document.getElementById('input-price').value;
    const inputDiscount = compareDiscount()

    if (inputDiscount > 100) {
        document.getElementById('price-final').innerText = 'The discount can not be more than 100%'
    } else {
        if (inputDiscount == 'error') {
            document.getElementById('price-final').innerText = 'The discount code is not valid'
        }
        else {
            document.getElementById('price-final').innerText = 'The price with discount is $' + discountPrice(inputPrice, inputDiscount)
        }
    }

}

function compareDiscount() {
    const inputDiscount = document.getElementById('input-discount').value.toUpperCase();
    const typeDiscount = document.querySelector('input[name="typeDiscount"]:checked').value;

    var res = 0;
    if (typeDiscount == 'percent') {
        res = document.getElementById('input-discount').value;
    } else {
        for (const [key, value] of Object.entries(listDiscount)) {
            if (inputDiscount == key) {
                res = value;
            }
            else {
                res = 'error';
            }
        }
    }
    return res;
}

function handleChange(src) {
    if (src.value == 'percent') {
        document.getElementById('input-discount').type = 'number';
        document.getElementById('discount-list').classList.add("hidden");
    } else {
        document.getElementById('input-discount').type = 'text';
        document.getElementById('discount-list').classList.remove("hidden");
    }
}

window.onload = function () {

    handleChange(document.querySelector('input[name="typeDiscount"]:checked'));

}