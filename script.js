//your JS code here. If required.
// Array of image URLs to download
const images = [
 { name: "cat", url: "https://placekitten.com/200/300" },
  { name: "dog", url: "https://placedog.net/200/300" },
  { name: "hamster", url: "https://placehamster.com/200/300" },
  { name: "fox", url: "https://placefox.com/200/300" },
  { name: "owl", url: "https://placeowl.com/200/300" },
];

// Function to download the images and display them on the webpage
function downloadAndDisplayImages(images) {
  const promises = images.map(image =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.src = image.url;
      img.onload = () => resolve({ url: image.url, name: image.name });
      img.onerror = () => reject(`Failed to load image's URL: ${image.url}`);
    })
  );

  Promise.all(promises)
    .then(images => {
      const output = document.getElementById('output');
      images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.url;
        img.alt = image.name;
        output.appendChild(img);
      });
    })
    .catch(error => {
      const output = document.getElementById('output');
      output.textContent = error;
    });
}

// Event listener to start downloading the images on click of the button
const button = document.getElementById('download-images-button');
button.addEventListener('click', () => downloadAndDisplayImages(images));
