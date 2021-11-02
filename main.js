game = {
    playerHand: '',
    aiHand: '',
}


const hands = [...document.querySelectorAll('.select img')];


function selectPlayer(){
    game.playerHand = this.dataset.option;
    console.log(`Player wybrał ${game.playerHand}`);
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px yellow';
}

function aiChoice(){
    game.aiHand = hands[Math.floor(Math.random()*3)].dataset.option;
    console.log(`Komputer wybrał ${game.aiHand}`);
    return hands[Math.floor(Math.random()*3)].dataset.option
}

function startGame(){
    if(!game.playerHand){
        alert('Wybierz opcje rączki');
    }

    aiChoice();
}




document.querySelector('.start').addEventListener('click', startGame);


hands.forEach(hand => hand.addEventListener('click', selectPlayer));

