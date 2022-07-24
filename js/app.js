const calcProduct = document.querySelector('#products');
const calcOrder = document.querySelector('#orders');
const totalPrice = document.querySelector('#total-price');
const totalPriceTextContent = document.querySelector('.total__price');
const selectDrop = document.querySelector('.select__input');
const selectDropDown = document.querySelector('.select__dropdown');
const accounting = document.querySelector('#accounting');
const terminal = document.querySelector('#terminal');

const productId = document.querySelector('[data-id="products"]');

const orderId = document.querySelector('[data-id="orders"]');

const packageId = document.querySelector('[data-id="package"]');
const selectBasic = document.querySelector('[data-value="basic"]');
const selectProfessional = document.querySelector('[data-value="professional"]');
const selectPremium = document.querySelector('[data-value="premium"]');

const accountingId = document.querySelector('[data-id="accounting"]');

const terminalId = document.querySelector('[data-id="terminal"]');
const calc = document.querySelector('.calc');
calcProduct.addEventListener('input', showAndCalc)//pokaż prawą strone.
calcOrder.addEventListener('input', showAndCalc)//pokaż prawą strone.
calc.addEventListener('change', showAndCalc)//pokaż prawą strone.
selectDrop.addEventListener('click', showDrop)//pokaż dropDown
accounting.addEventListener('click', checkboxCheck);
terminal.addEventListener('click', checkboxCheck);
selectBasic.addEventListener('click', innerSelect);
selectProfessional.addEventListener('click', innerSelect);
selectPremium.addEventListener('click', innerSelect);
const price = {
    'product': 0.5,
    'orders': 0.5,
    'basic': 0,
    'professional': 0,
    'premium': 0,
    'accounting': 0,
    'terminal': 0,
}
function showAndCalc() {
    showCalc();
    calculator(calcAndInner(), price);
}
function showCalc() {
    productId.style.display = 'flex';
    orderId.style.display = 'flex';
    if(!calcProduct.value.length > 0) {
        productId.style.display = '';
    }
    if(!calcOrder.value.length > 0) {
        orderId.style.display = '';
    }
}
function showDrop() {
    if(selectDropDown.style.display === 'block') {
        selectDropDown.style.display = '';
    } else {
        selectDropDown.style.display = 'block';
    }
}
function checkboxCheck() {
    accountingId.style.display = 'flex'
    terminalId.style.display = 'flex'
    const accountingPrice = document.querySelector('[data-id="accounting"] .item__price');
    price.accounting = 35;
    accountingPrice.textContent = `$${price.accounting}`
    const terminalPrice = document.querySelector('[data-id="terminal"] .item__price');
    price.terminal = 5;
    terminalPrice.textContent = `$${price.terminal}`
    if(!accounting.checked === true) {
        price.accounting = 0;
        accountingId.style.display = '';
    }
    if(!terminal.checked === true) {
        price.terminal = 0;
        terminalId.style.display = ''
    }
}
function innerSelect() {
    selectDrop.textContent = this.innerHTML;
    selectDrop.value = this.innerHTML;
    const typePackage = document.querySelector('[data-id="package"] .item__calc');
    const pricePackage = document.querySelector('[data-id="package"] .item__price');
    typePackage.textContent = selectDrop.value;
    price.basic = 0;
    price.professional = 0;
    price.premium = 0;
    if(selectDrop.value === 'Basic') {
        price.basic = 30;
        pricePackage.textContent = `$${price.basic}`;
    } else if (selectDrop.value === 'Professional') {
        price.professional = 50;
        pricePackage.textContent = `$${price.professional}`;
    } else if (selectDrop.value === 'Premium') {
        price.premium = 80;
        pricePackage.textContent = `$${price.premium}`;
    }
    selectDropDown.style.display = '';
    packageId.style.display = 'flex';
}
function calcAndInner() {
    const productCalc = document.querySelector('[data-id="products"] .item__calc');
    const productCalcPrice = document.querySelector('[data-id="products"] .item__price');
    productCalc.textContent = `${calcProduct.value} * $${price.product}`
    productCalcPrice.textContent = `$${calcProduct.value * price.product}`
    const ordersCalc = document.querySelector('[data-id="orders"] .item__calc');
    const ordersCalcPrice = document.querySelector('[data-id="orders"] .item__price');
    ordersCalc.textContent = `${calcOrder.value} * $${price.orders}`
    ordersCalcPrice.textContent = `$${calcOrder.value * price.orders}`
    return {
        productPrice: `${calcProduct.value * price.product}`,
        ordersPrice: `${calcOrder.value * price.orders}`,
    }
}
totalPrice.style.display = 'flex'
let total = 0;
totalPriceTextContent.textContent = `$${total}`;
function calculator(price, priceObj) {
    total = 0;
    total = +price.productPrice + +price.ordersPrice + +priceObj.product + +priceObj.premium + priceObj.professional + +priceObj.accounting + +priceObj.terminal;
    return totalPriceTextContent.textContent = `$${Math.floor(total).toFixed(0)}`;
}