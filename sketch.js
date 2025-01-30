let dogImage;

function setup() {
  createCanvas(800, 600);
  loadDogImage();
}

function draw() {
  background(220);
  if (dogImage) {
    image(dogImage, 0, 0, width, height);
  }
  fill(0);
  textSize(18);
  text('Click to load a new dog image', 10, height - 20);
}

function loadDogImage() {
  let url = 'https://random.dog/woof.json';
  loadJSON(url, gotData);
}

function gotData(data) {
  let imageUrl = data.url;
  if (imageUrl.endsWith('.mp4') || imageUrl.endsWith('.webm')) {
    // If the URL is a video, fetch another image
    loadDogImage();
  } else {
    dogImage = loadImage(imageUrl);
  }
}

function mousePressed() {
  loadDogImage();
}