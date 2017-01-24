/**
 * Created by NicholasElpidorou on 24/01/2017.
 */

//CONTACT US MODAL

// Get the modal
var modal = document.getElementById("ContactUsModal");

// Get the button that opens the modal
var btn = document.getElementById("ContactUs");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//get the<button> element that user submits his form
var btnSubmit = document.getElementById("contact-submit");

//get textFields element so user does not let them blank
var txtName = document.getElementById("Name");
var txtEmail = document.getElementById("Email");
var txtDescription = document.getElementById("Description");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
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
    // modal.reset();
    modal.style.display = "none";
    SnackBar();
}

/**
 * Created by NicholasElpidorou on 24/01/2017.
 */


//
// window.onclick = function9even

//
// //ABOUT US MODAL
//
// Get the modal
var modal2 = document.getElementById("AboutUsModal");

// Get the button that opens the modal
var btn2 = document.getElementById("AboutUs");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[0];
//
// //get the<button> element that user submits his form
// var btnSubmit = document.getElementById("contact-submit");
//
// //get textFields element so user does not let them blank
// var txtName = document.getElementById("Name");
// var txtEmail = document.getElementById("Email");
// var txtDescription = document.getElementById("Description");


// When the user clicks the button, open the modal
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

