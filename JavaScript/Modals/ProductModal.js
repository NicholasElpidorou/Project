/**
 * Created by NicholasElpidorou on 24/01/2017.
 */

//CONTACT US MODAL

// Get the AboutUsModal
var ProductModal = document.getElementById("ProductModal");

// Get the button that opens the AboutUsModal
var ImageButton = document.getElementById("img1");
var ImageButton2 = document.getElementById("img2");


// Get the <span> element that closes the AboutUsModal
var span = document.getElementsByClassName("close")[0];



// When the user clicks the button, open the AboutUsModal

ImageButton.onclick = function() {
    ProductModal.style.display = "block";
}

ImageButton2.onclick = function () {
    ProductModal.style.display = "block";
}

// When the user clicks on <span> (x), close the AboutUsModal
span.onclick = function() {
    ProductModal.style.display = "none";
}

// When the user clicks anywhere outside of the AboutUsModal, close it
window.onclick = function(event) {
    if (event.target == ProductModal) {
        ProductModal.style.display = "none";
    }
}