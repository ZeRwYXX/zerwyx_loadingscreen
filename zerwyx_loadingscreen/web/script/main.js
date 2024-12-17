const songs = [
    {
        src: "sound/tvlis.mp3",
        name: "Tvlis - Pas le temps"
    },
    {
        src: "sound/sond1.mp3",
        name: "Energetic - Hip-Hop by Infraction [No Copyright Music]"
    },
    {
        src: "sound/sond2.mp3",
        name: "The Score - The Fear"
    }
];

function getRandomSongIndex() {
    return Math.floor(Math.random() * songs.length);
}

const playPauseBtn = document.getElementById('playPauseBtn');
const playPauseIcon = document.getElementById('playPauseIcon');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const volumeSlider = document.getElementById('volumeSlider');
const currentSongName = document.getElementById('currentSongName');
const audio = document.getElementById('loading');

const songname = document.getElementById("songname");

let currentSongIndex = 0;

function loadSong(index) {
    audio.src = songs[index].src;
    currentSongName.textContent = songs[index].name;
    songname.textContent = songs[index].name; 
    audio.play();
    playPauseIcon.classList.remove('fa-play');
    playPauseIcon.classList.add('fa-pause');
    updateVolumeSliderBackground(); 
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
    } else {
        audio.pause();
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
    }
}

function updateVolumeSliderBackground() {
    const percentage = (volumeSlider.value - volumeSlider.min) / (volumeSlider.max - volumeSlider.min) * 100;
    volumeSlider.style.background = `linear-gradient(to right, #EE4B4B 0%, #EE4B4B ${percentage}%, white ${percentage}%, white 100%)`;
}

playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

volumeSlider.addEventListener('input', function() {
    audio.volume = this.value;
    updateVolumeSliderBackground(); 
});

audio.volume = volumeSlider.value;
updateVolumeSliderBackground(); 

window.addEventListener('keyup', function(e) {
    if (e.which == 38) { 
        volumeSlider.value = Math.min(parseFloat(volumeSlider.value) + 0.025, 1).toFixed(2);
        audio.volume = volumeSlider.value;
        updateVolumeSliderBackground();
    } else if (e.which == 40) {
        volumeSlider.value = Math.max(parseFloat(volumeSlider.value) - 0.025, 0).toFixed(2);
        audio.volume = volumeSlider.value;
        updateVolumeSliderBackground();
    }
});

window.addEventListener("keyup", function(event) {
    if (event.which == 37) { 
        prevSong();
    }

    if (event.which == 39) { 
        nextSong();
    }

    if (event.which == 32) {
        event.preventDefault();
        togglePlayPause();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    currentSongIndex = getRandomSongIndex();
    loadSong(currentSongIndex);
});

audio.addEventListener('ended', nextSong);
