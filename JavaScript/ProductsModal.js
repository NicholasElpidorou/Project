/**
 * Created by NicholasElpidorou on 24/01/2017.
 */

//CONTACT US MODAL

// Get the modal
var modal = document.getElementById("ProductModal");

// Get the button that opens the modal
var btn = document.getElementById("img1");

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


