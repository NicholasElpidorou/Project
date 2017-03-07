/**
 * Created by NicholasElpidorou on 25/01/2017.
 */

//ABOUT US MODAL
var main = document.getElementById("main");

// Get the AboutUsModal
var AboutUsModal = document.getElementById("AboutUsModal");

// Get the button that opens the AboutUsModal
var OpenAboutUs = document.getElementById("AboutUs");

// Get the <span> element that closes the AboutUsModal
var CloseAboutUs = document.getElementById("AboutUsClose");

// When the user clicks the button, open the AboutUsModal
OpenAboutUs.onclick = function() {
    AboutUsModal.style.display = "block";
    main.style.opacity = "0.5";
    main.style.position = "fixed";
}

// When the user clicks on <span> (x), close the AboutUsModal
CloseAboutUs.onclick = function() {
    AboutUsModal.style.display = "none";
    main.style.position = "relative";
    main.style.opacity = "1";
}
