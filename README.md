# workshop-task-8
Workshop-task-8 Application Programming Interfaces (APIs)

Here is a URL to the webpage for this project: [link]( )

## Task
- Create a sketch that makes an API call to gather data from an external source. Here is a list of free-to-use APIs Links to an external site.which do not require authentication.
- https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
- Visual elements of the sketch should be determined by data retrieved from the external source.
- Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work.


## workshop notes:
Ipify allows to retrieve your ip address
<img width="1006" alt="截屏2025-01-30 下午6 19 46" src="https://github.com/user-attachments/assets/f15b09a7-b779-443f-b54a-81a8cebb6682" />

- https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
- This website has a lot of different api .which do not require authentication.
<img width="1034" alt="截屏2025-01-30 下午7 13 06" src="https://github.com/user-attachments/assets/fc15cacc-00e3-4bfc-bf1d-6baf106a22c1" />


## Project

I used https://dog.ceo/dog-api/

It makes an API call to the Dog API to fetch random dog images and display them on the canvas. 

```ruby
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
```
- Loads a random dog image: Makes an API call to the Dog API to fetch a random dog image URL.
  
- If the fetched URL is an image, it displays the image on the canvas. If the URL is a video, it fetches another image.
  
- Reloads the image on mouse press: When you click the mouse, it fetches a new random dog image.

<img width="798" alt="截屏2025-01-30 下午7 04 28" src="https://github.com/user-attachments/assets/94a6729b-bebd-4e00-95bc-9f8be1f9c1fa" />

i have found that when its loading, the user can get confused. So i have added a message at the bottom of the canvas that says "Click to load a new dog image." This will guide users to reload the image by clicking the mouse.

<img width="798" alt="截屏2025-01-30 下午7 05 49" src="https://github.com/user-attachments/assets/102affeb-4cb3-4d9f-8cb2-e899e2b30174" />

