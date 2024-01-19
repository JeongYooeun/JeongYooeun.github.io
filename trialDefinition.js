function addConsent() {
    const consent = {
        type: jsPsychExternalHtml,
        url: 'external_html/consent.html',
        cont_btn: 'consentButton',
        on_load: function () {
            document.getElementById('noConsentButton').addEventListener('click', function () {
                // Redirect back to Prolific
                window.location.href = 'https://www.prolific.com/';
            });
        },
        data: {
            task: 'consent_form',
        },
        save_trial_parameters: {
            trial_type: false,
        },
    };
    timeline.push(consent);
};

function addInstructions() {
    const instructions = {
        type: jsPsychInstructions,
        pages: [
        `
        <div class="instructionsContainer">
            <p class="instructionsWelcome">Welcome to our study!</p>
            <div class="bodyText">
                <p>In this study, you're going to play a decision-making game.</p>
                <p>Imagine you're in a casino: you have several slot machines in front of you.</p>
                <p>Your task is to <span class="instructionsTextImportant">choose a slot machine to play</span>.</p>
            </div>
            <div class="instructionsWarning">
                IMPORTANT NOTE:<br>
                Please don't press the BACK or RELOAD button (or the F5 key) on your browser. This will end the game. You
                won't be able to participate in the study again, and we won't be able
                to compensate you for your time.
            </div>
        </div>
        `,
        `
        <div class="instructionsContainer">
            <div class="instructionsRules">
                Here's how the game works:<br>
                <ul class="rulesList">
                    <li class="rulesListItems"><span class="instructionsTextImportant">Each time you play a machine, you'll
                            get a reward (in the form of game points).</span><br>
                        Each slot machine offers different amounts of rewards - some machines are better than others.</li>
                    <li class="rulesListItems"><span class="instructionsTextImportant">Just like a real slot machine, you
                            need to pay to play.</span><br>
                        Each slot machine has a different cost. This will be shown below each machine.</li>
                    <li class="rulesListItems">When you choose a machine, you spend the machine's cost (deducted from your
                        game points) and earn a reward (added to your game points).
                        Be careful: sometimes the cost might be bigger than the reward you get!<br>
                        Your goal is to <span class="instructionsTextImportant">finish the game with as many game points as
                            possible</span> by earning rewards and managing costs.</li>
                    <li class="rulesListItems"><span class="instructionsTextImportant">You'll play 20 rounds in
                            total.</span><br>
                        In each round, you'll make 15 choices.</li>
                    <li class="rulesListItems"><span class="instructionsTextImportant">You start every new round with XX
                            points.</span><br> Your total game points are the sum of all the points you've earned in each
                        round.</li>
                    <li class="rulesListItems"><span class="instructionsTextImportant">At the beginning of every new round,
                            the machines reset.</span><br>Their costs and rewards will change every new round.</li>
                    <li class="rulesListItems">Your total game points will be converted into bonus compensation after you
                        complete the study <span class="instructionsTextImportant">(£1.00 for every XX points)</span>.
                        Your final payment will be the bonus plus the participation fee of £XX.</li>
                </ul>
            </div>
        </div>
        `,
        `
        <div class="roundCounter titleCounter instructionsLowOpacity">ROUND 3</div>
        <div id="trialPrompt" class="instructionsLowOpacity">CLICK ON A<br>SLOT MACHINE<br>TO PLAY</div>
        <div id="html-button-response-btngroup" class="instructionsLowOpacity">
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class="slotMachineInstruction" id="slotMachine0">
                    <div class="slotOuter">
                        <div class="slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">A</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">100</div>
                        </div>
                    </div>
                    <div class="slotHandle">
                        <div class="slotStick">
                            <div class="slotBar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class="slotMachineInstruction" id="slotMachine1">
                    <div class="slotOuter">
                        <div class="slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">B</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">97</div>
                        </div>
                    </div>
                    <div class="slotHandle">
                        <div class="slotStick">
                            <div class="slotBar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class="slotMachineInstruction" id="slotMachine2">
                    <div class="slotOuter">
                        <div class="slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">C</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">100</div>
                        </div>
                    </div>
                    <div class="slotHandle">
                        <div class="slotStick">
                            <div class="slotBar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class="slotMachineInstruction" id="slotMachine3">
                    <div class="slotOuter">
                        <div class="slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">D</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">105</div>
                        </div>
                    </div>
                    <div class="slotHandle">
                        <div class="slotStick">
                            <div class="slotBar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tokenCounter generalCounter">
            <div class="tokenIcon generalIcon"></div>
            <div class="tokenNumberInstruction generalNumber" id="tokenNumber">100</div>
        </div>
        <div class="spinCounter generalCounter instructionsLowOpacity">
            <div class="spinIcon generalIcon"></div>
            <div class="spinNumberInstruction generalNumber" id="spinNumber">15</div>
        </div>
        <div class="accumulatedCounter instructionsLowOpacity">
            <div class="accumulatedPreface">TOTAL POINTS SO FAR</div>
            <div class="accumulatedWrapper">
                <div class="tokenIcon accumulatedIcon"></div>
                <div class="accumulatedNumber generalNumber" id="accumulatedNumber">1024</div>
            </div>
        </div>
        <div class="arrowAndExplanation">
            <div class="arrow" id="tokenNumberArrow"></div>
            <div class="explanation" id="tokenNumberExplanation">The points you've earned in each round are displayed
                here.<br>
                You start each new round with XX points.</div>
        </div>
        `,
        `
        <div class="instructionsLowOpacity roundCounter titleCounter">ROUND 3</div>
        <div class="instructionsLowOpacity" id="trialPrompt">CLICK ON A<br>SLOT MACHINE<br>TO PLAY</div>
        <div class="instructionsLowOpacity" id="html-button-response-btngroup">
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class="slotMachineInstruction" id="slotMachine0">
                    <div class="slotOuter">
                        <div class="slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">A</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">100</div>
                        </div>
                    </div>
                    <div class="slotHandle">
                        <div class="slotStick">
                            <div class="slotBar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class="slotMachineInstruction" id="slotMachine1">
                    <div class="slotOuter">
                        <div class="slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">B</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">97</div>
                        </div>
                    </div>
                    <div class="slotHandle">
                        <div class="slotStick">
                            <div class="slotBar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class="slotMachineInstruction" id="slotMachine2">
                    <div class="slotOuter">
                        <div class="slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">C</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">100</div>
                        </div>
                    </div>
                    <div class="slotHandle">
                        <div class="slotStick">
                            <div class="slotBar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class="slotMachineInstruction" id="slotMachine3">
                    <div class="slotOuter">
                        <div class="slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">D</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">105</div>
                        </div>
                    </div>
                    <div class="slotHandle">
                        <div class="slotStick">
                            <div class="slotBar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="instructionsLowOpacity tokenCounter generalCounter">
            <div class="tokenIcon generalIcon"></div>
            <div class="tokenNumberInstruction generalNumber" id="tokenNumber">100</div>
        </div>
        <div class="instructionsLowOpacity spinCounter generalCounter">
            <div class="spinIcon generalIcon"></div>
            <div class="spinNumberInstruction generalNumber" id="spinNumber">15</div>
        </div>
        <div class="accumulatedCounter">
            <div class="accumulatedPreface">TOTAL POINTS SO FAR</div>
            <div class="accumulatedWrapper">
                <div class="tokenIcon accumulatedIcon"></div>
                <div class="accumulatedNumber generalNumber" id="accumulatedNumber">1024</div>
            </div>
        </div>
        <div class="arrowAndExplanation">
            <div class="arrow" id="accumulatedNumberArrow"></div>
            <div class="explanation" id="accumulatedNumberExplanation">Here you can see your total game points across all
                rounds so far.</div>
        </div>
        `,
        `
        <div class="instructionsLowOpacity roundCounter titleCounter">ROUND 3</div>
        <div class="instructionsLowOpacity" id="trialPrompt">CLICK ON A<br>SLOT MACHINE<br>TO PLAY</div>
        <div class="instructionsLowOpacity" id="html-button-response-btngroup">
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class="slotMachineInstruction" id="slotMachine0">
                    <div class="slotOuter">
                        <div class="slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">A</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">100</div>
                        </div>
                    </div>
                    <div class="slotHandle">
                        <div class="slotStick">
                            <div class="slotBar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class="slotMachineInstruction" id="slotMachine1">
                    <div class="slotOuter">
                        <div class="slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">B</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">97</div>
                        </div>
                    </div>
                    <div class="slotHandle">
                        <div class="slotStick">
                            <div class="slotBar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class="slotMachineInstruction" id="slotMachine2">
                    <div class="slotOuter">
                        <div class="slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">C</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">100</div>
                        </div>
                    </div>
                    <div class="slotHandle">
                        <div class="slotStick">
                            <div class="slotBar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class="slotMachineInstruction" id="slotMachine3">
                    <div class="slotOuter">
                        <div class="slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">D</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">105</div>
                        </div>
                    </div>
                    <div class="slotHandle">
                        <div class="slotStick">
                            <div class="slotBar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="instructionsLowOpacity tokenCounter generalCounter">
            <div class="tokenIcon generalIcon"></div>
            <div class="tokenNumberInstruction generalNumber" id="tokenNumber">100</div>
        </div>
        <div class="spinCounter generalCounter">
            <div class="spinIcon generalIcon"></div>
            <div class="spinNumberInstruction generalNumber" id="spinNumber">15</div>
        </div>
        <div class="instructionsLowOpacity accumulatedCounter">
            <div class="accumulatedPreface">TOTAL POINTS SO FAR</div>
            <div class="accumulatedWrapper">
                <div class="tokenIcon accumulatedIcon"></div>
                <div class="accumulatedNumber generalNumber" id="accumulatedNumber">1024</div>
            </div>
        </div>
        <div class="arrowAndExplanation">
            <div class="arrow" id="spinNumberArrow"></div>
            <div class="explanation" id="spinNumberExplanation">This shows how many choices you have left in this round.
            </div>
        </div>
        `,
        `
        <div class="instructionsLowOpacity roundCounter titleCounter">ROUND 3</div>
        <div class="instructionsLowOpacity" id="trialPrompt">CLICK ON A<br>SLOT MACHINE<br>TO PLAY</div>
        <div id="html-button-response-btngroup"><!--"jspsych-html-button-response-btngroup"-->
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class=" slotMachineInstruction" id="slotMachine0">
                    <div class="slotOuter">
                        <div class=" slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">A</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">100</div>
                        </div>
                    </div>
                    <div class=" slotHandle">
                        <div class="slotStick">
                            <div class="slotBar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class=" slotMachineInstruction" id="slotMachine1">
                    <div class="slotOuter">
                        <div class=" slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">B</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">97</div>
                        </div>
                    </div>
                    <div class=" slotHandle">
                        <div class="slotStick">
                            <div class="slotBar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class=" slotMachineInstruction" id="slotMachine2">
                    <div class="slotOuter">
                        <div class=" slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">C</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">100</div>
                        </div>
                    </div>
                    <div class=" slotHandle">
                        <div class="slotStick">
                            <div class="slotBar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class="slotMachineInstruction" id="slotMachine3">
                    <div class="slotOuter">
                        <div class=" slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">D</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">105</div>
                        </div>
                    </div>
                    <div class=" slotHandle">
                        <div class="slotStick">
                            <div class="slotBar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="instructionsLowOpacity tokenCounter generalCounter">
            <div class="tokenIcon generalIcon"></div>
            <div class="tokenNumberInstruction generalNumber" id="tokenNumber">100</div>
        </div>
        <div class="instructionsLowOpacity spinCounter generalCounter">
            <div class="spinIcon generalIcon"></div>
            <div class="spinNumberInstruction generalNumber" id="spinNumber">15</div>
        </div>
        <div class="instructionsLowOpacity accumulatedCounter">
            <div class="accumulatedPreface">TOTAL POINTS SO FAR</div>
            <div class="accumulatedWrapper">
                <div class="tokenIcon accumulatedIcon"></div>
                <div class="accumulatedNumber generalNumber" id="accumulatedNumber">1024</div>
            </div>
        </div>
        <div class="arrowAndExplanation">
            <div class="arrow" id="costArrow"></div>
            <div class="explanation" id="costExplanation">These are how much each machine costs to play.<br>
                <span style="font-size:32px;">
                    NOTE: the costs don't necessarily indicate how much reward you'll get from the machine. The costs may
                    also change as you play.</span>
            </div>
        </div>
        `,
        `
        <div class="instructionsLowOpacity roundCounter titleCounter">ROUND 3</div>
        <div id="trialPrompt" style="opacity:0.05">CLICK ON A<br>SLOT MACHINE<br>TO PLAY</div>
        <div id="html-button-response-btngroup">
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class="slotMachineInstruction disabledMachine unclickedMachine" id="slotMachine0">
                    <div class="slotOuter">
                        <div class="slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">A</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">100</div>
                        </div>
                    </div>
                    <div class="slotHandle">
                        <div class="slotStick">
                            <div class="slotBar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class="slotMachineInstruction disabledMachine unclickedMachine" id="slotMachine1">
                    <div class="slotOuter">
                        <div class="slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">B</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">97</div>
                        </div>
                    </div>
                    <div class="slotHandle">
                        <div class="slotStick">
                            <div class="slotBar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class="slotMachineInstruction disabledMachine clickedMachine" id="slotMachine2">
                    <div class="slotOuter">
                        <div class="slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">C</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">100</div>
                        </div>
                    </div>
                    <div class="slotHandle">
                        <div class="slotStick">
                            <div class="slotBar barMoving"></div>
                        </div>
                    </div>
                    <div class="rewardContainer">
                        <div class="plusSymbol" id="plusSymbol"></div>
                        <div class="tokenContainer">
                            <div class="tokenIcon generalIcon"></div>
                            <div class="rewardNumber generalNumber" id="rewardNumber">200</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="html-button-response-button" style="display: inline-block; margin:0px 8px">
                <div class="slotMachineInstruction disabledMachine unclickedMachine" id="slotMachine3">
                    <div class="slotOuter">
                        <div class="slotInner">
                            <div class="slotNumbers">
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                                <div class="slotNumber"></div>
                            </div>
                        </div>
                        <div class="slotLabel">D</div>
                        <div class="slotCost">
                            <div class="costText">COST</div>
                            <div class="costNumber">105</div>
                        </div>
                    </div>
                    <div class="slotHandle">
                        <div class="slotStick">
                            <div class="slotBar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tokenCounter generalCounter">
            <div class="tokenIcon generalIcon"></div>
            <div class="tokenNumber generalNumber" id="tokenNumber">200</div>
        </div>
        <div class="instructionsLowOpacity spinCounter generalCounter">
            <div class="spinIcon generalIcon"></div>
            <div class="spinNumber generalNumber" id="spinNumber">14</div>
        </div>
        <div class="accumulatedCounter">
            <div class="accumulatedPreface">TOTAL POINTS SO FAR</div>
            <div class="accumulatedWrapper">
                <div class="tokenIcon accumulatedIcon"></div>
                <div class="accumulatedNumber generalNumber" id="accumulatedNumber">1124</div>
            </div>
        </div>
        <div class="arrowAndExplanation">
            <div class="arrow" id="rewardArrow"></div>
            <div class="explanation" id="rewardExplanation">After you make a choice, you'll see how much reward you got from
                the machine here.<br>
                The reward (200) minus the cost of this machine (100) is now added to your game points.</div>
        </div>
        `,
        `
        <div class="instructionsContainer" id="practiceRoundStart">
            <p>Let's play a practice round to familiarize you with the game.</p>
            <p>Points earned in the practice round will not count towards your total points.</p>
            <p>Click on <kbd>CONTINUE></kbd> to start the practice round when you're ready.</p>
        </div>
        `,
        ],
        allow_backward: true,
        allow_keys: false,
        show_clickable_nav: true,
        button_label_previous: 'PREVIOUS',
        button_label_next: 'CONTINUE',
        data: {
            task: 'instruction',
        },
        save_trial_parameters: {
            stimulus: false,
            trial_type: false,
        },
    };
    timeline.push(instructions);
};

