var addIphone;
var addPrice;


var addCover;
var addCoverPrice;

var subTotalPrice;
var finalPrice 




const plusBtn = document.getElementById("plus-btn").addEventListener("click", function () {
    const iphoneInputString = document.getElementById("iphone-input").value;
    const iphoneInput = parseFloat(iphoneInputString);
    addIphone = iphoneInput + 1;
    document.getElementById("iphone-input").value = addIphone;
    const totalPriceString = document.getElementById("total-price").innerText;
    const totalPrice = parseFloat(totalPriceString);
    addPrice = totalPrice + 1219;
    document.getElementById("total-price").innerText = addPrice;

    const subTotalPlusString = document.getElementById("sub-total").innerText;
    subTotalPrice = parseFloat(subTotalPlusString);
    document.getElementById("sub-total").innerText = subTotalPrice + addPrice;

    const totalPriceStringPlusIphone = document.getElementById("final-price").innerText
    finalPrice = parseFloat(totalPriceStringPlusIphone);
    document.getElementById("final-price").innerText = finalPrice + addPrice;
})


const minusBtn = document.getElementById("minus-btn").addEventListener("click", function () {
    addIphone = addIphone - 1;
    document.getElementById("iphone-input").value = addIphone;
    addPrice = addPrice - 1219;
    document.getElementById("total-price").innerText = addPrice;

    const subTotalMinusString = document.getElementById("sub-total").innerText;
    subTotalPrice = parseFloat(subTotalMinusString);
    document.getElementById("sub-total").innerText = subTotalPrice - addPrice;
 

    const totalPriceStringMinusIphone = document.getElementById("final-price").innerText
    finalPrice = parseFloat(totalPriceStringMinusIphone);
    document.getElementById("final-price").innerText = finalPrice - addPrice;
        
})


const plusCoverBtn = document.getElementById("plus-cover-btn").addEventListener("click", function () {
    const coverInputString = document.getElementById("cover-input").value;
    const coverInput = parseFloat(coverInputString);
    addCover = coverInput + 1;
    document.getElementById("cover-input").value = addCover;
    const totalCoverPriceString = document.getElementById("total-cover-price").innerText;
    const totalCoverPrice = parseFloat(totalCoverPriceString);
    addCoverPrice = totalCoverPrice + 59;
    document.getElementById("total-cover-price").innerText = addCoverPrice;

    const subTotalCoverPlusString = document.getElementById("sub-total").innerText;
    subTotalPrice = parseFloat(subTotalCoverPlusString);
    document.getElementById("sub-total").innerText = subTotalPrice + addCoverPrice;


    const totalPriceStringPlusCover = document.getElementById("final-price").innerText
    finalPrice = parseFloat(totalPriceStringPlusCover);
    document.getElementById("final-price").innerText = finalPrice + addCoverPrice;
})


const minusCoverBtn = document.getElementById("minus-cover-btn").addEventListener("click", function () {
    addCover = addCover - 1;
    document.getElementById("cover-input").value = addCover;
    addCoverPrice = addCoverPrice - 59;
    document.getElementById("total-cover-price").innerText = addCoverPrice;


    const subTotalCoverMinusString = document.getElementById("sub-total").innerText;
    subTotalPrice = parseFloat(subTotalCoverMinusString);
    document.getElementById("sub-total").innerText = subTotalPrice - addCoverPrice;
 
        
    const totalPriceStringMinusCover = document.getElementById("final-price").innerText
    finalPrice = parseFloat(totalPriceStringMinusCover);
    document.getElementById("final-price").innerText = finalPrice - addCoverPrice;
})


