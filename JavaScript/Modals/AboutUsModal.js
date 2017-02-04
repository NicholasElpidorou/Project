/**
 * Created by NicholasElpidorou on 25/01/2017.
 */

// //ABOUT US MODAL
//
// Get the AboutUsModal
var AboutUsModal = document.getElementById("AboutUsModal");

// Get the button that opens the AboutUsModal
var LinkAboutUs = document.getElementById("AboutUs");

// Get the <span> element that closes the AboutUsModal
var span = document.getElementsByClassName("close")[0];
//
// //get the<button> element that user submits his form
// var btnSubmit = document.getElementById("contact-submit");
//
// //get textFields element so user does not let them blank
// var txtName = document.getElementById("Name");
// var txtEmail = document.getElementById("Email");
// var txtDescription = document.getElementById("Description");


// When the user clicks the button, open the AboutUsModal
LinkAboutUs.onclick = function() {
    AboutUsModal.style.display = "block";
}

// When the user clicks on <span> (x), close the AboutUsModal
span.onclick = function() {
    AboutUsModal.style.display = "none";
}

// When the user clicks anywhere outside of the AboutUsModal, close it
window.onclick = function(event) {
    if (event.target == AboutUsModal) {
        AboutUsModal.style.display = "none";
    }
}
