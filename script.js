//your JS code here. If required.
//your JS code here. If required.
let audioArr=["applause","boo","gasp","tada","victory","wrong"];

let activeAudio=null;
let btns=document.getElementsByTagName('button');
for( let i=0;i<btns.length;i++){
    btns[i].addEventListener('click',soundFunc)
}

function soundFunc(event){
const audioName=event.target.innerText;
// console.log(audioName);

if(audioArr.includes(audioName)){
if(activeAudio){
    pause();
}
let audio=document.createElement('audio');
audio.src=`sounds/${audioName}.mp3`;
audio.controls=true;
activeAudio=audio;
play();
}
else{
    pause();
}

}


function play(){
    activeAudio.play();
}
function pause(){
    if(activeAudio){
    activeAudio.pause();
    activeAudio.currentTime=0;
    }
}