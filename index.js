const cards = document.querySelectorAll('.memory-card');


let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(){
    
    this.classList.toggle('flip');
    
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
    }else{
        hasFlippedCard = false; 
        secondCard = this;
        
        if(firstCard.dataset.framework === secondCard.dataset.framework){
            firstCard.removeEventListener('click',flipCard)
            secondCard.removeEventListener('click',flipCard)
        }else{
            setTimeout(()=>{
                
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            },500);
        }
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));

(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random()*12);
        card.style.order = randomPos;
    });
})();
