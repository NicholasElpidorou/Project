/**
 * Created by NicholasElpidorou on 12/12/2016.
 */

var btns = "";
var letters = "123";

var letterArray = letters.split("");

for (var i = 0; i <26; i++){
    var letter = letterArray.shift();

    btns +='<button name="letter" type="button"class="btn btn-primary btn-default" onclick="">'+letter+'</button>';
}



// function getCoursesByInitial(initial: String){
//
//     //sql connection
//     //sql query
//
//
// }
//
// getCoursesByInitial(letter)