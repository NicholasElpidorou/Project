/**
 * Created by NicholasElpidorou on 22/01/2017.
 */


var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");




function ShowMen() {
    document.getElementById("products").style.display='block';

    document.getElementById("img1").src = "../Images/ProductImages/Men/MenWatch.jpeg";
    document.getElementById("text1").innerHTML = 'Watches';

    document.getElementById("img2").src = "../Images/ProductImages/Men/MenBracelet.jpg";
    document.getElementById("text2").innerHTML = 'Bracelets';

    document.getElementById("MenLink").style.backgroundColor = 'black';
    document.getElementById("WomenLink").style.backgroundColor = 'transparent';
    document.getElementById("AccessoriesLink").style.backgroundColor = 'transparent';

    document.getElementById("link1").onclick = MenWatches();
    document.getElementById("link2").onclick = MenBracelets();

    link1.id = "watches";
    link2.id = "bracelets";

}


    document.getElementById("link1").onclick= WomenNecklaces();
    document.getElementById("link2").onclick= WomenRings();


function ShowWomen() {
    document.getElementById("products").style.display='block';

    document.getElementById("img1").src = "../Images/ProductImages/Women/WomanNecklace.jpeg";
    document.getElementById("text1").innerHTML = 'Necklace'

    document.getElementById("img2").src = "../Images/ProductImages/Women/WomanRing.jpg";
    document.getElementById("text2").innerHTML = 'Rings'

    document.getElementById("MenLink").style.backgroundColor = 'transparent';
    document.getElementById("WomenLink").style.backgroundColor = 'black';
    document.getElementById("AccessoriesLink").style.backgroundColor = 'transparent';

    link1.id = "necklaces";
    link2.id = "rings";
}

function ShowAccessories() {

    document.getElementById("link1").onclick= AccessoriesKeyRings();
    document.getElementById("link2").onclick= AccessoriesZippoes();

    document.getElementById("products").style.display='block';

    document.getElementById("img1").src = "../Images/ProductImages/Accessories/KeyRing.jpg";
    document.getElementById("text1").innerHTML = 'Key Rings';

    document.getElementById("img2").src = "../Images/ProductImages/Accessories/Zippo.jpg";
    document.getElementById("text2").innerHTML = 'Zippo';

    document.getElementById("MenLink").style.backgroundColor = 'transparent';
    document.getElementById("WomenLink").style.backgroundColor = 'transparent';
    document.getElementById("AccessoriesLink").style.backgroundColor = 'black';

    link1.id = "keyRings";
    link2.id = "zippoes";
}