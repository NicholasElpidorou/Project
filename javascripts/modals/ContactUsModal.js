/**
 * Created by NicholasElpidorou on 24/01/2017.
 */

//CONTACT US MODAL
var main = document.getElementById("main");

// Get the ContactUsModel
var ContactUsModal = document.getElementById("ContactUsModal");

// Get the button that opens the ContactUsModel
var OpenContactUs = document.getElementById("ContactUs");

// Get the <span> element that closes the ContactUsModel
var CloseContactUs = document.getElementById("ContactUsClose");

//get the<button> element that user submits his form
var btnSubmit = document.getElementById("contact-submit");

//get textFields element so user does not let them blank
var txtName = document.getElementById("UserName");
var txtEmail = document.getElementById("UserEmail");
var txtDescription = document.getElementById("UserDescription");

// When the user clicks the button, open the ContactUsModel
OpenContactUs.onclick = function() {
    ContactUsModal.style.display = "block";
    main.style.opacity = "0.5";
    main.style.position = "fixed";
}

// When the user clicks on <span> (x), close the ContactUsModel
CloseContactUs.onclick = function() {
    ContactUsModal.style.display = "none";
    main.style.position = "relative";
    main.style.opacity = "1";

    event.preventDefault();
    return false;
}



//When the user clicks submit button
btnSubmit.onclick = function () {

    window.location.hash ="container";

    // ContactUsModal.style.display = "none";
    // main.style.position = "relative";
    // main.style.opacity = "1";
    //     SnackBar();
        // ContactUsModal.style.display="none";
        // main.style.position="relative";
        // main.style.opacity="1";
    }



// }

// function validateForm(){
//     if(txtName ==" "){
//         alert("Name must be filled out");
//         return false;
//     }
// }

// window.onclick = function(event) {
//     if (event.target == ContactUsModal) {
//         ContactUsModal.style.display = "none";
//         main.style.position = "relative";
//         main.style.opacity = "1";
//     }
// }