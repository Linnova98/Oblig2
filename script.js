// model
const emojiArray = ['&#x1F4B5', '&#x1F4B4', '&#x1F4B6','&#x1F4B7']
let points = 0;
let pointsPerClick = 1;
let emojiIndex = 0;
const scoreboardArray =[];

// view
render();

function render() {
    //var emoji = getEmoji(emojiIndex);
    document.getElementById('app').innerHTML = `
        <h3>MONEY CLICKER GAME!</h3>
        <p>Klikk på seddelen å se hva som skjer. Det er også mulig å teste ut knappene. For de som er markert med &#x1F4B8 må du ha like mange poeng som det står inne i parantesen. </p>
        
        <div id="image" onclick="doClick()">${emojiArray[emojiIndex]}</div>
        <div id="pointsInfo">${points}</div>
        
        <button class="bt1" onclick="buyUpgrade(10)">Update(10 &#x1F4B8)</button>
        <button class="bt2" onclick="buyCheats(100)">Cheats(100 &#x1F4B8)</button>
        <button class="bt3" onclick="antallPoeng()">Antall poeng </button>
        <button class="bt4" onclick="reset()">Reset</button>
        <button class="bt4" onclick="pushToScoreboard()">Add Score</button>
        
        <table>
            <tr>
                <th>Scoreboard</th>
            </tr>
            ${scoreFunction()}           
        </table>
    `;
}
render();
// controller
//Jeg prøvde, men fikk ikke til unit testing

function nextEmoji(){
    emojiIndex = ++emojiIndex < emojiArray.length ? emojiIndex : 0;
    render();
}

function buyUpgrade(upgradeCost) {
    if (points < upgradeCost) return;
    points -= upgradeCost;
    pointsPerClick++;
    render();
}

function buyCheats(cheatsUpgrade){
    if(points < cheatsUpgrade) return;
    points -= cheatsUpgrade;
    pointsPerClick*= 5;
    render();
}

function antallPoeng(){
    alert(`Du har ${points} poeng!`);
}

function reset(){
    points = 0;
    pointsPerClick = 1;
    emojiIndex = 0;
    render();
}

function pushToScoreboard(){
    scoreboardArray.push(points);
    render();
}

function scoreFunction(){
    let html = '';
    for (let i = 0; i < scoreboardArray.length; i++){
        html += `<tr><td>${scoreboardArray[i]}</td></tr>`;
    } 
    return html;
}