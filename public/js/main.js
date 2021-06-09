let fakes = document.querySelectorAll("#fakePainting")
let real = document.querySelectorAll("#realPainting")

// function realOrFake() {
// if(fakes){
// alert("it's  a fake")
// }else{
//   alert("Buy quick, it's real!")
// }
// }

for (let i in fakes) {
  fakes[i].onclick = function() {
    alert("this is fake!!");
  };
}

for (let i in real) {
  real[i].onclick = function() {
    alert("But quick, this is the real deal!!!");
  };
}

// var comment = document.getElementsByClassName("button");

// function showComment() {
//   var place = document.getElementById('textfield');
//   var commentBox = document.createElement('textarea');
//   place.appendChild(commentBox);
// }

// for (var i in comment) {
//   comment[i].onclick = function() {
//     showComment();
//   };
// }

// let elements = document.getElementsByClassName('');
// for(var i=0; i<elements.length; i++) { 
//   realOrFake();
// }