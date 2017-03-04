/**
 * Created by NicholasElpidorou on 22/01/2017.
 */


var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");




function ShowMen() {
    document.getElementById("products").style.display='block';

    document.getElementById("img1").src = "images/product_images/men/men_watch.jpeg";
    document.getElementById("text1").innerHTML = 'watches';

    document.getElementById("img2").src = "images/product_images/men/men_bracelet.jpg";
    document.getElementById("text2").innerHTML = 'bracelets';

    document.getElementById("MenLink").style.backgroundColor = 'black';
    document.getElementById("WomenLink").style.backgroundColor = 'transparent';
    document.getElementById("AccessoriesLink").style.backgroundColor = 'transparent';


    link1.id = "watches";
    link2.id = "bracelets";

}




function ShowWomen() {
    document.getElementById("products").style.display='block';

    document.getElementById("img1").src = "images/product_images/women/woman_necklace.jpeg";
    document.getElementById("text1").innerHTML = 'Necklace'

    document.getElementById("img2").src = "images/product_images/women/woman_ring.jpg";
    document.getElementById("text2").innerHTML = 'rings'

    document.getElementById("MenLink").style.backgroundColor = 'transparent';
    document.getElementById("WomenLink").style.backgroundColor = 'black';
    document.getElementById("AccessoriesLink").style.backgroundColor = 'transparent';

    link1.id = "necklaces";
    link2.id = "rings";
}

function ShowAccessories() {
    document.getElementById("products").style.display='block';

    document.getElementById("img1").src = "images/product_images/accessories/KeyRing.jpg";
    document.getElementById("text1").innerHTML = 'Key rings';

    document.getElementById("img2").src = "images/product_images/accessories/Zippo.jpg";
    document.getElementById("text2").innerHTML = 'Zippo';

    document.getElementById("MenLink").style.backgroundColor = 'transparent';
    document.getElementById("WomenLink").style.backgroundColor = 'transparent';
    document.getElementById("AccessoriesLink").style.backgroundColor = 'black';

    link1.id = "keyRings";
    link2.id = "zippoes";
}