const images = [
  { src: "assets/fake red and blue.png", isReal: false },

  { src: "assets/fake academic painting.png", isReal: false },

  { src: "assets/fake amazing painting.png", isReal: false },

  { src: "assets/fake american gothic.png", isReal: false },

  { src: "assets/fake basic painting.png", isReal: false },

  { src: "assets/fake beautiful statue.png", isReal: false },

  { src: "assets/fake detailed painting.png", isReal: false },

  { src: "assets/fake academic painting.png", isReal: false },

  { src: "assets/fake fujin and raijin.png", isReal: false },

  { src: "assets/fake girl with a pearl.png", isReal: false },

  { src: "assets/fake graceful painting.png", isReal: false },

  { src: "assets/fake impression sundrise.png", isReal: false },

  { src: "assets/fake jolly painting.png", isReal: false },

  { src: "assets/fake mona lisa.png", isReal: false },

  { src: "assets/fake moving painting.png", isReal: false },

  { src: "assets/fake dora.png", isReal: false },

  { src: "assets/fake quiant painting.png", isReal: false },

  { src: "assets/fake robust.jpg", isReal: false },

  { src: "assets/fake academic painting.png", isReal: false },

  { src: "assets/fake scary painting.png", isReal: false },

  { src: "assets/fake scenic painting.png", isReal: false },

  { src: "assets/fake self potrait.png", isReal: false },

  { src: "assets/fake serene.png", isReal: false },

  { src: "assets/fake solemn painting.png", isReal: false },

  { src: "assets/fake the kiss.png", isReal: false },

  { src: "assets/fake the scream.png", isReal: false },

  { src: "assets/real academic painting.png", isReal: true },

  { src: "assets/real amazing painting.png", isReal: true },

  { src: "assets/real american gothic.png", isReal: true },

  { src: "assets/real basic painting.png", isReal: true },

  { src: "assets/real beautiful statue.png", isReal: true },

  { src: "assets/real detailed painting.png", isReal: true },

  { src: "assets/real amazing painting.png", isReal: true },

  { src: "assets/real american gothic.png", isReal: true },

  { src: "assets/real basic painting.png", isReal: true },

  { src: "assets/real beautiful statue.png", isReal: true },

  { src: "assets/real detailed painting.png", isReal: true },

  { src: "assets/real fujin and raijin.png", isReal: true },

  { src: "assets/real girl with a peral earing.png", isReal: true },

  { src: "assets/real graceful painting.png", isReal: true },

  { src: "assets/real impression sunrise.png", isReal: true },

  { src: "assets/real jolly painting.png", isReal: true },

  { src: "assets/real mona lisa.png", isReal: true },

  { src: "assets/real moving painting.png", isReal: true },

  { src: "assets/real red and blue.png", isReal: true },

  { src: "assets/real dora.png", isReal: true },

  { src: "assets/real quiant painting.png", isReal: true },

  { src: "assets/real robust.jpg", isReal: true },

  { src: "assets/real self potrait.png", isReal: true },

  { src: "assets/real solemn painting.png", isReal: true },

  { src: "assets/real the kiss.png", isReal: true },

  { src: "assets/real the scream.png", isReal: true },

  { src: "assets/real serene.png", isReal: true },
];

let currentImageIndex = 0;

function startGame() {
  showImage();
}

function showImage() {
  const imageElement = document.getElementById("image");
  imageElement.src = images[currentImageIndex].src;
}

function checkAnswer(userGuess) {
  const correctAnswer = images[currentImageIndex].isReal;

  if (userGuess === correctAnswer) {
    alert("Correct!"); // You can replace this with your own logic for handling correct answers
  } else {
    alert("Incorrect!"); // You can replace this with your own logic for handling incorrect answers
  }

  // Move to the next image
  currentImageIndex++;
  if (currentImageIndex === images.length) {
    // Restart the game if all images have been shown
    currentImageIndex = 0;
  }

  // Show the next image
  showImage();
}

// Start the game when the page loads
document.addEventListener("DOMContentLoaded", startGame);
