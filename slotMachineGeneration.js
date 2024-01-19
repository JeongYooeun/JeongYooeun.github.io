/* Practice Round */
function generatePracticeSlotMachines() {
    let slotMachinesforPracticeRound = [];
    let practiceRoundInitialCosts = jsPsych.randomization.shuffle([-3, -1, 1, 3]);
    //let practiceRoundCostCondition = jsPsych.randomization.shuffle([5, 5, -5, -5]);//is this confusing? - attach to this the trials instead?

    for (let i = 0; i < numberOfMachinesInPracticeRound; i++) { // 4 machines to be used for the practice round
        let newLabel = getLabel(i);
        let newInitialCost = 100 + practiceRoundInitialCosts[i]; // 97, 99, 101, 103
        let newCurrentCost = newInitialCost;
        let newRisk = 20; // All machines have the same risk
        let newReturn = 200; // All machines have the same return
        //let newCostCondition = practiceRoundCostCondition[i];
        let newHTML = getHTML(newLabel, i);
        let newPracticeSlotMachine = {
            label: newLabel,
            initialCost: newInitialCost,
            currentCost: newCurrentCost,
            riskLevel: newRisk,
            returnLevel: newReturn,
            //costCondition: newCostCondition,
            choiceCount: 0,
            html: newHTML,
        };
        slotMachinesforPracticeRound.push(newPracticeSlotMachine);
    }
    allPracticeMachines.push(slotMachinesforPracticeRound);
};

/* Actual Choice Rounds */
function giveShuffledVariables() {
    return jsPsych.randomization.shuffle([1, 2, 3, 4, 5]);
};

function getLabel(slotMachineNumber) {
    return String.fromCharCode(65 + slotMachineNumber);
};

function generateSetOfSlotMachines(blockTypeConditions) {// This is done per each block type
    let machineLabelArray = [];

    for (let i = 0; i < maximumNumberOfMachinesPerTrial; i++) {// This is done per each block type
        let machineInfo = [getLabel(i), giveShuffledVariables(), giveShuffledVariables()];
        machineLabelArray.push(machineInfo);
    }

    for (let i = 0; i < numberOfBlocksPerType; i++) {// Per each block type, run 5 times to generate 5 blocks per type
        let slotMachinesForThisBlock = [];

        for (let j = 0; j < blockTypeConditions.numberOfOptions; j++) {// Runs up to 6 times, depending on the number of machines to be used in the block
            let newInitialCost = getInitialCost();
            let newCurrentCost = newInitialCost;
            let newLabel = machineLabelArray[j][0];
            let newRisk = machineLabelArray[j][1][i];// i = which block number (from 1 to 5) we're generating, j = the machine number (from 1 to 6) we're generating
            let newReturn = machineLabelArray[j][2][i];
            let newHTML = getHTML(newLabel, j);
            let newSlotMachine = {
                label: newLabel,
                initialCost: newInitialCost,
                currentCost: newCurrentCost,
                riskLevel: newRisk,
                returnLevel: newReturn,
                choiceCount: 0,
                html: newHTML,
                numberOfOptionsCondition: blockTypeConditions.numberOfOptions,
                costOfInvestigationCondition: blockTypeConditions.costOfInvestigation,
            };
            slotMachinesForThisBlock.push(newSlotMachine);
        }
        allGeneratedMachines.push(slotMachinesForThisBlock);
    }

};

function getInitialCost() {
    let initialCost;
    do {
        initialCost = Math.round(jsPsych.randomization.sampleNormal(100, 10));
    } while (initialCost < 80 || initialCost > 120);
    return initialCost;
};

function getHTML(slotMachineLabel, slotMachineNumber) {
    const slotMachine = document.createElement('div');
    slotMachine.classList.add('slotMachine');
    slotMachine.id = 'slotMachine' + slotMachineNumber;

    const slotLabel = document.createElement('div');
    slotLabel.classList.add('slotLabel');
    slotLabel.innerHTML = slotMachineLabel;

    const slotInner = document.createElement('div');
    slotInner.classList.add('slotInner');

    const slotOuter = document.createElement('div');
    slotOuter.classList.add('slotOuter');

    const slotNumbers = document.createElement('div');
    slotNumbers.classList.add('slotNumbers');

    const slotNumber1 = document.createElement('div');
    slotNumber1.classList.add('slotNumber');

    const slotNumber2 = document.createElement('div');
    slotNumber2.classList.add('slotNumber');

    const slotNumber3 = document.createElement('div');
    slotNumber3.classList.add('slotNumber');

    const slotHandle = document.createElement('div');
    slotHandle.classList.add('slotHandle');

    const slotStick = document.createElement('div');
    slotStick.classList.add('slotStick');

    const slotBar = document.createElement('div');
    slotBar.classList.add('slotBar');

    const slotCost = document.createElement('div');

    const costText = document.createElement('div');
    costText.classList.add('costText');
    costText.innerHTML = 'COST';
    const costNumber = document.createElement('div');
    costNumber.classList.add('costNumber');

    slotCost.classList.add('slotCost');
    slotCost.append(costText, costNumber);

    slotNumbers.append(slotNumber3);
    slotNumbers.append(slotNumber2);
    slotNumbers.append(slotNumber1);
    slotInner.append(slotNumbers);
    slotOuter.append(slotInner);
    slotOuter.append(slotLabel);
    slotMachine.append(slotOuter);

    slotStick.append(slotBar);
    slotHandle.append(slotStick);
    slotMachine.append(slotHandle);

    slotOuter.append(slotCost);

    return slotMachine; // Returns the html elements
};
