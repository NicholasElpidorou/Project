/**
 * Created by NicholasElpidorou on 05/02/2017.
 */

var change;

function showPage(){
    document.getElementById("body").style.backgroundImage = "url(../Images/Other/4.png)";
    document.getElementById("loader").style.display = "none";
    document.getElementById("container").style.display = "block";

}

function loader(){
    change = setTimeout(showPage,2500);
}