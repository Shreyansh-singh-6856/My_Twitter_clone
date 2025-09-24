// script.js
document.getElementById("toggleBtn").addEventListener("click", () => {
  const Dropdown = document.getElementById("dropdown");
  const Everyone = document.getElementById("everyone-dropdown")
  Dropdown.classList.toggle("hidden"); // hide/show
  Everyone.classList.toggle("hidden"); // hide/show
  Dropdown.classList.toggle("flex"); 
});

const playPause = document.getElementById("playPause");
const playIcon = document.getElementById("playIcon");
const video = document.getElementById("tweetVideo");
const progress = document.getElementById("progress");
const muteUnmute = document.getElementById("muteUnmute");
const fullscreen = document.getElementById("fullscreen");

// Play / Pause
playPause.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playIcon.src = "pause.svg";   // ✅ set pause icon
  } else {
    video.pause();
    playIcon.src = "play.svg";    // ✅ set play icon
  }
});

// Progress
video.addEventListener("timeupdate", () => {
  progress.value = (video.currentTime / video.duration) * 100;
});

progress.addEventListener("input", () => {
  video.currentTime = (progress.value / 100) * video.duration;
});

// Mute / Unmute
muteUnmute.addEventListener("click", () => {
  video.muted = !video.muted;
  muteUnmute.textContent = video.muted ? "🔇" : "🔊";
});

// Fullscreen
fullscreen.addEventListener("click", () => {
  if (video.requestFullscreen) video.requestFullscreen();
});
