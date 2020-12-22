// ---------------------------- Attributes & objects ----------------------------

let throwCount = 0;
let gameOver = false;

const dice = [{
    id: 0,
    value: 6,
    locked: false,
}, {
    id: 1,
    value: 6,
    locked: false,
}, {
    id: 2,
    value: 6,
    locked: false,
}, {
    id: 3,
    value: 6,
    locked: false,
}, {
    id: 4,
    value: 6,
    locked: false,
},]

const inputs = [{
    id: "ones",
    value: 0,
    locked: false,
    selected: false,
}, {
    id: "twos",
    value: 0,
    locked: false,
    selected: false,
}, {
    id: "threes",
    value: 0,
    locked: false,
    selected: false,
}, {
    id: "fours",
    value: 0,
    locked: false,
    selected: false,
}, {
    id: "fives",
    value: 0,
    locked: false,
    selected: false,
}, {
    id: "six",
    value: 0,
    locked: false,
    selected: false,
}, {
    id: "onePair",
    value: 0,
    locked: false,
    selected: false,
}, {
    id: "twoPair",
    value: 0,
    locked: false,
    selected: false,
}, {
    id: "threeSame",
    value: 0,
    locked: false,
    selected: false,
}, {
    id: "fourSame",
    value: 0,
    locked: false,
    selected: false,
}, {
    id: "fullHouse",
    value: 0,
    locked: false,
    selected: false,
}, {
    id: "smallStraight",
    value: 0,
    locked: false,
    selected: false,
}, {
    id: "largeStraight",
    value: 0,
    locked: false,
    selected: false,
}, {
    id: "chance",
    value: 0,
    locked: false,
    selected: false,
}, {
    id: "yatzy",
    value: 0,
    locked: false,
    selected: false,
}]

// ---------------------------- Event handlers ----------------------------

/** the listener is added to the roll button */
document.getElementById("RollButton").addEventListener("click", () => {
    for (let i = 0; i < inputs.length; i++) {
        if (throwCount > 0) {
            if (inputs[i].selected) {
                inputs[i].locked = true;
                throwCount = 0;
                resetOpacity();
            }
        } else {
            resetOpacity();
            break;
        }
    }
    roll();
    updateInputFields();
    clearSelected();
    selectedLockedInput();
});

/** the listeners are added to the five dice */
for (let i = 0; i < dice.length; i++) {
    document.getElementById("dice" + i).addEventListener("click", () => {
        if (throwCount != 3) {
            lockUnlockDie(dice[i]);
        }
    });
}

/** the listeners are added to the 6 same value inputs */
for (let i = 0; i < 6; i++) {
    document.getElementById("input" + i).addEventListener("click", () => {

        if (!inputs[i].locked) {
            clearSelected();
            unlockButton();
            sameValuePoints(i);
            inputs[i].selected = true;
        }
        selectedLockedInput();
    });
}

/** the listeners are added to the rest of the input fields */
for (let i = 6; i < inputs.length; i++) {
    document.getElementById("input" + i).addEventListener("click", () => {
        if (!inputs[i].locked) {
            clearSelected();
            unlockButton();
            onePairPoints();
            inputs[i].selected = true;
        }
        selectedLockedInput();
    });
}

/** the listeners are added to the new game button */
document.getElementById("newGameButton").addEventListener("click", () => {
    newGame();
});

// ---------------------------- Core game functionality ----------------------------

/** Function returns an array 
containing the frequency of each face value.
Index 0 is not used, so each index represents the corrosponding face value */
function frequency() {
    let freq = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < dice.length; j++) {
            if (dice[j].value == i) {
                freq[i]++;
            }
        }
    }
    return freq;
}

/** TO-DO: Function returns the 
highest same face value points */
function sameValuePoints(faceValue) {
    return frequency()[faceValue + 1] * (faceValue + 1);
}