function addPracticeTrials() {
    let practiceRoundSlotMachinesHTML = []; // Array to be pushed as choices

    //This for-loop goes through all machines and pushes it to a separate array of HTML-strings
    for (let x = 0; x < numberOfMachinesInPracticeRound; x++) {
        practiceRoundSlotMachinesHTML.push(allPracticeMachines[0][x].html.outerHTML);
    }

    // Randomly choose cost increase/decrease trial by trial
    let practiceRoundCostCondition = jsPsych.randomization.shuffle([5, 5, -5, -5, -5]);

    //This for-loop runs a set number of times, equal to the number of trials we wish to create
    for (let y = 0; y < numberOfPracticeTrials; y++) {

        // Choose the cost condition
        let currentCostCondition = practiceRoundCostCondition[y];

        const practiceTrial = {
            type: jsPsychHtmlButtonResponse,
            stimulus: `<div id="trialPrompt">CLICK ON A<br>SLOT MACHINE<br>TO PLAY</div>`,
            choices: practiceRoundSlotMachinesHTML,
            prompt: '<button id="nextButton" class="bigButton" style="visibility:hidden;" onclick="nextTrialInPracticeRound()">NEXT >></button>',
            response_ends_trial: false,
            data: {
                task: 'practice_trial',
                trial_number: y,// Placeholder
                condition_investCost: currentCostCondition,
                bank_before_round: practiceRoundRoundPoints,// Placeholder
                bank_after_round: practiceRoundRoundPoints,// Placeholder
                bank_before_accum: practiceRoundAccumulatedPoints,// Placeholder
                bank_after_accum: practiceRoundAccumulatedPoints,// Placeholder
            },
            save_trial_parameters: {
                trial_type: false,
            },
            on_start: function (trial) {
                trial.data.bank_before_round = practiceRoundRoundPoints;// Update
                trial.data.bank_before_accum = practiceRoundAccumulatedPoints;// Update
                trial.data.trial_number = y;// Update
            },
            on_load: function () {
                //console.log('We are in Trial #' + trialCount);
                //console.log('Accumulated Points: ' + practiceRoundAccumulatedPoints);
                //console.log('Round Points: ' + practiceRoundRoundPoints);
                addForegroundVisualsInPracticeRound((numberOfPracticeTrials - trialCount), practiceRoundRoundPoints, practiceRoundAccumulatedPoints);

                let clickedInThisTrial = false;
                // Add event listener to the choice buttons
                const slotMachinesVisual = document.querySelectorAll('.slotMachine');
                slotMachinesVisual.forEach((button, index) => {
                    updateSlotMachineCostsInPracticeRound(index);
                    button.addEventListener('click', function () {
                        if (!clickedInThisTrial) {
                            toggleAnimation(index);
                            clickedInThisTrial = true;
                            choiceMadeInPracticeRound(index);
                        }
                    });
                });
            },
            on_finish: function (data) {
                let allMachineLabels = [];
                let allMachineCosts = [];
                let allMachineReturnLevels = [];
                let allMachineRiskLevels = [];

                for (let z = 0; z < numberOfMachinesInPracticeRound; z++) {
                    allMachineLabels.push(allPracticeMachines[0][z].label);
                    allMachineCosts.push(allPracticeMachines[0][z].currentCost);
                    allMachineReturnLevels.push(allPracticeMachines[0][z].returnLevel);
                    allMachineRiskLevels.push(allPracticeMachines[0][z].riskLevel);
                }

                // Update choice count and cost
                chosenMachineLabel = allPracticeMachines[0][currentTrialChoice].label; // Label of the chosen machine (A, B, C)
                let updatedChoiceCount = allPracticeMachines[0][currentTrialChoice].choiceCount += 1;
                allPracticeMachines[0][currentTrialChoice].choiceCount = updatedChoiceCount; // Update the chosen machine count in the array

                // Tracking all the previous choices makes this difficult, because the cost condition changes.
                //accumulatedCost = updatedChoiceCount * currentCostCondition;
                let currentCost = allPracticeMachines[0][currentTrialChoice].currentCost;
                investCost = currentCost + currentCostCondition; // Total investigation cost
                allPracticeMachines[0][currentTrialChoice].currentCost = investCost; // Update the current cost in the array

                //console.log('chosenMachineLabel is: ' + chosenMachineLabel);
                //console.log('Now this machine has choiceCount of: ' + updatedChoiceCount);
                //console.log('currentCostCondition is: ' + currentCostCondition);
                //console.log('accumulatedCost is: ' + accumulatedCost);
                //console.log('This machines initial cost is: ' + initialCost);
                //console.log('The total investigation cost is: ' + investCost);

                // Store the data
                data.bank_after_round = practiceRoundRoundPoints;// Update
                data.bank_after_accum = practiceRoundAccumulatedPoints;// Update
                data.choice = currentTrialChoice;
                data.chosen_machine = chosenMachineLabel;
                data.investigation_cost = chosenMachineCost;
                data.reward = reward;
                data.all_machine_labels = allMachineLabels;
                data.all_machine_costs = allMachineCosts;
                data.all_machine_returnLevels = allMachineReturnLevels;
                data.all_machine_riskLevels = allMachineRiskLevels;

            },
        };
        timeline.push(practiceTrial);
    }
};

