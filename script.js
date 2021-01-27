var addIphone
var addPrice



const plusBtn = document.getElementById("plus-btn").addEventListener("click", function () {
    const iphoneInputString = document.getElementById("iphone-input").value;
    const iphoneInput = parseFloat(iphoneInputString);
    addIphone = iphoneInput + 1;
    document.getElementById("iphone-input").value = addIphone;
    const totalPriceString = document.getElementById("total-price").innerText;
    const totalPrice = parseFloat(totalPriceString);
    addPrice = totalPrice + 1219;
    document.getElementById("total-price").innerText = addPrice;
})


const minusBtn = document.getElementById("minus-btn").addEventListener("click", function () {
    addIphone = addIphone - 1;
    document.getElementById("iphone-input").value = addIphone;
    addPrice = addPrice - 1219;
    document.getElementById("total-price").innerText = addPrice;
        
})

