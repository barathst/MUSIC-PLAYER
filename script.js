let isPlaying = false;
let progress = document.querySelector(".progress");
let playBtn = document.getElementById("playBtn");

function togglePlay() {
    isPlaying = !isPlaying;

    playBtn.textContent = isPlaying ? "⏸" : "▶";

    // Fake progress animation
    if (isPlaying) {
        fakeProgress();
    }
}

function fakeProgress() {
    let width = 0;
    let interval = setInterval(() => {
        if (!isPlaying || width >= 100) {
            clearInterval(interval);
        } else {
            width += 1;
            progress.style.width = width + "%";
        }
    }, 200);
}

function setProgress(event) {
    const containerWidth = event.currentTarget.offsetWidth;
    const clickX = event.offsetX;
    const percent = (clickX / containerWidth) * 100;
    progress.style.width = percent + "%";
}