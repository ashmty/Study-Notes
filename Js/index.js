

// document.querySelector('.container').addEventListener('mousemove',colorChanger);
// function colorChanger(e){
//   document.body.style.backgroundColor= `rgb(${e.offsetY},${e.offsetX},0)`;
// }




document.querySelector('.container').addEventListener('mousemove',colorChanger);
function colorChanger(e){
  document.getElementById('FSD').style.color= `rgb(${e.offsetY},${e.offsetX},0)`;
}