function addBlockStart(blockNumber) {
    const blockInstruction = {
        type: jsPsychHtmlButtonResponse,
        stimulus: function () {
            if (blockNumber == 0) {
                return `
                <div class="blockStartInstructionsContainer">
                    <p class="standardText slightlyBiggerText">Great! You're done with the practice round.</p>
                    <p class="standardText slightlyBiggerText" style="font-weight: bold;">You will now start the actual game.</p>
                    <p class="blockStartInstructionsImportant standardText">Please complete the game without taking a break. This is
                        very important, as interruptions will significantly impact the research results. If you don't make a choice
                        within 2 minutes, the game will time out, and you won't be able to participate in the study again.</p>
                </div>
                <div class="blockStartClickContainer standardText">Click <kbd>START</kbd> when you're ready.</div>
                `;
            } else {
                return `
                <div class="blockStartTextContainer" id="actualBlockStart">
                    <div class="blockStartText">You will now start Round ${blockNumber + 1}</div>
            
                    <div class='textAndTokenContainer'>
                        <p class="blockStartClickContainer blockStartInstructionsImportant standardText">Points earned in the
                            previous round: </p><div class="costNumber">${roundPoints}</div>
                    </div>
            
                    <div class='textAndTokenContainer'>
                        <p class="blockStartClickContainer blockStartInstructionsImportant standardText">Your total points so far:
                        </p><div class="costNumber">${accumulatedPoints}</div>
                    </div>
            
                    <div class="blockStartClickContainer standardText clickStartText">Click <kbd>START</kbd> when you\'re ready.
                    </div>
                </div>
                `;
            }
        },
        choices: ['START'],
        button_html: '<button id="startBlockButton" class="bigButton">%choice%</button>',
        on_load: function () {
            // Reset the cost accumulation and choice history to prevent carry over from previous blocks
            accumulatedCost = 0;
            // At the start of each round, roundPoints is reset to 100
            roundPoints = 100;
            // Add the new round starting points to accumulatedPoints
            if (blockNumber !== 0) {
                accumulatedPoints += 100;
            }
        },
        data: {
            task: 'block_start',
            block_number: blockNumber,
        },
        save_trial_parameters: {
            stimulus: false,
            response: false,
            trial_type: false,
        },
    };
    timeline.push(blockInstruction);
};

