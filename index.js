let h1 = document.getElementsByClassName("header")[0];
let inp1 = document.getElementsByClassName("inp1");
let inp2 = document.getElementsByClassName("inp2");
let error = document.querySelector("#error");
let error2 = document.querySelector("#error2");
let val;
let val2;
function ctaClick(event) {
  console.log(event);
  console.log(inp1, inp2);
  let newCount = parseInt(val) + parseInt(val2);
  h1.innerHTML = newCount;
}
function view(event) {
  let newCount = parseInt(val) - parseInt(val2);
  h1.innerHTML = newCount;
  console.log(newCount);
}
function vew(event) {
  let newCount = parseInt(val) * parseInt(val2);
  h1.innerHTML = newCount;
  console.log(newCount);
}

function change(event) {
  if (event.target.value <= 0) {
    error.innerHTML = "Please Make sure the value is greater than 0";
    inp1[0].classList.add("cta-clicked");
  } else {
    error.innerHTML = "";
    val = event.target.value;
  }
}

function change2(event) {
  if (event.target.value <= 0) {
    error2.innerHTML = "Please make sure that the value is greater than 0";
  } else {
    error2.innerHTML = "";
    val2 = event.target.value;
  }
}
