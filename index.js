let audio = document.querySelector("#audio");
let ShowSong = document.getElementById("ShowSong");
let menu = document.getElementById("menu");
let menus = document.getElementById("menus");
let musicapps = document.getElementById("musicapps");
let musicapp = document.getElementById("musicapp");
let play = document.getElementById("play");
let backward = document.getElementById("backward");
let forward = document.getElementById("forward");
let songName = document.getElementById("songName");
let singerName = document.getElementById("singerName");
let songsContainer = document.getElementById("songsContainer");

let pauseIcon =
  '<i class="fa-solid fa-circle-play" style="color: #566573"></i>';
let playIcon = '<i class="fa-solid fa-pause" style="color: #566573;"></i>';
let currentSongIndex = 0;
let songCurrTime = 0;

let songlist = [
  {
    songId: 1,
    songTitle: "Mere Samne Wali Khidki Mein",
    songSrc: "songs/samneWaliKhirkime.mp3",
    singer: "Kishore Kumar",
  },
  {
    songId: 2,
    songTitle: "Neele Neele Ambar Par",
    songSrc: "songs/nileNileAmbar.mp3",
    singer: "Kishore Kumar",
  },
  {
    songId: 3,
    songTitle: "Ek Ajnabee Haseena Se",
    songSrc: "songs/Ek_Ajnabee_Haseena_Se.mp3",
    singer: "Kishore kumar",
  },
  {
    songId: 4,
    songTitle: "Kaun Ho Tum Batlaao",
    songSrc: "songs/khawabHoTum.mp3",
    singer: "Kishore kumar",
  },
  {
    songId: 5,
    songTitle: "Mere mehboob qayamat hogi",
    songSrc: "songs/mere_mehboob_qayamat_hogi.mp3",
    singer: "Kishore kumar",
  },
  {
    songId: 6,
    songTitle: "Pal Pal Dil Ke Paas",
    songSrc: "songs/palPalDilKePass.mp3",
    singer: "Kishore Kumar",
  },
  {
    songId: 7,
    songTitle: "Chura Liya Hai Tumne Jo Dil Ko",
    songSrc: "songs/churaLiaHaiTumneJoDilKo.mp3",
    singer: "Asha Bhosle Mohammed Rafi",
  },
  {
    songId: 8,
    songTitle: "Kisi Ki Muskurahaton Pe Ho Nisar ",
    songSrc: "songs/kisiKiMuskurahtoPeHoMisar.mp3",
    singer: "Mukesh",
  },
  {
    songId: 9,
    songTitle: "Lagja gale ki phir ye",
    songSrc: "songs/lagja_gale_ki_phir_ye.mp3",
    singer: "Lata Mangeshkar",
  },
  {
    songId: 10,
    songTitle: "Jab Koi Baat Bigar Jaye",
    songSrc: "songs/jabKoiBaatBiharJaye.mp3",
    singer: "Kumar Sanu, Sadhana Sargam",
  },
  {
    songId: 11,
    songTitle: "Tum jo pakad lo hath mera",
    songSrc: "songs/tum_jo_pakad_lo_hath_mera.mp3",
    singer: "Kishore kumar",
  },
  {
    songId: 12,
    songTitle: "ye saam mastani",
    songSrc: "songs/ye_saam_mastani.mp3",
    singer: "Kishore kumar",
  },
  {
    songId: 13,
    songTitle: "Ye raate ye mausam",
    songSrc: "songs/ye_raate_ye_mausam.mp3",
    singer: "Sanam, Simran Sehgal",
  },
  {
    songId: 14,
    songTitle: "Pyar deewana hota hai",
    songSrc: "songs/pyar_deewana_hota_hai_mastana_hota_hai.mp3",
    singer: "Kishore kumar",
  },
  {
    songId: 15,
    songTitle: "Kitabein Bahut Si",
    songSrc: "songs/Kitabein Bahut Si.mp3",
    singer: "Vinod Rathod, Asha Bhosle",
  },
  {
    songId: 16,
    songTitle: "Galliyan",
    songSrc: "songs/Galliyan.mp3",
    singer: "Ankit Tiwari",
  },
  {
    songId: 17,
    songTitle: "Agar Tum Saath Ho",
    songSrc: "songs/Agar Tum Saath Ho.mp3",
    singer: "Arjit Singh, Alka Yagnik",
  },
  {
    songId: 18,
    songTitle: "Kaun Tujhe",
    songSrc: "songs/Kaun Tujhe.mp3",
    singer: "Palak muchhal",
  },
  {
    songId: 19,
    songTitle: "Raabta (Kehte Hain Khuda Ne)",
    songSrc: "songs/Raabta (Kehte Hain Khuda Ne).mp3",
    singer: "Arjit Singh, Shreya Ghoshal",
  },
  {
    songId: 20,
    songTitle: "Baarish",
    songSrc: "songs/Baarish.mp3",
    singer: "Ash king, Shashaa tirupati",
  },
  {
    songId: 21,
    songTitle: "Kya Kua Tera Wada",
    songSrc: "songs/Kya_Kua_Tera_Wada.mp3",
    singer: "Mohammed Rafi and Sushma Shreshta",
  },
  {
    songId: 22,
    songTitle: "Kaise Mujhe",
    songSrc: "songs/Kaise Mujhe.mp3",
    singer: "Benny Dayal, Shreya Ghoshal",
  },
  {
    songId: 23,
    songTitle: "Lo safar shuru ho gaya",
    songSrc: "songs/lo_safar_shuru_ho_gaya.mp3",
    singer: "Jubin Nautiyal",
  },
  {
    songId: 24,
    songTitle: "Sapno Ki Rani",
    songSrc: "songs/spanokirani.mp3",
    singer: "Kishore Kumar",
  },
  {
    songId: 25,
    songTitle: "Cham Cham",
    songSrc: "songs/Cham Cham.mp3",
    singer: "Meet Bros, Monali thakur",
  },
];

