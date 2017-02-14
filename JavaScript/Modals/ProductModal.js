/**
 * Created by NicholasElpidorou on 24/01/2017.
 */

//CONTACT US MODAL

var main = document.getElementById("main");


// Get the AboutUsModal
var ProductModal = document.getElementById("ProductModal");

// Get the button that opens the AboutUsModal
var OpenProduct1 = document.getElementById("img1");
var OpenProduct2 = document.getElementById("img2");


// Get the <span> element that closes the AboutUsModal
var CloseProduct = document.getElementById("ProductsClose");



// When the user clicks the button, open the AboutUsModal

OpenProduct1.onclick = function() {
    ProductModal.style.display = "block";
    main.style.opacity = "0.5";
    main.style.position = "fixed";



}

OpenProduct2.onclick = function () {
    main.style.opacity = "0.5";
    ProductModal.style.display = "block";
    main.style.position = "fixed";
    ProductModal.style.opacity = "1";

}

// When the user clicks on <span> (x), close the AboutUsModal
CloseProduct.onclick = function() {
    ProductModal.style.display = "none";
    main.style.position = "relative";
    main.style.opacity = "1";


}

// When the user clicks anywhere outside of the AboutUsModal, close it
// window.onclick = function(event) {
//     if (event.target == ProductModal) {
//         ProductModal.style.display = "none";
//         main.style.position = "relative";
//         main.style.opacity = "1";
//     }
// }