/**
 * Created by NicholasElpidorou on 05/02/2017.
 */

var change;

function showPage() {

    document.getElementById("body").style.backgroundImage = "url(images/other/mainpage_background.png)";
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "block";

}

function loader() {
    change = setTimeout(showPage, 2500);
}