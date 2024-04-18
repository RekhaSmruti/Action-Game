score=0;
cross=true;
audiogo=new Audio('gameover.wav')
audio=new Audio('bgmusic.mp3')
setTimeout(()=>{
    audio.play()
},1000);

document.onkeydown=function(e){
    console.log("Key code is:",e.keyCode)
    if(e.keyCode==38){
        dog=document.querySelector('.dog');
        dog.classList.add('animateDog');
        setTimeout(()=>{
            dog.classList.remove('animateDog')
        }, 400);
    }
    if(e.keyCode==39){
        dog=document.querySelector('.dog');
        dogX=parseInt(window.getComputedStyle(dog, null).getPropertyValue('left'));
        dog.style.left=dogX+250+"px";
    }
    if(e.keyCode==37){
        dog=document.querySelector('.dog');
        dogX=parseInt(window.getComputedStyle(dog, null).getPropertyValue('left'));
        dog.style.left=(dogX-200)+"px";
    }
}

setInterval(()=>{
    dog=document.querySelector('.dog');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(dog, null).getPropertyValue('right'));
    dy=parseInt(window.getComputedStyle(dog, null).getPropertyValue('bottom'));

    ox=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('right'));
    oy=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    console.log(offsetX, offsetY);
    if(offsetX<53 && offsetY<92){
        gameOver.innerHTML="Game Over - Reload to start over";
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(()=>{
            audiogo.pause();
            
        },3000)
        audio.pause();
    }
    else if(offsetX<140 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000);

        setTimeout(()=>{
            aniDuration=parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur=aniDuration-0.1;
            obstacle.style.animationDuration=newDur+'s';
        },500)
        
    }
},10);

function updateScore(score){
    scoreCont.innerHTML="Your Score:" +score;
}
