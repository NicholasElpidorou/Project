

var image1 = new Image()
image1.src="Images/SliderImages/image1.jpg";
var image2 = new Image()
image2.src="Images/SliderImages/image2.jpeg";
var image3 = new Image()
image3.src="Images/SliderImages/image3.jpg";
var image4 = new Image()
image4.src="Images/SliderImages/image4.jpg";



var step = 1
function slideIt(){
    document.images.slider.src=eval ("image"+step+".src")

    if (step <4)
        step++
    else
        step = 1
    setTimeout("slideIt()",3000)



}
 slideIt()


