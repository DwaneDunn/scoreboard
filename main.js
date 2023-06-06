import './style.css';

const homeScoreEl = document.getElementById('home-score');
const guestScoreEl = document.getElementById('guest-score');

const homeScoreBtns = document.getElementById('home-score-btns');
const guestScoreBtns = document.getElementById('guest-score-btns');

let homeScore = 0;
let guestScore = 0;

function increaseHomeScore(e) {
    const btnClicked = e.target.textContent;

    if (btnClicked === '+1') {
        homeScore += 1;
    }
    if (btnClicked === '+2') {
        homeScore += 2;
    }
    if (btnClicked === '+3') {
        homeScore += 3;
    }

    homeScoreEl.textContent = homeScore;
}

function increaseGuestScore(e) {
    const btnClicked = e.target.textContent;

    if (btnClicked === '+1') {
        guestScore += 1;
    }
    if (btnClicked === '+2') {
        guestScore += 2;
    }
    if (btnClicked === '+3') {
        guestScore += 3;
    }

    guestScoreEl.textContent = guestScore;
}

homeScoreBtns.addEventListener('click', increaseHomeScore);
guestScoreBtns.addEventListener('click', increaseGuestScore);
