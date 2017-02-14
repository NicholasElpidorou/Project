/**
 * Created by NicholasElpidorou on 22/01/2017.
 */

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
}

function ShowWomen() {

    document.getElementById("link1").onclick= WomenNecklaces();
    document.getElementById("link2").onclick= WomenRings();

    document.getElementById("products").style.display='block';

    document.getElementById("img1").src = "../Images/ProductImages/Women/WomanNecklace.jpeg"
    // document.getElementById("link1").href = "ProductPages/Women/Necklaces.html"
    document.getElementById("text1").innerHTML = 'Necklace'

    document.getElementById("img2").src = "../Images/ProductImages/Women/WomanRing.jpg"
    // document.getElementById("link2").href = "ProductPages/Women/Rings.html"
    document.getElementById("text2").innerHTML = 'Rings'

    document.getElementById("MenLink").style.backgroundColor = 'transparent';
    document.getElementById("WomenLink").style.backgroundColor = 'black';
    document.getElementById("AccessoriesLink").style.backgroundColor = 'transparent';

    // window.open(link1.href,'_blank');
    // // window.open(link2.href,'_blank');
    //
    // link.innerHTML = "facebook"
    // link1.setAttribute('href',"http://facebook.com");
    // return false;
}

function ShowAccessories() {

    document.getElementById("link1").onclick= AccessoriesKeyRings();
    document.getElementById("link2").onclick= AccessoriesZippoes();

    document.getElementById("products").style.display='block';

    document.getElementById("img1").src = "../Images/ProductImages/Accessories/KeyRing.jpg"
    // document.getElementById("link1").href = "ProductPages/Accessories/KeyRings.html"
    document.getElementById("text1").innerHTML = 'Key Rings'

    document.getElementById("img2").src = "../Images/ProductImages/Accessories/Zippo.jpg"
    // document.getElementById("link2").href = "ProductPages/Accessories/Zippos.html"
    document.getElementById("text2").innerHTML = 'Zippo'

    document.getElementById("MenLink").style.backgroundColor = 'transparent';
    document.getElementById("WomenLink").style.backgroundColor = 'transparent';
    document.getElementById("AccessoriesLink").style.backgroundColor = 'black';
}