// Display song list
songsContainer.innerHTML = songlist
  .map((song, index) => {
    return `
    <div class="songList" data-index="${index}">
      <div class="song">
        <div class="name">${song.songTitle}</div>
        <div class="singer">${song.singer}</div>
      </div>
      <div class="icon">
        <i class="fa-solid fa-circle-play" style="color: #566573"></i>
      </div>
    </div>
  `;
  })
  .join("");

function pageSwap() {
  menus.addEventListener("click", () => {
    musicapp.classList.toggle("hide");
    musicapps.classList.toggle("hide");
    s;
  });
}

pageSwap();

// Play the default song on load
function defaultSong() {
  audio.src = songlist[currentSongIndex].songSrc;
  songName.innerText = songlist[currentSongIndex].songTitle;
  singerName.innerText = songlist[currentSongIndex].singer;
  play.innerHTML = pauseIcon;
  playSong();
}

// Function to play the selected song
function playSong() {
  audio.src = songlist[currentSongIndex].songSrc;
  songName.innerText = songlist[currentSongIndex].songTitle;
  singerName.innerText = songlist[currentSongIndex].singer;
  audio.currentTime = songCurrTime;
  audio.play();
}

function pauseSong() {
  audio.pause();
  songCurrTime = audio.currentTime;
}

function nextSong() {
  currentSongIndex++;
  if (currentSongIndex >= songlist.length) {
    currentSongIndex = 0;
  }
  playSong();
}

audio.onended = nextSong;

// Handle play/pause button
play.addEventListener("click", () => {
  if (audio.paused) {
    play.innerHTML = playIcon;
    audio.play();
  } else {
    play.innerHTML = pauseIcon;
    audio.pause();
  }
});

// Add event listener to list song dynamically
document.querySelectorAll(".songList").forEach((songElem) => {
  songElem.addEventListener("click", () => {
    currentSongIndex = parseInt(songElem.getAttribute("data-index"));
    musicapp.classList.add("hide");
    musicapps.classList.remove("hide");
    play.innerHTML = playIcon;
    playSong();
  });
});

// forward/backward functionality
forward.addEventListener("click", () => {
  audio.currentTime += 5;
});

backward.addEventListener("click", () => {
  audio.currentTime -= 5;
});

// Update progress bar
audio.addEventListener("timeupdate", () => {
  ShowSong.value = audio.currentTime;
});

ShowSong.addEventListener("input", () => {
  audio.currentTime = ShowSong.value;
});

audio.onloadedmetadata = function () {
  ShowSong.max = audio.duration;
};

function pageSwap() {
  menus.addEventListener("click", () => {
    musicapps.classList.add("hide");
    musicapp.classList.remove("hide");
  });

  menu.addEventListener("click", () => {
    musicapp.classList.add("hide");
    musicapps.classList.remove("hide");
  });
}

defaultSong();
