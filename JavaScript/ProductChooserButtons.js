/**
 * Created by NicholasElpidorou on 22/01/2017.
 */


// $(document).ready(function(){
//     $("SelectionLink").click(function(){
//         $("#products").fadeIn();
//
//     });
// });

function ShowMen() {

    document.getElementById("products").style.accelerator
    document.getElementById("products").style.display='block';

    document.getElementById("img1").src = "../Images/ProductImages/Men/MenWatch.jpeg"
    document.getElementById("text1").innerHTML = 'Watches'

    document.getElementById("img2").src = "../Images/ProductImages/Men/MenRing.jpg"
    document.getElementById("text2").innerHTML = 'Ring'

    document.getElementById("img3").src = "../Images/ProductImages/Men/MenBracelet.jpg"
    document.getElementById("text3").innerHTML = 'Bracelets'

    document.getElementById("img4").src = "../Images/ProductImages/Men/MenWallet.jpg"
    document.getElementById("text4").innerHTML = 'Wallet'

    document.getElementById("img5").src = "../Images/ProductImages/Men/MenEarings.jpg"
    document.getElementById("text5").innerHTML = 'Earings'

    document.getElementById("img6").src = "../Images/ProductImages/Men/MenNecklaces.jpg"
    document.getElementById("text6").innerHTML = 'Necklaces'

    document.getElementById("BtnMen").disabled = true
    document.getElementById("BtnWomen").disabled = false
    document.getElementById("BtnAccessories").disabled = false





}

function ShowWomen() {
    document.getElementById("products").style.display='block';

    document.getElementById("img1").src = "../Images/ProductImages/Women/WomanBracelet.jpg"
    document.getElementById("text1").innerHTML = 'Bracelets'

    document.getElementById("img2").src = "../Images/ProductImages/Women/WomanEaring.jpg"
    document.getElementById("text2").innerHTML = 'Earings'

    document.getElementById("img3").src = "../Images/ProductImages/Women/WomanNecklace.jpeg"
    document.getElementById("text3").innerHTML = 'Necklaces'

    document.getElementById("img4").src = "../Images/ProductImages/Women/WomanRing.jpg"
    document.getElementById("text4").innerHTML = 'Rings'

    document.getElementById("img5").src ="../Images/ProductImages/Women/WomanWatch.jpg"
    document.getElementById("text5").innerHTML = 'Watches'

    document.getElementById("img6").src = "../Images/ProductImages/Women/Cuffs.jpg"
    document.getElementById("text6").innerHTML = 'Cuffs'

    document.getElementById("BtnMen").disabled = false
    document.getElementById("BtnWomen").disabled = true
    document.getElementById("BtnAccessories").disabled = false


}

function ShowAccessories() {
    document.getElementById("products").style.display='block';

    document.getElementById("img1").src = "../Images/ProductImages/Accessories/KeyRing.jpg"
    document.getElementById("text1").innerHTML = 'Key Rings'

    document.getElementById("img2").src = "../Images/ProductImages/Accessories/Zippo.jpg"
    document.getElementById("text2").innerHTML = 'Zippo'

    document.getElementById("img3").src = "../Images/ProductImages/Accessories/JeweleryBox.jpg"
    document.getElementById("text3").innerHTML = 'Jewelery boxes'

    document.getElementById("img4").src = "../Images/ProductImages/Accessories/Decorations.jpg"
    document.getElementById("text4").innerHTML = 'Decorations'

    document.getElementById("img5").src = "../Images/ProductImages/Accessories/Pen.jpg"
    document.getElementById("text5").innerHTML = 'Pens'

    document.getElementById("img6").src = "../Images/ProductImages/Accessories/PhoneCase.jpg"
    document.getElementById("text6").innerHTML = 'Phone cases'

    document.getElementById("BtnMen").disabled = false
    document.getElementById("BtnWomen").disabled = false
    document.getElementById("BtnAccessories").disabled = true


}