const score1 = document.getElementById("score-1")
const score2 = document.getElementById("score-2")
const score3 = document.getElementById("score-3")
const score4 = document.getElementById("score-4")
const score5 = document.getElementById("score-5")
const score6 = document.getElementById("score-6")
let home = document.getElementById("display-home")
let guest = document.getElementById("display-away")
let homeScore = 0
let awayScore = 0

function addOne(){
    homeScore ++
    home.innerHTML = homeScore 
}

function addTwo(){
    homeScore += 2
    home.innerHTML = homeScore
}

function addThree(){
    homeScore += 3
    home.innerHTML = homeScore
}

function addOneAway(){
    awayScore ++
    guest.innerHTML = awayScore 
}

function addTwoAway(){
    awayScore += 2
    guest.innerHTML = awayScore
}

function addThreeAway(){
    awayScore += 3
    guest.innerHTML = awayScore
}