function addFeedback() {
    const feedback = {
        type: jsPsychHtmlButtonResponse,
        stimulus: function () {
            let bonusCalculation = totalGamePoints / 20000; //something like total points - (roundstartingpoints *20): this would give the actual performance - the mean total pay should be around 10 pounds/hr?
            bonusPay = Number(bonusCalculation.toFixed(2));
            finalPay = flatPay + bonusPay;
            return `
            <div class="gameEndInstructionsContainer">
                <p class="slightlyBiggerText">You have now completed the game.</p>
                <div class="paymentInfo">
                    <p>Your total game points is: ${totalGamePoints}</p>
                    <p>Your bonus payment will be: £${bonusPay}</p>
                    <p>Together with the standard participation fee, your final earnings are: £${finalPay}</p>
                </div>
            </div>
            `;
        },
        choices: ['FINISH'],
        button_html: '<button class="bigButton" id="finishGameButton">%choice%</button>',
        data: {
            task: 'feedback',
        },
        save_trial_parameters: {
            stimulus: false,
            response: false,
            trial_type: false,
        },
        on_finish: function (data) {
            data.bonus_pay = bonusPay;
            data.final_pay = finalPay;
        },
    };
    timeline.push(feedback);
};

function addPostSurvey() {
    const postSurvey = {
        type: jsPsychSurveyHtmlForm,
        preamble: '<div class="postSurveyPrompt">Thank you for participating in our study.<br>Before you go, we\'d like to ask a couple of questions.</div>',
        html: `
        <div class="postQuestionsContainer">
            <div class="questions ageQuestion"><label>Your age (in years): <input id="age" type="number" name="age" min="18"
                        max="99" required></label></div>
        </div>
        <div class="postQuestionsContainer">
            <div class="questions">Your gender:</div>
            <div class="options">
                <label><input type="radio" name="gender" value="0" required> Female</label>
                <label><input type="radio" name="gender" value="1" required> Male</label>
                <label><input type="radio" name="gender" value="2" required> Other/Rather not disclose</label>
            </div>
        </div>
        <div class="postQuestionsContainer">
            <div class="questions">Have you played a decision-making game similar to this one before?</div>
            <div class="options">
                <label><input type="radio" name="familiarity" value="1" required> Yes</label>
                <label><input type="radio" name="familiarity" value="0" required> No</label>
            </div>
        </div>
        <div class="postQuestionsContainer">
            <div class="questions">How would you rate your understanding of the game mechanics (the game rules and your
                objectives in the game)?</div>
            <div class="options">
                <label><input type="radio" name="comprehension" value="1" required> Didn't understand the game at
                    all</label>
                <label><input type="radio" name="comprehension" value="2" required> Had some confusion about the
                    game</label>
                <label><input type="radio" name="comprehension" value="3" required> Understood most of the key
                    aspects</label>
                <label><input type="radio" name="comprehension" value="4" required> Had a clear understanding of the key
                    aspects</label>
                <label><input type="radio" name="comprehension" value="5" required> Fully understood the game rules and
                    objectives</label>
            </div>
        </div>
        <div class="postQuestionsContainer">
            <div class="questions">How engaged were you when making decisions during the game?</div>
            <div class="options">
                <label><input type="radio" name="engagement" value="1" required> Not engaged at all</label>
                <label><input type="radio" name="engagement" value="2" required> Not very engaged</label>
                <label><input type="radio" name="engagement" value="3" required> Somewhat engaged</label>
                <label><input type="radio" name="engagement" value="4" required> Quite engaged</label>
                <label><input type="radio" name="engagement" value="5" required> Very engaged</label>
            </div>
        </div>
        <div class="postQuestionsContainer">
            <div class="questions">How satisfied are you with the overall compensation level for this study?<br>(Note: Your
                response will not affect your payment in any way.)</div>
            <div class="options">
                <label><input type="radio" name="compensationSatisfaction" value="1" required> Not satisfied at all</label>
                <label><input type="radio" name="compensationSatisfaction" value="2" required> Not very satisfied</label>
                <label><input type="radio" name="compensationSatisfaction" value="3" required> Somewhat satisfied</label>
                <label><input type="radio" name="compensationSatisfaction" value="4" required> Quite satisfied</label>
                <label><input type="radio" name="compensationSatisfaction" value="5" required> Very satisfied</label>
            </div>
        </div>
        <div class="postQuestionsContainer">
            <div class="questions">What do you think was the purpose of this study?<br><textarea name="studyPurpose"
                    class="textbox" required></textarea></div>
        </div>
        <div class="postQuestionsContainer">
            <div class="questions">Help us improve our future studies!<br>Do you have any comments or feedback on the
                following aspects? (This question is optional.)
                <ul class="exampleList">
                    <li>Any technical errors or issues you encountered during the experiment</li>
                    <li>The length and pace of the experiment</li>
                    <li>Specific parts of the experiment that you didn't like or found confusing</li>
                    <li>The clarity and helpfulness of the instructions in understanding the game mechanics</li>
                    <li>Any other comments or feedback you would like to share</li>
                </ul>
                <br><textarea name="comments" class="textbox"></textarea>
            </div>
        </div>
        `,
        button_label: 'CONTINUE >>',
        data: {
            task: 'post_survey',
        },
        save_trial_parameters: {
            trial_type: false,
        },
        autofocus: 'age',
    };
    timeline.push(postSurvey);
};

