let A = [1, 4, 7, 10, 13, 16, 19];
let B = [2, 5, 8, 11, 14, 17, 20];
let C = [3, 6, 9, 12, 15, 18, 21];
let total = [];
let round = 0;
let isDealing = false;

async function renderBoard() {
    isDealing = true;
    document.getElementById("instruction").innerText = `Round ${round + 1}: Click the ROW your number is in.`;
    
    document.getElementById('pile-A').innerHTML = "";
    document.getElementById('pile-B').innerHTML = "";
    document.getElementById('pile-C').innerHTML = "";

    for (let i = 0; i < 7; i++) {
        await dealCard('A', A[i], i);
        await dealCard('B', B[i], i);
        await dealCard('C', C[i], i);
    }
    isDealing = false;
}

function dealCard(pileId, cardNumber, index) {
    return new Promise(resolve => {
        setTimeout(() => {
            const container = document.getElementById(`pile-${pileId}`);
            const div = document.createElement('div');
            div.className = 'card';
            div.innerText = cardNumber;
            div.style.left = (index * 60) + "px"; // Spacing for horizontal fan
            container.appendChild(div);
            resolve();
        }, 150); 
    });
}

function handleChoice(choice) {
    if (isDealing) return;
    round++;

    // --- YOUR PYTHON LOGIC ---
    let temp = [...B];
    if (choice === 'A') { B = [...A]; A = [...temp]; }
    else if (choice === 'C') { B = [...C]; C = [...temp]; }
    
    total = [...A, ...B, ...C];

    let j = 0;
    for (let i = 0; i < 7; i++) {
        A[i] = total[j];
        B[i] = total[j + 1];
        C[i] = total[j + 2];
        j += 3;
    }

    if (round < 3) {
        renderBoard();
    } else {
        showWinner();
    }
}

function showWinner() {
    // Hide game, show result
    document.getElementById('game-ui').classList.add('hidden');
    document.getElementById('instruction').classList.add('hidden');
    
    const resultScreen = document.getElementById('result-screen');
    const finalText = document.getElementById('final-text');
    const finalCard = document.getElementById('final-card-display');
    
    resultScreen.classList.remove('hidden');
    finalText.innerText = "The number in your mind is...";
    finalCard.innerText = total[10]; // The 11th card
}

renderBoard();