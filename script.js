//your JS code here. If required.
// Array of image URLs to download
const images = [
  { url: 'https://via.placeholder.com/150', name: 'Image 1' },
  { url: 'https://via.placeholder.com/250', name: 'Image 2' },
  { url: 'https://via.placeholder.com/350', name: 'Image 3' },
  { url: 'https://via.placeholder.com/450', name: 'Image 4' },
  { url: 'https://via.placeholder.com/550', name: 'Image 5' },
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
