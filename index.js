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
<<<<<<< HEAD
let song1 = document.getElementById("song1");
let song2 = document.getElementById("song2");
let song3 = document.getElementById("song3");
let song4 = document.getElementById("song4");
let song5 = document.getElementById("song5");
let song6 = document.getElementById("song6");
let song7 = document.getElementById("song7");

let pauseIcon = '<i class="fa-solid fa-circle-play" style="color: #566573"></i>';
let playIcon = '<i class="fa-solid fa-pause" style="color: #566573;"></i>';
let currentSongIndex = 0;

let songCurrTime = "";


let songlist = [
    ["songs/lagja_gale_ki_phir_ye.mp3", "Lagja gale ki phir ye", "Lata Mangeshkar"],
    ["songs/lo_safar_shuru_ho_gaya.mp3", "Lo safar shuru ho gaya", "Jubin Nautiyal"],
    ["songs/mere_mehboob_qayamat_hogi.mp3", "Mere mehboob qayamat hogi", "Kishore kumar"],
    ["songs/pyar_deewana_hota_hai_mastana_hota_hai.mp3", "Pyar deewana hota hai", "Kishore kumar"],
    ["songs/ye_raate_ye_mausam.mp3", "Ye raate ye mausam", "Sanam, Simran Sehgal"],
    ["songs/Ek_Ajnabee_Haseena_Se.mp3", "Ek Ajnabee Haseena Se", "Kishore kumar"],
    ["songs/Kya_Kua_Tera_Wada.mp3", "Kya Kua Tera Wada", "Mohammed Rafi"]
];



function defaultSong() {
    audio.src = songlist[currentSongIndex][0];
    songName.innerText = songlist[currentSongIndex][1];
    singerName.innerText = songlist[currentSongIndex][2];
    play.innerHTML = pauseIcon;
    playSong()

}





song1.addEventListener('click', () => {
    currentSongIndex = 0;
    musicapp.classList.add('hide');
    musicapps.classList.remove('hide');
    play.innerHTML = playIcon;
    playSong()
})

song2.addEventListener('click', () => {
    currentSongIndex = 1;
    musicapp.classList.add('hide');
    musicapps.classList.remove('hide');
    play.innerHTML = playIcon;
    playSong()
})

song3.addEventListener('click', () => {
    currentSongIndex = 2;
    musicapp.classList.add('hide');
    musicapps.classList.remove('hide');
    play.innerHTML = playIcon;
    playSong();
})

song4.addEventListener('click', () => {
    currentSongIndex = 3;
    musicapp.classList.add('hide');
    musicapps.classList.remove('hide');
    play.innerHTML = playIcon;
    playSong();
})

song5.addEventListener('click', () => {
    currentSongIndex = 4;
    musicapp.classList.add('hide');
    musicapps.classList.remove('hide');
    play.innerHTML = playIcon;
    playSong();
})

song6.addEventListener('click', () => {
    currentSongIndex = 5;
    musicapp.classList.add('hide');
    musicapps.classList.remove('hide');
    play.innerHTML = playIcon;
    playSong();
})

song7.addEventListener('click', () => {
    currentSongIndex = 6;
    musicapp.classList.add('hide');
    musicapps.classList.remove('hide');
    play.innerHTML = playIcon;
    playSong();
})





function pauseSong() {
    audio.pause();
    songCurrTime = audio.currentTime;
}


function playSong() {
    audio.src = songlist[currentSongIndex][0];
    songName.innerText = songlist[currentSongIndex][1];
    singerName.innerText = songlist[currentSongIndex][2];
    audio.currentTime = songCurrTime;
    audio.play();
}

function nextSong() {
    currentSongIndex++;
    ShowSong.value == audio.duration;
    if (currentSongIndex >= songlist.length) {
        currentSongIndex = 0;
    }
    playSong();
}

ShowSong.length == audio.duration;

audio.onended = nextSong;



if (audio.play()) {
    setInterval(() => {
        ShowSong.value = audio.currentTime;
        if (ShowSong.value == audio.duration) {
            ShowSong.value = "0";
            nextSong();
        }
    }, 500);
}


