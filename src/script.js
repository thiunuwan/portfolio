// const text = "Thiunuwan";
// const span = document.getElementById("typewriter");
// let index = 0;

// function type() {
//   span.textContent += text.charAt(index);
//   index++;
//   if (index >= text.length) {
//     index = 0;
//     span.textContent = "";
//   }
//   setTimeout(type, 500);
// }

// type();

var msgArray= ["Thiunuwan"];
var textPosition =-1;
var speed =125;

typewriter=() =>{
    document.querySelector("#message").
    innerHTML=msgArray[0].substring(0,textPosition)+"<span></span>";

    if(textPosition++ != msgArray[0].length)
    setTimeout(typewriter,speed);
}


window.addEventListener("load",typewriter);


