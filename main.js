game = {
    playerHand: '',
    aiHand: '',
}
summaryGame = {
    number: 0,
    wins: 0,
    losses: 0,
    draws: 0
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
function checkResult(player, ai){
    if(player === ai){
        console.log('Remis');
        return 'draw'
    } else if (player === 'kamień' && ai === 'nożyczki' || player === 'papier' && ai === 'kamień' || player === 'nożyczki' && ai === 'papier'){
        console.log('wygrałeś');
        return 'wins'
    }else{
        console.log('Przegrałeś');
        return 'losses'
    }
}
function showReult(player, ai, result){
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="your-choice"]').textContent = player;
}


function startGame(){

    if(!game.playerHand){
        alert('Wybierz opcje rączki');
    }
    aiChoice();
    const result = checkResult(game.playerHand, game.aiHand);
    
    showReult(game.playerHand, game.aiHand, result);
}




document.querySelector('.start').addEventListener('click', startGame);


hands.forEach(hand => hand.addEventListener('click', selectPlayer));

