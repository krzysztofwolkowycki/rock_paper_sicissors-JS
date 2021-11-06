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
        return 'draws'
    } else if (player === 'kamień' && ai === 'nożyczki' || player === 'papier' && ai === 'kamień' || player === 'nożyczki' && ai === 'papier'){
        console.log('wygrałeś');
        return 'wins'
    }else{
        console.log('Przegrałeś');
        return 'losses'
    }
}
function showReult(player, ai, result){
    document.querySelector('p.numbers span').textContent = ++summaryGame.number;
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    if(result === 'wins'){
        document.querySelector('[data-summary="who-win"]').textContent = 'Wygrałeś';
        document.querySelector('p.wins span').textContent = ++summaryGame.wins;
        document.querySelector('[data-summary="who-win"]').style.color = 'green';
    }else if(result === 'losses'){
        document.querySelector('[data-summary="who-win"]').textContent = 'Przegrałeś :(';
        document.querySelector('p.losses span').textContent = ++summaryGame.losses;
        document.querySelector('[data-summary="who-win"]').style.color = 'red';
    }else{
        document.querySelector('[data-summary="who-win"]').textContent = 'Remis';
        document.querySelector('p.draws span').textContent = ++summaryGame.draws;
        document.querySelector('[data-summary="who-win"]').style.color = 'gray';
    }

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

