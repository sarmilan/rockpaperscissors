ROCK PAPER SCISSORS
let rock = 1, paper = 2, scissors = 3;
function rps(inputP1, inputP2) {
    let result = inputP1 / inputP2;
    if ( result == 1) {
        console.log ('TIE');
    } else if ( result == 1/2 || 2) {
        console.log('PAPER WINS');
    } else if ( result == 1/3 || 3) {
        console.log('ROCK WINS');
    } else if (result == 2/3 || 3/2) {
        console.log('SCISSORS WINS');
    }
}
rps(rock, paper);