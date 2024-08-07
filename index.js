for(let i=0;i<3;i++){
    document.querySelectorAll('button')[i].addEventListener('click',()=>{
        const screen=document.querySelector(`.screen_${i}`)
        screen.style.display="flex"
        screen.querySelector('button').addEventListener('click',()=>{back(i)})
        window.addEventListener('keydown',(e)=>{
            if(e.key=="Escape"){
                back(i)
            }
        })
        screen.addEventListener('click',(event)=>{
            if(event.target===event.currentTarget){
                back(i)
            }
        })
    })
}

function back(i){
    const screen=document.querySelector(`.screen_${i}`)
    screen.style.display="none"
}