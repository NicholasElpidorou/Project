/**
 * Created by NicholasElpidorou on 24/01/2017.
 */

//Product modal
var main = document.getElementById("main");

// Get the ProductModal
var ProductModal = document.getElementById("ProductModal");

var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");

// Get the <span> element that closes the ProductModal
var CloseProduct = document.getElementById("ProductsClose");

// Get the button that opens the ProductModal
var OpenProduct1 = document.getElementById("img1");
var OpenProduct2 = document.getElementById("img2");

link1.onclick = function() {
    ProductModal.style.display = "block";
    main.style.opacity = "0.5";
    main.style.position = "fixed";
    ProductModal.style.opacity = "1";

    if(link1.id == "watches"){
        MenWatches();
    }else if(link1.id == "necklaces"){
        WomenNecklaces();
    }else if(link1.id == "keyRings"){
        AccessoriesKeyRings();
    }
}

link2.onclick = function () {
    main.style.opacity = "0.5";
    ProductModal.style.display = "block";
    main.style.position = "fixed";
    ProductModal.style.opacity = "1";

    if(link2.id =="bracelets"){
        MenBracelets();
    }else if(link2.id =="rings"){
        WomenRings();
    }else if(link2.id == "zippoes"){
        AccessoriesZippoes();
    }
}

// When the user clicks on <span> (x), close the AboutUsModal
CloseProduct.onclick = function() {
    ProductModal.style.display = "none";
    main.style.position = "relative";
    main.style.opacity = "1";
}