play.addEventListener('click', () => {
    if (play.innerHTML === pauseIcon) {
        play.innerHTML = playIcon;
        ShowSong.value = audio.currentTime;
        audio.play();
        changeSongTiming();
    }
    else {
        play.innerHTML = pauseIcon;
        audio.pause();
        changeSongTiming();

    }
})




ShowSong.addEventListener('click', () => {
    audio.currentTime = ShowSong.value;
});




function changeSongTiming() {
    forward.addEventListener('click', () => {
        audio.currentTime += 1;
    })

    backward.addEventListener('click', () => {
        audio.currentTime -= 1;
    })
}




function pageSwap() {
    menus.addEventListener('click', () => {
        musicapps.classList.add('hide');
        musicapp.classList.remove('hide');
    })

    menu.addEventListener('click', () => {
        musicapp.classList.add('hide');
        musicapps.classList.remove('hide');
    })
}

audio.onloadedmetadata = function () {
    ShowSong.max = audio.duration;
};




defaultSong();
changeSongTiming();
pageSwap();
=======
let songsContainer = document.getElementById("songsContainer");

let pauseIcon =
  '<i class="fa-solid fa-circle-play" style="color: #566573"></i>';
let playIcon = '<i class="fa-solid fa-pause" style="color: #566573;"></i>';
let currentSongIndex = 0;
let songCurrTime = 0;

let songlist = [
  {
    songTitle: "Ye raate ye mausam",
    songSrc: "songs/ye_raate_ye_mausam.mp3",
    singer: "Sanam, Simran Sehgal",
  },
  {
    songTitle: "Ek Ajnabee Haseena Se",
    songSrc: "songs/Ek_Ajnabee_Haseena_Se.mp3",
    singer: "Sanam, Simran Sehgal",
  },
  {
    songTitle: "Mere mehboob qayamat hogi",
    songSrc: "songs/mere_mehboob_qayamat_hogi.mp3",
    singer: "Kishore kumar",
  },
  {
    songTitle: "Lagja gale ki phir ye",
    songSrc: "songs/lagja_gale_ki_phir_ye.mp3",
    singer: "Lata Mangeshkar",
  },
  {
    songTitle: "Kya Kua Tera Wada",
    songSrc: "songs/Kya_Kua_Tera_Wada.mp3",
    singer: "Sanam, Simran Sehgal",
  },
  {
    songTitle: "Pyar deewana hota hai",
    songSrc: "songs/pyar_deewana_hota_hai_mastana_hota_hai.mp3",
    singer: "Kishore kumar",
  },
  {
    songTitle: "Kitabein Bahut Si",
    songSrc: "songs/Kitabein Bahut Si.mp3",
    singer: "Vinod Rathod, Asha Bhosle",
  },
  {
    songTitle: "ye saam mastani",
    songSrc: "songs/ye_saam_mastani.mp3",
    singer: "Kishore kumar",
  },
  {
    songTitle: "Galliyan",
    songSrc: "songs/Galliyan.mp3",
    singer: "Ankit Tiwari",
  },
  {
    songTitle: "Agar Tum Saath Ho",
    songSrc: "songs/Agar Tum Saath Ho.mp3",
    singer: "Arjit Singh, Alka Yagnik",
  },
  {
    songTitle: "Kaun Tujhe",
    songSrc: "songs/Kaun Tujhe.mp3",
    singer: "Palak muchhal",
  },
  {
    songTitle: "Raabta (Kehte Hain Khuda Ne)",
    songSrc: "songs/Raabta (Kehte Hain Khuda Ne).mp3",
    singer: "Arjit Singh, Shreya Ghoshal",
  },
  {
    songTitle: "Baarish",
    songSrc: "songs/Baarish.mp3",
    singer: "Ash king, Shashaa tirupati",
  },
  {
    songTitle: "Kaise Mujhe",
    songSrc: "songs/Kaise Mujhe.mp3",
    singer: "Benny Dayal, Shreya Ghoshal",
  },
  {
    songTitle: "Tum jo pakad lo hath mera",
    songSrc: "songs/tum_jo_pakad_lo_hath_mera.mp3",
    singer: "Kishore kumar",
  },
  {
    songTitle: "Lo safar shuru ho gaya",
    songSrc: "songs/lo_safar_shuru_ho_gaya.mp3",
    singer: "Jubin Nautiyal",
  },
  {
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
>>>>>>> 1bac694 (App updated)
