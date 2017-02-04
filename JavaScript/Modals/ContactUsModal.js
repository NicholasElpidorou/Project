/**
 * Created by NicholasElpidorou on 24/01/2017.
 */

//CONTACT US MODAL

// Get the AboutUsModal
var ContactUsModal = document.getElementById("ContactUsModal");

// Get the button that opens the AboutUsModal
var ContactUsLink = document.getElementById("ContactUs");

// Get the <span> element that closes the AboutUsModal
var span = document.getElementsByClassName("close")[0];

//get the<button> element that user submits his form
var btnSubmit = document.getElementById("contact-submit");

//get textFields element so user does not let them blank
var txtName = document.getElementById("Name");
var txtEmail = document.getElementById("Email");
var txtDescription = document.getElementById("Description");

// When the user clicks the button, open the AboutUsModal
ContactUsLink.onclick = function() {
    ContactUsModal.style.display = "block";
}

// When the user clicks on <span> (x), close the AboutUsModal
span.onclick = function() {
    ContactUsModal.style.display = "none";
}

// When the user clicks anywhere outside of the AboutUsModal, close it
window.onclick = function(event) {
    if (event.target == ContactUsModal) {
        ContactUsModal.style.display = "none";
    }
}

// txtEmail.addEventListener("keyup",function (event) {
//     if (txtEmail.validity.typeMismatch){
//         txtEmail.setCustomValidity("Please enter an email address!");
//     }else {
//         txtEmail.setCustomValidity("");
//     }
// });



//When the user clicks submit button
btnSubmit.onclick = function () {
    // AboutUsModal.reset();
    ContactUsModal.style.display = "none";
    SnackBar();
}

/**
 * Created by NicholasElpidorou on 24/01/2017.
 */


//
// window.onclick = function9even

//

