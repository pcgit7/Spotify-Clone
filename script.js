console.log("welcome to spotify");

// Initialise the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSong = document.getElementById('masterSong');



let songs = [
    {songName:"Shape of you",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Arcade",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Rait Zara Si",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Dil Mere",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"In the end",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Closer",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Let me Love you",filePath :"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},

]

songItems.forEach((element,i)=>
{
  //console.log(element,i);  
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play()

//handle play for click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;   
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex = parseInt(e.target.id)-1;

        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterSong.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8)
    songIndex = 0;

    else
    songIndex+=1;

    masterSong.innerText = songs[songIndex].songName;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    songIndex = 0;

    else
    songIndex-=1;

    masterSong.innerText = songs[songIndex].songName;

    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
