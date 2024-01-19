function generateTimelineEvents() {

    //All events to be added BEFORE the blockInstruction and trial
    addConsent();
    addInstructions();
    addPracticeTrials(); 

    //This for-loop goes through all conditions
    for (let i = 0; i < timelineArray.length; i++) {
        let slotMachinesHTML = []; // Array to be pushed as choices

        //This for-loop goes through all machines in that condition, and pushes it to a separate array of HTML-strings
        for (let x = 0; x < timelineArray[i].length; x++) {
            slotMachinesHTML.push(timelineArray[i][x].html.outerHTML);
        }

        //This is the current condition we're using as the basis for the coming trials
        let currentCondition = shuffledFactorialDesign[i];

        let veryFirstEvent = true;

        //This for-loop runs a set number of times, equal to the number of trials we wish to create for each block
        for (let y = 0; y < numberOfTrialsPerBlock; y++) {
            if (veryFirstEvent) {
                //Each time this for-loop runs for the first time, we add the blockInstructions into the timelineArray
                addBlockStart(i);
                veryFirstEvent = false;
            }

            const trial = {
                type: jsPsychHtmlButtonResponse,
                stimulus: `<div id="trialPrompt">CLICK ON A<br>SLOT MACHINE<br>TO PLAY</div>`,
                choices: slotMachinesHTML,
                prompt: '<button id="nextButton" class="bigButton" style="visibility:hidden;" onclick="nextTrial()">NEXT >></button>',
                response_ends_trial: false,
                data: {
                    task: 'bandit_choice',
                    block_number: i,
                    trial_number: y,// Placeholder
                    condition_investCost: currentCondition.costOfInvestigation,
                    condition_optionNum: currentCondition.numberOfOptions,
                    bank_before_round: roundPoints,// Placeholder
                    bank_after_round: roundPoints,// Placeholder
                    bank_before_accum: accumulatedPoints,// Placeholder
                    bank_after_accum: accumulatedPoints,// Placeholder
                },
                save_trial_parameters: {
                    trial_type: false,
                },
                on_start: function (trial) {
                    trial.data.bank_before_round = roundPoints;// Update
                    trial.data.bank_before_accum = accumulatedPoints;// Update
                    trial.data.trial_number = y;// Update
                },
                on_load: function () {
                    //console.log('We are in Round #' + roundCount);
                    //console.log('We are in Trial #' + trialCount);
                    //console.log('Accumulated Points: ' + accumulatedPoints);
                    //console.log('Round Points: ' + roundPoints);

                    addForegroundVisuals((numberOfTrialsPerBlock - trialCount), roundPoints, accumulatedPoints, (roundCount + 1));

                    let clickedInThisTrial = false;
                    // Add event listener to the choice buttons
                    const slotMachinesVisual = document.querySelectorAll('.slotMachine');
                    slotMachinesVisual.forEach((button, index) => {
                        updateSlotMachineCosts(index, i);
                        button.addEventListener('click', function () {
                            if (!clickedInThisTrial) {
                                toggleAnimation(index);
                                clickedInThisTrial = true;
                                // Call the choiceMade function with the index and the current block
                                choiceMade(index, i);
                            }
                        });
                    });
                },
                on_finish: function (data) {
                    let allMachineLabels = [];
                    let allMachineCosts = [];
                    let allMachineReturnLevels = [];
                    let allMachineRiskLevels = [];

                    for (let z = 0; z < slotMachineArray[i].length; z++) {
                        allMachineLabels.push(slotMachineArray[i][z].label);
                        allMachineCosts.push(slotMachineArray[i][z].currentCost);
                        allMachineReturnLevels.push(slotMachineArray[i][z].returnLevel);
                        allMachineRiskLevels.push(slotMachineArray[i][z].riskLevel);
                    }

                    // Update choice count and cost
                    chosenMachineLabel = slotMachineArray[i][currentTrialChoice].label; // Label of the chosen machine (A, B, C)
                    let updatedChoiceCount = slotMachineArray[i][currentTrialChoice].choiceCount += 1;
                    slotMachineArray[i][currentTrialChoice].choiceCount = updatedChoiceCount; // Update the chosen machine count in the array

                    accumulatedCost = updatedChoiceCount * shuffledFactorialDesign[i].costOfInvestigation;
                    let initialCost = slotMachineArray[i][currentTrialChoice].initialCost;
                    investCost = initialCost + accumulatedCost; // Total investigation cost
                    slotMachineArray[i][currentTrialChoice].currentCost = investCost; // Update the current cost in the array

                    // Store the data
                    data.bank_after_round = roundPoints;// Update
                    data.bank_after_accum = accumulatedPoints;// Update
                    data.choice = currentTrialChoice;
                    data.chosen_machine = chosenMachineLabel;
                    data.investigation_cost = chosenMachineCost;
                    data.reward = reward;
                    data.all_machine_labels = allMachineLabels;
                    data.all_machine_costs = allMachineCosts;
                    data.all_machine_returnLevels = allMachineReturnLevels;
                    data.all_machine_riskLevels = allMachineRiskLevels;

                    // Update the total game points to be used in feedback
                    totalGamePoints = accumulatedPoints;
                },
                //trial_duration: trialTimeOut,
            };
            timeline.push(trial);
        }
        //All events to be added AT THE END of each block
    }
    //All events to be added AFTER all the rounds (i.e., rounds and trials all cleared)
    addFeedback();
    addPostSurvey();
    addDebrief();
};