/** TO-DO: Function returns the highest pair points
Returns 0 if there aren't any pairs */
function onePairPoints() {
    let oneP = frequency();
    var point = 0;
    for (let i = 0; i < 7; i++) {
        if (oneP[i] >= 2) {
            point = i * 2;
        }
    }
    return point;
}

/** TO-DO: Function returns the highest two pair points
Returns 0 if there aren't two pairs */
function twoPairPoints() {
    let twoP = frequency();
    var points = 0;
    var count = 0;
    for (let i = 0; i < 7; i++) {
        if (twoP[i] >= 2) {
            points += i * 2;
            count++;
        }
    }

    if (count == 2) {
        return points;
    } else {
        return 0;
    }
}

/** TO-DO: Function returns the points of three of a kind
Returns 0 if there aren't three of a kind */
function threeSamePoints() {
    let threeSame = frequency();
    var points = 0;

    for (let i = 0; i < 7; i++) {
        if (threeSame[i] >= 3) {
            points = i * 3;
            break;
        }
    }
    return points;
}

/** TO-DO: Function returns the points of four of a kind
Returns 0 if there aren't four of a kind */
function fourSamePoints() {
    let fourSame = frequency();
    var points = 0;

    for (let i = 0; i < 7; i++) {
        if (fourSame[i] >= 4) {
            points = i * 4;
            break;
        }
    }
    return points;
}

/** TO-DO: Function returns the points of a full house
Returns 0 if there's no full house */
function fullHousePoints() {
    var twoSame = 0;
    var threeSame = 0;
    let full = frequency();

    for (let i = 0; i < 7; i++) {
        if (full[i] >= 3) {
            threeSame = i * 3;
        } else if (full[i] >= 2) {
            twoSame = i * 2;
        }
    }

    if (threeSame != 0 && twoSame != 0) {
        return threeSame + twoSame;
    } else {
        return 0;
    }
    if (!inputs[10].locked) {
        inputs[10].selected = true;
    }

}

/** TO-DO: Function returns the points of a small straight
Returns 0 if there's not a small straight (1, 2, 3, 4 ,5) */
function smallStraightPoints() {
    let freq = frequency();
    for (let i = 1; i < freq.length - 1; i++) {
        if (freq[i] != 1) {
            return 0;
        }
    }
    return 15;
}

/** TO-DO: Function returns the points of a large straight
Returns 0 if there's not a large straight (2, 3, 4, 5, 6) */
function largeStraightPoints() {
    let freq = frequency();
    for (let i = 2; i < freq.length; i++) {
        if (freq[i] != 1) {
            return 0;

        }
    }
    return 20;
}

/** TO-DO: Function returns the points for chance (sum of all face values) */
function chancePoints() {
    let sum = 0;
    for (let i = 0; i < dice.length; i++) {
        sum += dice[i].value;
    }
    return sum;
}

/** TO-DO: Function returns the points for yatzy (50 points)
Returns 0 if the five dice are not showing the same face value */
function yatzyPoints() {
    let freq = frequency();
    for (let i = 1; i < freq.length; i++) {
        if (freq[i] == 5) {
            return 50;

        }
    }
    return 0;
}

/** TO-DO: Function returns all 
results possible with the current face values */
function getResults() {
    let results = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 6; i++) {
        results[i] = sameValuePoints(i);
    }
    results[6] = onePairPoints();
    results[7] = twoPairPoints();
    results[8] = threeSamePoints();
    results[9] = fourSamePoints();
    results[10] = fullHousePoints();
    results[11] = smallStraightPoints();
    results[12] = largeStraightPoints();
    results[13] = chancePoints();
    results[14] = yatzyPoints();

    return results;
}

// ---------------------------- Functionality implemented with GUI ----------------------------

