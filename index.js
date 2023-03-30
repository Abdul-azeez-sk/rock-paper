const randomNum = Math.floor(Math.random()*3);
console.log(randomNum);
let rock=0;
let paper=1;
let scissor=2;
const select=document.getElementById('selection');
const computerdisplay=document.getElementById('computer');
const resultdiv=document.getElementById('result');


const rockbutton=document.getElementById('rock');
const paperbutton=document.getElementById('paper');
const scissorbutton=document.getElementById('scissors');
const refreshpage=document.getElementById('refresh');
refreshpage.addEventListener('click',()=>{
    location.reload();
})
rockbutton.addEventListener('click', ()=>{
    select.innerHTML="You selected Rock";
    if(randomNum==rock){
        console.log('draw');
        
        
        computerdisplay.innerHTML="computer selected Rock";
        resultdiv.innerHTML="Draw, Try again.";


    }
    else if(randomNum==paper){
        console.log('lost');
        
        computerdisplay.innerHTML="computer selected paper";
        resultdiv.innerHTML="You lost";
    }
    else{
        console.log('won');
        computerdisplay.innerHTML="computer selected scissors";
        resultdiv.innerHTML="YOU WON";
    }
});
paperbutton.addEventListener('click',()=>{
    select.innerHTML="You selected Paper";
    if(randomNum==rock){
        console.log('won');
        
        
        computerdisplay.innerHTML="computer selected Rock";
        resultdiv.innerHTML="You won";


    }
    else if(randomNum==paper){
        console.log('draw');
        
        computerdisplay.innerHTML="computer selected paper";
        resultdiv.innerHTML="Draw";
    }
    else{
        console.log('lost');
        computerdisplay.innerHTML="computer selected scissors";
        resultdiv.innerHTML="you lost";
    }
});
scissorbutton.addEventListener('click',()=>{

    select.innerHTML="you selected Scissors";
    if(randomNum==rock){
        console.log('lost');
        
        
        computerdisplay.innerHTML="computer selected Rock";
        resultdiv.innerHTML="you lost";


    }
    else if(randomNum==paper){
        console.log('won');
        
        computerdisplay.innerHTML="computer selected paper";
        resultdiv.innerHTML="you won";
    }
    else{
        console.log('draw');
        computerdisplay.innerHTML="computer selected scissors";
        resultdiv.innerHTML="draw";
    }
})