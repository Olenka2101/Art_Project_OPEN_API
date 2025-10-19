// Main H1 header Gallery intro Picture
const mainHeader = document.createElement("h1");
mainHeader.innerHTML = "Famous Artists Gallery";
const title = document.getElementById("title");
title.appendChild(mainHeader);

// Here is my picture
const mainPic = document.createElement("img");
const mainImage = document.getElementById("mainImage");
mainImage.appendChild(mainPic);
// Header Picture API START
const picUrl = "https://api.artic.edu/api/v1/artworks/64818?fields=id,image_id";
async function getApiPicture() {
  try {
    const response = await fetch(picUrl);
    if (!response.ok) {
      throw new Error("Request failed, please try again later!");
    }
    const result = await response.json();
    const imageiiifUrl = result.config.iiif_url;
    const picId = result.data.image_id;
    const imageProperties = "/full/400,/0/default.jpg";

    let imageUrl = imageiiifUrl + "/" + picId + imageProperties;

    mainPic.src = imageUrl;
  } catch (error) {
    console.error("Request failed:", error);
  }
}
getApiPicture();
// END Pic background

// Gallery API fetch function
const headerMonet = document.createElement("h2");
headerMonet.innerHTML = "Claude Monet Art Gallery";
const galleryMonet = document.getElementById("galleryMonet");
galleryMonet.parentNode.insertBefore(headerMonet, galleryMonet);
async function getApiMonet() {
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
    console.log(result);
    const dataArr = result.data;
    // console.log(dataArr);
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
      galleryMonet.insertAdjacentHTML("beforeend", eachCardHtml);
    }
  } catch (error) {
    console.error("Request failed:", error);
  }
}
getApiMonet();

// Picasso  Gallery H2 header start
const headerPicasso = document.createElement("h2");
headerPicasso.innerHTML = "Pablo Picasso Art Gallery";
// PicassoGallery H2 header end

// Picasso Gallery API Fetch start

const galleryPicasso = document.getElementById("galleryPicasso");
galleryPicasso.parentNode.insertBefore(headerPicasso, galleryPicasso);
async function getApiGalleryPicasso() {
  try {
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks/search?q=Picasso&limit=15&fields=id,title,artist_display,image_id,thumbnail.alt_text,date_display"
    );
    if (!response.ok) {
      throw new Error("Request failed, please try again later!");
    }
    const result = await response.json();

    const dataArr = result.data;

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

      galleryPicasso.insertAdjacentHTML("beforeend", eachCardHtml);
    }
  } catch (error) {
    console.error("Request failed:", error);
  }
}
getApiGalleryPicasso();
//Picasso Gallery API Fetch End

//////////////////////////////////
// Vincent van Gogh  Gallery H2 header start
const headerVanGogh = document.createElement("h2");
headerVanGogh.innerHTML = "Vincent van Gogh Art Gallery";
// Van Gogh Gallery H2 header end

// Vincent van Gogh  Gallery API Fetch start

const galleryVanGogh = document.getElementById("galleryVanGogh");
galleryVanGogh.parentNode.insertBefore(headerVanGogh, galleryVanGogh);
async function getApiGalleryVanGogh() {
  try {
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks/search?q=Gogh&limit=15&fields=id,title,artist_display,image_id,thumbnail.alt_text,date_display"
    );
    if (!response.ok) {
      throw new Error("Request failed, please try again later!");
    }
    const result = await response.json();

    const dataArr = result.data;

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

      galleryVanGogh.insertAdjacentHTML("beforeend", eachCardHtml);
    }
  } catch (error) {
    console.error("Request failed:", error);
  }
}
getApiGalleryVanGogh();
//Vincent van Gogh Third Gallery API Fetch End

//////////////////////////////////
// Rembrandt fourth Gallery H2 header start
const headerRembrandt = document.createElement("h2");
headerRembrandt.innerHTML = "Rembrandt Art Gallery";
// Rembrandt fourth Gallery H2 header end

// Rembrandt fourth Gallery API Fetch start

const galleryRembrandt = document.getElementById("galleryRembrandt");
galleryRembrandt.parentNode.insertBefore(headerRembrandt, galleryRembrandt);
async function getApiGalleryRembrandt() {
  try {
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks/search?q=Rembrandt&limit=15&fields=id,title,artist_display,image_id,thumbnail.alt_text,date_display"
    );
    if (!response.ok) {
      throw new Error("Request failed, please try again later!");
    }
    const result = await response.json();

    const dataArr = result.data;

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

      galleryRembrandt.insertAdjacentHTML("beforeend", eachCardHtml);
    }
  } catch (error) {
    console.error("Request failed:", error);
  }
}
getApiGalleryRembrandt();
//Rembrandt fourth Gallery API Fetch End

//////////////////////////////////
// Salvador Dalí Fifth Gallery H2 header start
const headerDali = document.createElement("h2");
headerDali.innerHTML = "Salvador Dalí Art Gallery";
// Salvador Dalí Fifth  Gallery H2 header end

// Salvador Dalí Fifth  Gallery API Fetch start

const galleryDali = document.getElementById("galleryDali");
galleryDali.parentNode.insertBefore(headerDali, galleryDali);
async function getApiGalleryDali() {
  try {
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks/search?q=Dali&limit=14&fields=id,title,artist_display,image_id,thumbnail.alt_text,date_display"
    );
    if (!response.ok) {
      throw new Error("Request failed, please try again later!");
    }
    const result = await response.json();

    const dataArr = result.data;

    for (let i = 0; i < dataArr.length; i++) {
      console.log(dataArr[i].thumbnail.alt_text);
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

      galleryDali.insertAdjacentHTML("beforeend", eachCardHtml);
    }
  } catch (error) {
    console.error("Request failed:", error);
  }
}
getApiGalleryDali();
//Salvador Dalí Fifth Gallery API Fetch End

// Footer added
const footer = document.createElement("footer");
footer.className = "footer_class";
document.body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.className = "footer_par";
copyright.innerHTML = `© Olga Sessions ${thisYear}`;
footer.appendChild(copyright);

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
