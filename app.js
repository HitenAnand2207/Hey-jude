const music = document.getElementById("bgMusic");
const playToggle = document.getElementById("playToggle");

let isPlaying = true;

const updateButton = () => {
  playToggle.textContent = isPlaying ? "Pause music" : "Play music";
};

const ensurePlayback = async () => {
  try {
    await music.play();
    isPlaying = true;
  } catch (error) {
    isPlaying = false;
  }
  updateButton();
};

playToggle.addEventListener("click", async () => {
  if (isPlaying) {
    music.pause();
    isPlaying = false;
  } else {
    try {
      await music.play();
      isPlaying = true;
    } catch (error) {
      isPlaying = false;
    }
  }
  updateButton();
});

window.addEventListener("load", () => {
  ensurePlayback();
});
