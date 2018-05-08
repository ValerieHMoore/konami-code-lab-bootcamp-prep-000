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
  let index = 0;
  function onKeyDownHandler(e) {
  const key = e.key;
   if (key === alphabet[index]) {
    index++;
     if (index === alphabet.length) {
      alert("Hurray!");
       index = 0;
    }
  } else {
    index = 0;
  }
}
  function alert(codes){
  if (codes.length === 10) {
    alert("Congrats!")
  } else {
  document.body.addEventListener('keydown',alert)
  }
  }
}