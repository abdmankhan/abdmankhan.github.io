const username = document.getElementById("username");
const un = document.getElementById("scorename");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;
    // username.addEventListener("keyup",()=>{
    //     //console.log(username.value);
    //     saveScoreBtn.disabled = !username.value;
    // });
un.innerHTML = localStorage.getItem('name');
// const mydate = document.getElementById('scoredate').innerHTML = new Date().toLocaleDateString();
const now = new Date();
const idate = now.toLocaleDateString();
    const itime = now.toLocaleTimeString();
    const mydate = document.getElementById('scoredate').innerHTML = itime + " " + idate;
saveHighScore = e => {
    console.log('clicked the save button');
    e.preventDefault();
};