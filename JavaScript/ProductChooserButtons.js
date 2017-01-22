/**
 * Created by NicholasElpidorou on 22/01/2017.
 */


function ShowMen() {
    document.getElementById("products").style.display='block';

    document.getElementById("img1").src = "../Images/ProductImages/Men/MenBracelet.jpg"
    document.getElementById("text1").innerHTML = 'Bracelet'

    document.getElementById("img2").src = "../Images/ProductImages/Men/MenRing.jpg"
    document.getElementById("text2").innerHTML = 'Ring'

    document.getElementById("img3").src = "../Images/ProductImages/Men/MenWatch.jpeg"
    document.getElementById("text3").innerHTML = 'Watch'

    document.getElementById("img4").src = "../Images/ProductImages/Men/MenWallet.jpg"
    document.getElementById("text4").innerHTML = 'Wallet'

    document.getElementById("img5").src = "../Images/ProductImages/Men/MenWallet.jpg"
    document.getElementById("text5").innerHTML = 'Wallet'

    document.getElementById("img6").src = "../Images/ProductImages/Men/MenWallet.jpg"
    document.getElementById("text6").innerHTML = 'Wallet'

    document.getElementById("BtnMen").disabled = true
    document.getElementById("BtnWomen").disabled = false
    document.getElementById("BtnAccessories").disabled = false




}

function ShowWomen() {
    document.getElementById("products").style.display='block';

    document.getElementById("img1").src = "../Images/ProductImages/Women/WomanBracelet.jpg"
    document.getElementById("text1").innerHTML = 'Bracelet'

    document.getElementById("img2").src = "../Images/ProductImages/Women/WomanEaring.jpg"
    document.getElementById("text2").innerHTML = 'Ring'

    document.getElementById("img3").src = "../Images/ProductImages/Women/WomanNecklace.jpeg"
    document.getElementById("text3").innerHTML = 'Watch'

    document.getElementById("img4").src = "../Images/ProductImages/Women/WomanRing.jpg"
    document.getElementById("text4").innerHTML = 'Wallet'

    document.getElementById("img5").src = "../Images/ProductImages/Women/WomanWatch.jpg"
    document.getElementById("text5").innerHTML = 'Wallet'

    document.getElementById("img6").src = "../Images/ProductImages/Women/WomanWatch.jpg"
    document.getElementById("text6").innerHTML = 'Wallet'

    document.getElementById("BtnMen").disabled = false
    document.getElementById("BtnWomen").disabled = true
    document.getElementById("BtnAccessories").disabled = false


}

function ShowAccessories() {
    document.getElementById("products").style.display='block';

    document.getElementById("img1").src = "../Images/ProductImages/Accessories/KeyRing.jpg"
    document.getElementById("text1").innerHTML = 'Bracelet'

    document.getElementById("img2").src = "../Images/ProductImages/Accessories/Zippo.jpg"
    document.getElementById("text2").innerHTML = 'Ring'

    document.getElementById("img3").src = "../Images/ProductImages/Accessories/Zippo.jpg"
    document.getElementById("text3").innerHTML = 'Watch'

    document.getElementById("img4").src = "../Images/ProductImages/Accessories/Zippo.jpg"
    document.getElementById("text4").innerHTML = 'Wallet'

    document.getElementById("img5").src = "../Images/ProductImages/Accessories/Zippo.jpg"
    document.getElementById("text5").innerHTML = 'Wallet'

    document.getElementById("img6").src = "../Images/ProductImages/Accessories/Zippo.jpg"
    document.getElementById("text6").innerHTML = 'Wallet'

    document.getElementById("BtnMen").disabled = false
    document.getElementById("BtnWomen").disabled = false
    document.getElementById("BtnAccessories").disabled = true


}