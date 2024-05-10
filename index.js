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
    ["songs/Ek_Ajnabee_Haseena_Se.mp3", "Ek Ajnabee Haseena Se", "Sanam, Simran Sehgal"],
    ["songs/Kya_Kua_Tera_Wada.mp3", "Kya Kua Tera Wada", "Sanam, Simran Sehgal"]
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
