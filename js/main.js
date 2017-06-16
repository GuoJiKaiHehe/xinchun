var music=document.getElementById("music").getElementsByTagName("img")[1];
var audio=document.getElementById("tagMusic");
var page1=document.getElementById("page1");

page1.addEventListener("touchstart",function(){
    // this.style.transform="translate(0,-100%)";
    // this.style.display="none"
},false)
music.addEventListener("touchstart",function(){
    if(audio.paused){
        audio.play();
        this.style.animationPlayState="running"
    }else{
        audio.pause();
        this.style.animationPlayState="paused"
    }
},false)

audio.addEventListener("ended", function(){
    this.style.animationPlayState="paused"
}, false)

