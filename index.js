// Gallery API fetch function
const gallery = document.getElementById("gallery");
async function getApiTest() {
  try {
    // original response general
    // const response = await fetch("https://api.artic.edu/api/v1/artworks");
    // current response is  tailored by specific items needed
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks/search?q=Monet&limit=15&fields=id,title,artist_display,image_id,thumbnail.alt_text,date_display"
    );
    if (!response.ok) {
      throw new Error("Request failed, please try again later!");
    }
    const result = await response.json();
    // console.log(result);
    const dataArr = result.data;
    console.log(dataArr);
    for (let i = 0; i < dataArr.length; i++) {
      const imgUrl = dataArr[i].image_id
        ? `https://www.artic.edu/iiif/2/${dataArr[i].image_id}/full/843,/0/default.jpg`
        : `https://via.placeholder.com/250x250?text=No+Image`;

      const eachCardHtml = `
    <div class="artwork">
    <img src="${imgUrl}" alt="${dataArr[i].title}">
    <div class="info">
    <div class="title">${dataArr[i].title}</div>
    <div class="yearCreated">Art Created: ${dataArr[i].date_display}</div>
    <div class="artist">${dataArr[i].artist_display}</div>
    <div class="description">${dataArr[i].thumbnail.alt_text}</div>
    </div>
    </div>
    `;
      // adding attaching all info to div in html
      gallery.insertAdjacentHTML("beforeend", eachCardHtml);
    }
  } catch (error) {
    console.error("Request failed:", error);
  }
}
getApiTest();

// My starting testing API's functions, description and picture
//starry nights api
// async function getApiTest() {
//   try {
//     const response = await fetch(
//       "https://api.artic.edu/api/v1/artworks/129884"
//     );
//     if (!response.ok) {
//       throw new Error("Request failed, please try again later!");
//     }
//     const result = await response.json();
//     console.log(result);
//     const title = document.getElementById("title");
//     title.innerHTML = result.data.title;
//     const description = document.getElementById("description");
//     description.innerHTML = result.data.description;
//   } catch (error) {
//     console.error("Request failed:", error);
//   }
// }
// getApiTest();

// const picUrl =
//   "https://api.artic.edu/api/v1/artworks/129884?fields=id,title,image_id";
// async function getApiPicture() {
//   try {
//     const response = await fetch(picUrl);
//     if (!response.ok) {
//       throw new Error("Request failed, please try again later!");
//     }
//     const result = await response.json();
//     // console.log(result);
//     const imageiiifUrl = result.config.iiif_url;
//     const picId = result.data.image_id;
//     const imageProperties = "/full/400,/0/default.jpg";
//     let imageUrl = imageiiifUrl + "/" + picId + imageProperties;
//     const image = document.querySelector("img");
//     image.src = imageUrl;
//   } catch (error) {
//     console.error("Request failed:", error);
//   }
// }
// getApiPicture();
