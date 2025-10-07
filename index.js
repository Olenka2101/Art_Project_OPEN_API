async function getApiTest() {
  try {
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks/129884"
    );
    if (!response.ok) {
      throw new Error("Request failed, please try again later!");
    }
    const result = await response.json();
    const title = document.getElementById("title");
    title.innerHTML = result.data.title;
    const description = document.getElementById("description");
    description.innerHTML = result.data.description;
  } catch (error) {
    console.error("Request failed:", error);
  }
}
getApiTest();

const button = document.createElement("button");
button.innerText = "click here";
button.classList = "btn";
document.body.appendChild(button);
const div = document.createElement("div");
const par = document.createElement("p");
par.innerHTML = "Here is the text in paragraph";
document.body.appendChild(div);
div.appendChild(par);
