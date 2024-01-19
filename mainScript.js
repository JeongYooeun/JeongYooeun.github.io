const jsPsych = initJsPsych({
    on_finish: function () {
        jsPsych.data.displayData(); // Display the raw data collected at the end for debugging
    },
});

/* Prolific info */
let subject_id = jsPsych.data.getURLVariable('PROLIFIC_PID');
let study_id = jsPsych.data.getURLVariable('STUDY_ID');
let session_id = jsPsych.data.getURLVariable('SESSION_ID');

// If there is no Prolific ID, generate a random one
if (subject_id === null || typeof subject_id === 'undefined') {
    subject_id = jsPsych.randomization.randomID(10);
};

if (study_id === null || typeof study_id === 'undefined') {
    study_id = 'test';
};

if (session_id === null || typeof session_id === 'undefined') {
    session_id = jsPsych.randomization.randomID(5);
};

jsPsych.data.addProperties({
    subject_id: subject_id,
    study_id: study_id,
    session_id: session_id
});

/* Define the conditions */
const factors = {
    numberOfOptions: [3, 6],
    costOfInvestigation: [5, -5], // Higher, Lower
};

/* Initialize global variables*/
let factorialDesign;
let shuffledFactorialDesign;
let numberOfBlocksPerType = 5;
let maximumNumberOfMachinesPerTrial = 6;

let numberOfTrialsPerBlock = 15;

let allGeneratedMachines = [];
let timelineArray = []; // Array of arrays containing all slotmachines per each block. Never to be altered after it is generated.
let slotMachineArray = []; // An up-to-date array of changing values throughout the experiment, e.g., costs.

let investCost;
let reward;
let accumulatedPoints = 100;
let roundPoints = 100;
let chosenMachineLabel;
let chosenMachineCost;
let chosenMachineReturnLevel;
let chosenMachineRiskLevel;
let accumulatedCost = 0;
let trialTimeOut = 120000;
let totalGamePoints;
let flatPay = 2;
let bonusPay;

let numberOfPracticeTrials = 5;
let numberOfMachinesInPracticeRound = 4;
let allPracticeMachines = [];
let practiceRoundAccumulatedPoints = 100;
let practiceRoundRoundPoints = 100;

const timeline = [];

//After the timeline is generated, we use trialCount and roundCount to keep track of the information we're presenting to the user, and how the user has interacted with the experiment.
let trialCount = 0;
let roundCount = 0;


function startGame() {
    // Create an array of the full factorial design
    factorialDesign = jsPsych.randomization.factorial(factors, 1);

    // Generate the slot machines to be used for the practice round
    generateAllPracticeSlotMachines();
    //console.log('slot machines for the practice round');
    //console.log(allPracticeMachines);

    // Generate all the slot machines to be used for the choice trials
    generateAllSlotMachines();
    // Randomize the order of the conditions for each participant
    timelineArray = jsPsych.randomization.shuffle(allGeneratedMachines);
    slotMachineArray = timelineArray;
    //console.log('new timeline array');
    //console.log(timelineArray);

    // Between-block conditions for all blocks
    shuffledFactorialDesign = timelineArray.map(array => ({
        numberOfOptions: array[0].numberOfOptionsCondition,
        costOfInvestigation: array[0].costOfInvestigationCondition
    }));
    //console.log('shuffledFactorialDesign');
    //console.log(shuffledFactorialDesign);

    generateTimelineEvents();
    runTimeline();
    resizeContent();
};

function generateAllPracticeSlotMachines() {
    generatePracticeSlotMachines();
};

function generateAllSlotMachines() {
    for (let i = 0; i < factorialDesign.length; i++) {//for each block type
        generateSetOfSlotMachines(factorialDesign[i]);
    }
    //console.log('allGeneratedMachines below');
    //console.log(allGeneratedMachines);
};

function runTimeline() {
    jsPsych.run(timeline);
};

function endGame() {
    //console.log('hey');
};

// Wait until jspsych content wrapper loads and call the function addbackgroundvisuals
let observer = new MutationObserver((mutations, obs) => {
    let wait = document.querySelector(".jspsych-content-wrapper");
    if (wait) {
        addBackgroundVisuals();// styling and html elements
        obs.disconnect();
        return;
    }
});

observer.observe(document, {
    childList: true,
    subtree: true
});
