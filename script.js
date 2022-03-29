function check(color) {
    if (color === "black") {
        document.getElementById('Shirt_image').src = 'images/black.png'
    }
    if (color === "purple") {
        document.getElementById('Shirt_image').src = 'images/purple.png'
    }
    if (color === "green") {
        document.getElementById('Shirt_image').src = 'images/green.png'
    }
    if (color === "yellow") {
        document.getElementById('Shirt_image').src = 'images/yellow.png'
    }
    if (color === "gray") {
        document.getElementById('Shirt_image').src = 'images/gray.png'
    }
}
function text(text){
    var x = document.getElementById('Text_Text').value;
    document.getElementById("text_Img").innerHTML = x;
}
// function bold(){
//     var x = document.getElementById('Text_Text').value;
//     let result = document.getElementById("text_Img").innerHTML = x;
//     document.getElementById("text_Img").innerHTML = result.bold();
// }
function bold(){
    var x = document.getElementById('Text_Text').value;
    document.getElementById("text_Img").style.fontWeight ="bold";
}

function unbold(){
    var x = document.getElementById('Text_Text').value;
    document.getElementById("text_Img").style.fontWeight ="normal";
}
function italic() {
    var x = document.getElementById('Text_Text').value;
    document.getElementById("text_Img").style.fontStyle ="italic";
}
function unitalic() {
    var x = document.getElementById('Text_Text').value;
    document.getElementById("text_Img").style.fontStyle ="normal";
}
function alignleft(){
    var x = document.getElementById('Text_Text').value;
    document.getElementById("text_Img").style.textAlign ="left";
}
function aligncenter(){
    var x = document.getElementById('Text_Text').value;
    document.getElementById("text_Img").style.textAlign ="center";
}
function alignright(){
    var x = document.getElementById('Text_Text').value;
    document.getElementById("text_Img").style.textAlign ="right";
}
function color(){
   var colors= document.getElementById('favcolor').value;
//    console.log(colors);
   var x = document.getElementById('Text_Text').value;
   document.getElementById("text_Img").style.color =colors;
}
function sizeup() {
    var font= document.getElementById('fontup').value;
    console.log(font);
  

}