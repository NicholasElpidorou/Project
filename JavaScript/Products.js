/**
 * Created by NicholasElpidorou on 14/02/2017.
 */


var ProductModal = document.getElementById("ProductModal");



var ProductTitle = document.getElementById("ProductType");

var ProductImg1 = document.getElementById("ProductImg1");

var txtName1 = document.getElementById("txtName1");
var txtBrand1 = document.getElementById("txtBrand1");
var txtColor1 = document.getElementById("txtColor1");
var txtPrice1 = document.getElementById("txtPrice1");


var ProductImg2 = document.getElementById("ProductImg2");

var txtName2 = document.getElementById("txtName2");
var txtBrand2 = document.getElementById("txtBrand2");
var txtColor2 = document.getElementById("txtColor2");
var txtPrice2 = document.getElementById("txtPrice2");


var ProductImg3 = document.getElementById("ProductImg3");

var txtName3 = document.getElementById("txtName3");
var txtBrand3 = document.getElementById("txtBrand3");
var txtColor3 = document.getElementById("txtColor3");
var txtPrice3 = document.getElementById("txtPrice3");


var ProductImg4 = document.getElementById("ProductImg4");

var txtName4 = document.getElementById("txtName4");
var txtBrand4 = document.getElementById("txtBrand4");
var txtColor4 = document.getElementById("txtColor4");
var txtPrice4 = document.getElementById("txtPrice4");


function MenWatches(){

    ProductTitle.innerHTML = "Watches"

    var OpenProduct1 = document.getElementById("img1");

    OpenProduct1.onclick = function() {
        ProductModal.style.display = "block";
        main.style.opacity = "0.5";
        main.style.position = "fixed";
    }

    ProductImg1.src="../Images/ProductImages/Men/Watches/MenWatch1.jpeg"
    txtName1.innerHTML="Name:"
    txtBrand1.innerHTML="Brand:"
    txtColor1.innerHTML="Color:"
    txtPrice1.innerHTML="Price:"

    ProductImg2.src="../Images/ProductImages/Men/Watches/MenWatch2.jpeg"
    txtName2.innerHTML="Name:"
    txtBrand2.innerHTML="Brand:"
    txtColor2.innerHTML="Color:"
    txtPrice2.innerHTML="Price:"

    ProductImg3.src="../Images/ProductImages/Men/Watches/MenWatch3.jpg"
    txtName3.innerHTML="Name:"
    txtBrand3.innerHTML="Brand:"
    txtColor3.innerHTML="Color:"
    txtPrice3.innerHTML="Price:"

    ProductImg4.src="../Images/ProductImages/Men/Watches/MenWatch4.jpeg"
    txtName4.innerHTML="Name:"
    txtBrand4.innerHTML="Brand:"
    txtColor4.innerHTML="Color:"
    txtPrice4.innerHTML="Price:"

}

function MenBracelets(){

    ProductTitle.innerHTML = "Bracelets"

    var OpenProduct2 = document.getElementById("img2");

    OpenProduct2.onclick = function() {
        ProductModal.style.display = "block";
        main.style.opacity = "0.5";
        main.style.position = "fixed";
    }

    ProductImg1.src="../Images/ProductImages/Men/Bracelets/MenBracelet1.png"
    txtName1.innerHTML="Name:"
    txtBrand1.innerHTML="Brand:"
    txtColor1.innerHTML="Color:"
    txtPrice1.innerHTML="Price:"

    ProductImg2.src="../Images/ProductImages/Men/Bracelets/MenBracelet2.jpg"
    txtName2.innerHTML="Name:"
    txtBrand2.innerHTML="Brand:"
    txtColor2.innerHTML="Color:"
    txtPrice2.innerHTML="Price:"

    ProductImg3.src="../Images/ProductImages/Men/Bracelets/MenBracelet3.jpg"
    txtName3.innerHTML="Name:"
    txtBrand3.innerHTML="Brand:"
    txtColor3.innerHTML="Color:"
    txtPrice3.innerHTML="Price:"

    ProductImg4.src="../Images/ProductImages/Men/Bracelets/MenBracelet4.jpg"
    txtName4.innerHTML="Name:"
    txtBrand4.innerHTML="Brand:"
    txtColor4.innerHTML="Color:"
    txtPrice4.innerHTML="Price:"

}
