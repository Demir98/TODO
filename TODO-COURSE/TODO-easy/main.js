input = document.getElementById("input");
div = document.getElementById("div");
button = document.getElementById("button");

button.addEventListener("click", (e) => {
  el = document.createElement("h3");
  el.innerText = input.value;
  div.appendChild(el);
  input.value = "";
});
