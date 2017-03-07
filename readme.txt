CTEC3905-2nd assignment
Author: p14138568
Project: Online Jewellery shop

Overview of the website itself
The website has three categories. Men, Women and Accessories. A user when browsing the
website will click on one of the three categories he is interested and then will click
on a specific product type he wants. Once he clicks on the product type a modal window
pops with all the products and description that the jewellery shop has to offer. A map
shows the location of the jewellery shop with a description on the right side of the map.
At the bottom left of the page there are two links contact us and about us. Clicking those
two links will pop out modals. The contact us modal lets the user fill in some details of
himself and sends an email to us about something he needs. The about us modal is just
information about us to the user.

How was the website implemented

The whole website was implemented in a single page with pop up modals on the screen.

Once loading the page an image appears with a welcome message and then the actual 
website appears. This has been done with the help of javascript. See /javascripts/loader.js and was styled using loader_style.css. The image on the loading screen is not
responsive but i left it like that as i did not mind if it was cut a bit in smaller sizes.

The slide show on the top of the page was implemented using javascript to change
the sliders each time. See /javascripts/slider.js

Moving further in the middle of the website there are the categories provided. Once you
click on one of the categories a new div appears at the bottom with the categories products. when clicking another category the products change. This has been done with
the help of javascript, see javascripts/category_chooser.js. This javascript also changes
the id of the images so when a user clicks on an image the corresponding modal should appear. for example when a  user clicks MEN and then on bracelets, the id of the image is
checked and the corresponding data from the product_data.js loads on the product modal.

Validations
The index.html and all the styles have been validated
the html file was validated from: https://validator.w3.org/ and was passed successfully.
I wanted to add the logo of the validation but my website has to be public in order for me to get the logo

I also validated the CSS files but I got a warning Property-webkit-animation name is an unknown vendor extension. After researching about it i found out that it is just an error that does not harm the effectiveness of the website and could not be removed unless I did not use the code. 

No errors were tracked in the console

Things I wanted to do
For adding products inside the website I tried several times to populate the website with a son file. Unfortunately I have not succeeded because I use a lot of javascript to change
properties for the website and it was a bit difficult to use. I used javascript rather than implementing raw html code for adding products and if i want to add a product or edit it I change the javascript file rather than changing the HTML code. 
Code for trying to use Json files can be seen in the branches: 
https://github.com/NicholasElpidorou/Project/tree/JsonFiles
https://github.com/NicholasElpidorou/Project/tree/Json2

References of code
for the loader : http://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_loader5
for the slide show: http://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow
for the modals: 


 


