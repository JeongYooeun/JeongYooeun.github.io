let currentTrialChoice;

/* PRACTICE ROUND */

function choiceMadeInPracticeRound(currentChoice) {
    currentTrialChoice = currentChoice;
    //console.log('We chose: ' + currentTrialChoice);

    // Fetch the chosen machine ID and associated cost, return, and risk
    chosenMachineLabel = allPracticeMachines[0][currentTrialChoice].label;
    chosenMachineCost = allPracticeMachines[0][currentTrialChoice].currentCost;
    chosenMachineReturnLevel = allPracticeMachines[0][currentTrialChoice].returnLevel;
    chosenMachineRiskLevel = allPracticeMachines[0][currentTrialChoice].riskLevel;
    //console.log('chosenMachineLabel is: ' + chosenMachineLabel);
    //console.log('chosenMachineCost is: ' + chosenMachineCost);
    //console.log('chosenMachineReturnLevel is: ' + chosenMachineReturnLevel);
    //console.log('chosenMachineRiskLevel is: ' + chosenMachineRiskLevel);

    // Calculate the reward
    reward = determineRewardInPracticeRound(chosenMachineReturnLevel, chosenMachineRiskLevel);
    //console.log('You made ' + reward + ' points');
    //console.log('You spent ' + chosenMachineCost + ' points');

    //Update points
    practiceRoundAccumulatedPoints = practiceRoundAccumulatedPoints - chosenMachineCost + reward;
    //console.log('accumulatedPoints is: ' + practiceRoundAccumulatedPoints);
    practiceRoundRoundPoints = practiceRoundRoundPoints - chosenMachineCost + reward;
    //console.log('roundPoints is: ' + practiceRoundRoundPoints);

    displayResultsInPracticeRound();
    animateReward(currentTrialChoice, reward, chosenMachineCost);
    fadeElement('trialPrompt');

    // Show the button
    showNextButton();
};

function determineRewardInPracticeRound(returnLevel, riskLevel) {
    let reward;
    do {
        reward = Math.round(jsPsych.randomization.sampleNormal(returnLevel, riskLevel));
    } while (reward <= 0 || reward > 400);
    
    return reward;
};

function displayResultsInPracticeRound() {
    document.getElementById('tokenNumber').innerHTML = practiceRoundRoundPoints;
    document.getElementById('accumulatedNumber').innerHTML = practiceRoundAccumulatedPoints;
    document.getElementById('spinNumber').innerHTML = (numberOfPracticeTrials - 1 - trialCount);
};

function nextTrialInPracticeRound() {
    trialCount++; // Increase trialCount by 1 as soon as the next button is clicked

    if (trialCount == numberOfPracticeTrials) {
        trialCount = 0;
    };

    jsPsych.finishTrial();
};

function updateSlotMachineCostsInPracticeRound(slotMachineNumber) {
    document.getElementById('slotMachine' + slotMachineNumber).querySelector('.costNumber').innerHTML = allPracticeMachines[0][slotMachineNumber].currentCost;
};


/* ACTUAL CHOICE TRIALS */

function choiceMade(currentChoice, blockNumber) {
    currentTrialChoice = currentChoice;
    //console.log('We chose: ' + currentTrialChoice);

    // Fetch the chosen machine ID and associated cost, return, and risk
    chosenMachineLabel = slotMachineArray[blockNumber][currentTrialChoice].label;
    chosenMachineCost = slotMachineArray[blockNumber][currentTrialChoice].currentCost;
    chosenMachineReturnLevel = slotMachineArray[blockNumber][currentTrialChoice].returnLevel;
    chosenMachineRiskLevel = slotMachineArray[blockNumber][currentTrialChoice].riskLevel;
    //console.log('chosenMachineLabel is: ' + chosenMachineLabel);
    //console.log('chosenMachineCost is: ' + chosenMachineCost);
    //console.log('chosenMachineReturnLevel is: ' + chosenMachineReturnLevel);
    //console.log('chosenMachineRiskLevel is: ' + chosenMachineRiskLevel);

    // Calculate the reward
    reward = determineReward(chosenMachineReturnLevel, chosenMachineRiskLevel);
    //console.log('You made ' + reward + ' points');
    //console.log('You spent ' + chosenMachineCost + ' points');

    //Update points
    accumulatedPoints = accumulatedPoints - chosenMachineCost + reward;
    //console.log('accumulatedPoints is: ' + accumulatedPoints);
    roundPoints = roundPoints - chosenMachineCost + reward;
    //console.log('roundPoints is: ' + roundPoints);

    displayResults();
    animateReward(currentTrialChoice, reward, chosenMachineCost);
    fadeElement('trialPrompt');

    // Show the button
    showNextButton();
};

function determineReward(returnLevel, riskLevel) {
    const returnValues = {
        1: 10,
        2: 55,
        3: 100,
        4: 145,
        5: 190,
    };

    const riskValues = {
        1: 0.1, // 10%
        2: 0.2, // 20%
        3: 0.3, // 30%
        4: 0.4, // 40%
        5: 0.5, // 50%
    };

    let mean = returnValues[returnLevel];
    let sd = riskValues[riskLevel] * mean;
    let reward;
    do {
        //Draw a sample from a normal distribution with the specified mean and sd, round it to the nearest integer, and make sure positive integer is drawn
        reward = Math.round(jsPsych.randomization.sampleNormal(mean, sd));
    } while (reward <= 0 || reward > 400);
    
    return reward;
};

function displayResults() {
    document.getElementById('tokenNumber').innerHTML = roundPoints;
    document.getElementById('accumulatedNumber').innerHTML = accumulatedPoints;
    document.getElementById('spinNumber').innerHTML = (numberOfTrialsPerBlock - 1 - trialCount);
};

function showNextButton() {
    document.getElementById('nextButton').style.visibility = 'visible';
};

// Function called by the Next button's onclick event to proceed to the next trial
function nextTrial() {
    trialCount++; // Increase trialCount by 1 as soon as the next button is clicked

    // When trialCount reaches the numberOfTrialsPerBlock (i.e. choices made and next button clicked numberOfTrialsPerBlock times), reset the trialCount, and adds +1 to roundCount
    if (trialCount == numberOfTrialsPerBlock) {
        trialCount = 0;
        roundCount++;
    };

    jsPsych.finishTrial();
};

function updateSlotMachineCosts(slotMachineNumber, blockNumber) {
    document.getElementById('slotMachine' + slotMachineNumber).querySelector('.costNumber').innerHTML = slotMachineArray[blockNumber][slotMachineNumber].currentCost;
};