//* Roll the dices when button is clicked */
function roll() {
    if (!gameOver) {
        for (let i = 0; i < dice.length; i++) {
            if (dice[i].locked) {
                console.log("Die no. " + i + " is locked with value: " + dice[i].value);
            } else {
                let num = Math.floor(Math.random() * 6) + 1;
                let pic = "pic/" + num + ".png";
                document.getElementById("dice" + i).innerHTML = '<img src="' + pic + '" width="50" height="50">';
                dice[i].value = num;
            }
        }
        throwCount += 1;
        document.getElementById("turn").innerHTML = "Turn: " + throwCount;
        if (throwCount == 3) {
            const button = document.querySelector("button");
            button.disabled = true;
        }
    }
}

/** Function locks/unlocks the selected die */
function lockUnlockDie(die) {
    if (throwCount > 0) {
        let num = die.id;
        let element = document.getElementById("dice" + num);
        if (die.locked) { // unlock or lock
            die.locked = false;
            element.style.opacity = "1";
        } else {
            die.locked = true;
            element.style.opacity = "0.5";
        }
    }
}

/** clear selected */
function clearSelected() {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].selected = false;
        document.getElementById("input" + i).classList.remove("selectedTrue");
    }
}

/** unlock button */
function unlockButton() {
    if (throwCount == 3) {
        const button = document.querySelector("button");
        button.disabled = false;
    }
}

/** reset opacity on dice */
function resetOpacity() {
    for (let i = 0; i < dice.length; i++) {
        let element = document.getElementById("dice" + i);
        dice[i].locked = false;
        element.style.opacity = "1";
    }
}

/** update all unlocked input fields */
function updateInputFields() {
    let results = getResults();
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].locked) {
            inputs[i].value = results[i];
            document.getElementById("input" + i).value = results[i];
        }
    }
    sumBonus();
    total();
}

/** function controlling the selected/locked colors */
function selectedLockedInput() {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].locked == true) {
            document.getElementById("input" + i).classList.add("lockedTrue");
        } else if (inputs[i].selected == true) {
            document.getElementById("input" + i).classList.add("selectedTrue");
        }
    }
}

/** checking if all of the first 6 lines are locked. If they are locked, the sum and bonus will be shown */
function sumBonus() {
    let sum = 0; // prøv let
    if (inputs[0].locked == true && inputs[1].locked == true && inputs[2].locked == true && inputs[3].locked == true && inputs[4].locked == true && inputs[5].locked == true) {
        for (let i = 0; i < 6; i++) {
            let num = inputs[i].value;
            sum += num;
        }
    }
    document.getElementById("sum").value = sum;

    if (sum >= 63) {
        document.getElementById("bonus").value = 50;
    } else {
        document.getElementById("bonus").value = 0;

    }
}

// checking if all 15 fields are locked. If they are, total is shown
function total() {
    let num = 0;
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].locked == true) {
            num++;
            sum += inputs[i].value;
        }
    }
    if (num == 15) {
        let bonus = parseInt(document.getElementById("bonus").value);
        document.getElementById("total").value = sum + bonus;
        gameOver = true;

        /** -- First solution to the pop-up window asking for a new game --
        
        if (confirm("You're score ended at: " + (sum + bonus) + "Want to play again?")) {
            resetGame();
        }
        */
    }
}

/** function connected to the button "new game" (Second solution to the pop-up window) */
function newGame() {
    if (confirm("Want to play again?")) {
        resetGame();
    }
}

/** reset game */
function resetGame() {
    for (let i = 0; i < dice.length; i++) {
        dice[i].locked = false;
        dice[i].value = 0;
        lockUnlockDie(dice[i]);
    }
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].locked = false;
        inputs[i].selected = false;
        inputs[i].value = 0;
        document.getElementById("input" + i).value = 0;
        document.getElementById("input" + i).classList.remove("lockedTrue");
        document.getElementById("input" + i).classList.remove("selectedTrue");
    }
    document.getElementById("total").value = 0;
    document.getElementById("bonus").value = 0;
    document.getElementById("sum").value = 0;
    unlockButton();
    throwCount = 0;
    gameOver = false;
}