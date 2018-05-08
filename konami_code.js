const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
 function helperFunction(element) {
    if (element.children.length > 0) {
    return helperFunction(element.children[0])
  } else {
    return element
  }
}
 return init
  function alert(codes){
  if (codes.length === 10) {
    return "Congrats!"
  } else {
  document.body.addEventListener('keydown',alert) {
  } 
}