function addDebrief() {
    const debrief = {
        type: jsPsychHtmlButtonResponse,
        stimulus: `
        <div class="debriefContainer">
            <p class="slightlyBiggerText" style="font-weight:bold; text-align:center;">Thank you again for taking part in
                this study!</p>
            <div class="debriefSectionContainer">
                <div style="font-weight:bold;" class="debriefSectionTitle">Purpose of the study</div>
                <div class="debriefSectionText">The study you participated in was designed to examine how various
                    situational and contextual factors influence problem-solving and decision-making
                    behaviours. The purpose of this study was to understand how decision-making strategies evolve over time
                    in response to changes in the decision-making environment.<br>
                    To preserve the integrity of the study, we kindly request that you do not share any details of this
                    study with others, as they may be potential participants,
                    and knowing the purpose and the details of the study beforehand can significantly impact the research
                    findings.</div>
            </div>
            <div class="debriefSectionContainer">
                <div style="font-weight:bold;" class="debriefSectionTitle">About your data</div>
                <div class="debriefSectionText">Please be assured that the data collected today will be used for research
                    purposes alone. We would like to note again that all information
                    gathered will be kept in complete confidentiality, and there will be no attempt or interest in
                    connecting your personal information with your responses. Any information
                    that can be used to identify you will be completely deleted 2 weeks from today.<br>
                    If you would like more information about the study, or wish to withdraw your data, please contact the
                    principal investigator of this project at yooeun.jeong@bi.no.</div>
            </div>
            <p class="endingStatement">Click on the button below to finish the study. You'll be automatically redirected
                back to Prolific.</p>
        </div>
        `,
        choices: ['FINISH THIS STUDY'],
        button_html: '<button class="backToProlific bigButton">%choice%</button>',
        data: {
            task: 'debrief',
        },
        save_trial_parameters: {
            stimulus: false,
            response: false,
            trial_type: false,
        },
    };
    timeline.push(debrief);
};