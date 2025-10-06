const button = document.createElement("button");
button.innerText = "click here";
document.body.appendChild(button);
const div = document.createElement("div");
const par = document.createElement("p");
par.innerHTML = "Here is the text in paragraph";
document.body.appendChild(div);
div.appendChild(par);
