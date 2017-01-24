/**
 * Created by NicholasElpidorou on 24/01/2017.
 */

function SnackBar() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

