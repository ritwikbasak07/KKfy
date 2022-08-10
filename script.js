//initialize the variable

let songIndex = 1;
let audioElement = new Audio("audio/BestofKK/1.mp3");
// audioElement.autoplay() = true;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Abhi Abhi (Jism )", filepath: "audio/BestofKK/Abhi Abhi (Jism ).mp3", coverPath: "images/bestofKK/1.jpg" },
    { songName: "Ajab Si (Om Shanti Om)", filepath: "audio/BestofKK/Ajab Si (Om Shanti Om) - K.K - 320Kbps.mp3", coverPath: "images/bestofKK/2.jpg" },
    { songName: "Alvida (Life...Metro)", filepath: "audio/BestofKK/Alvida (Life...Metro) - K.K - 320Kbps.mp3", coverPath: "images/bestofKK/3.jpg" },
    { songName: "Beete Lamhein", filepath: "audio/BestofKK/Beete Lamhein - The Train 320Kbps.mp3", coverPath: "images/bestofKK/4.jpg" },
    { songName: "Dil Kyun Yeh Mera", filepath: "audio/BestofKK/Dil Kyun Yeh Mera (Kites) - K.K - 320Kbps.mp3", coverPath: "images/bestofKK/5.jpg" },
    { songName: "Guzaarish (Guzaarish)", filepath: "audio/BestofKK/Guzaarish (Guzaarish) - K.K - 320Kbps.mp3", coverPath: "images/bestofKK/6.jpg" },
    { songName: "Haan Tu Hain (Jannat)", filepath: "audio/BestofKK/Haan Tu Hain (Jannat) - K.K - 320Kbps.mp3", coverPath: "images/bestofKK/7.jpg" },
    { songName: "Khuda Jaane (Bachna Ae Haseeno)", filepath: "audio/BestofKK/Khuda Jaane (Bachna Ae Haseeno) - K.K - 320Kbps.mp3", coverPath: "images/bestofKK/8.jpg" },
    { songName: "Kya Mujhe Pyar Hai", filepath: "audio/BestofKK/Kya Mujhe Pyar Hai (Woh Lamhe) - K.K - 320Kbps.mp3", coverPath: "images/bestofKK/9.jpg" },
    { songName: "Labon Ko", filepath: "audio/BestofKK/Labon Ko (Bhool Bhulaiyaa) - K.K - 320Kbps.mp3", coverPath: "images/bestofKK/10.jpg" },
    { songName: "Meri Maa", filepath: "audio/BestofKK/Meri Maa (Yaariyan) - K.K - 320Kbps.mp3", coverPath: "images/bestofKK/11.jpg" },
    { songName: "Pal", filepath: "audio/BestofKK/Pal (Live) - K.K - 320Kbps.mp3", coverPath: "images/bestofKK/12.jpg" },
    { songName: "Piya Aaye Na", filepath: "audio/BestofKK/Piya Aaye Na (Aashiqui ) - K.K - 320Kbps.mp3", coverPath: "images/bestofKK/13.jpg" },
    { songName: "Soniye", filepath: "audio/BestofKK/Soniye (Aksar) - K.K. - K.K - 320Kbps.mp3", coverPath: "images/bestofKK/14.jpg" },
    { songName: "Tu Hi Meri Shab Hai", filepath: "audio/BestofKK/Tu Hi Meri Shab Hai (Gangster) - K.K - 320Kbps.mp3", coverPath: "images/bestofKK/15.jpg" },
    { songName: "Tu Jo Mila", filepath: "audio/BestofKK/Tu Jo Mila (Bajrangi Bhaijaan) - K.K - 320Kbps.mp3", coverPath: "images/bestofKK/16.jpg" },
    { songName: "Tujhe Sochta Hoon", filepath: "audio/BestofKK/Tujhe Sochta Hoon (Jannat ) - K.K - 320Kbps.mp3", coverPath: "images/bestofKK/17.jpg" },
    { songName: "Yaaron", filepath: "audio/BestofKK/Yaaron - (Live) - K.K - 320Kbps.mp3", coverPath: "images/bestofKK/18.jpg" },
    { songName: "Zara Se", filepath: "audio/BestofKK/Zara Se (Jannat) - K.K - 320Kbps.mp3", coverPath: "images/bestofKK/19.jpg" },
    { songName: "zindegi do pal ki", filepath: "audio/BestofKK/Zindagi Do Pal Ki (Kites) - K.K - 320Kbps.mp3", coverPath: "images/bestofKK/20.jpg" },
]



songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    // element.getElementsByClassName("songName")[0].innerHTML= songs[i].songName;
})


// let audioElement = new Audio('1.mp3');
// audioElement.play();

//Listen to events
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.currentTime = 0;
        audioElement.src = `audio/BestofKK/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
})





document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex==20){
        songIndex = 1;
    }else{
        songIndex += 1;
    }
    audioElement.src = `audio/BestofKK/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex==1){
        songIndex = 20;
    }else{
        songIndex -= 1;
    }
    audioElement.src = `audio/BestofKK/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})
