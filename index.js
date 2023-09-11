// MODEL ////////////////////////////////////////////////////////////////////////////////
const app = document.getElementById('app');

const alphabetArray = "abcdefghijklmnopqrstuvwxyz æøå";
const morseCodeArray =  [ 
    '.-', '-...', '-.-.', '-..', '.', '..-.',
    '--.', '....', '..', '.---', '-.-', '.-..',
    '--', '-.', '---', '.--.', '--.-', '.-.',
    '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..', ' ', '·−·−', '−−−·', '·−−·−'
];
let allChars = "";

// VIEW /////////////////////////////////////////////////////////////////////////////////
updateView()
function updateView() {
let html = /*HTML*/ `
    <input
    type="text"
    id="user-input"
    placeholder="Translate to morse code..."
    onChange="translateToMorseCode(this)">
    <div>
        <p>${allChars || ""}</p>
    </div>
`
app.innerHTML = html
}

// CONTROLLER ///////////////////////////////////////////////////////////////////////////
function translateToMorseCode(userInput) {

    let userInputValue = userInput.value.toLowerCase();

    for (var i = 0; i < userInputValue.length; i++) {
        for (let j = 0; j < alphabetArray.length; j++) {
            if (userInputValue[i] == alphabetArray[j]) {
                allChars += morseCodeArray[j];
            }
        }
    }

    updateView()
    allChars = "";
}
