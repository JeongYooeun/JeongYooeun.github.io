let tokenIncreasion = 0;

/*
function increaseTokensBy(tokenIncreasion) {
          document.getElementById('tokenNumber').innerText = (currentPoints + tokenIncreasion);
          document.querySelector('.tokenCounter').classList.add('tokenPop');
}

function reduceTokensBy(tentativeRoundPoints, tokenReduction, activeTrial) {
  /* IF TRIAL N UMBER VERIFY */

/*
if (tentativeRoundPoints > 0) {
  let counter = 0;

  const intervalId = setInterval(() => {
    counter++;
    let iterationNumber = (tentativeRoundPoints - counter);
    if (activeTrial == trialCount) {
      document.getElementById('tokenNumber').innerText = iterationNumber;
    }
    if (counter == tokenReduction) {
      increaseTokensBy(tokenIncreasion, activeTrial);
      clearInterval(intervalId);
    }
  }, 4);
}
} */

function toggleAnimation(thisMachine) {
  /* ADD A CLASS TO ALL MACHINES EXCEPT OUR CLICKED MACHINE */
  const slotMachinesVisual = document.querySelectorAll('.slotMachine');
  slotMachinesVisual.forEach((anyMachine) => {
    anyMachine.classList.add('disabledMachine');
    if (anyMachine.id == ('slotMachine' + thisMachine)) {
      anyMachine.classList.add('clickedMachine');
      anyMachine.querySelector('.slotBar').classList.add('barMoving')
      let tokenReduction = anyMachine.querySelector('.costNumber').innerText;
      /*  reduceTokensBy(roundPoints, tokenReduction, trialCount); */
    } else {
      anyMachine.classList.add('unclickedMachine');
    }
  });
};

function fadeElement(fadingElement) {
  document.getElementById(fadingElement).style.opacity = '0.05';
};

function animateReward(slotMachineLabel, rewardGained, costSpent) {

  let rewardContainer = document.createElement('div');
  rewardContainer.classList.add('rewardContainer');

  let plusSymbol = document.createElement('div');
  plusSymbol.classList.add('plusSymbol');
  plusSymbol.id = 'plusSymbol';

  let tokenIcon = document.createElement('div');
  tokenIcon.classList.add('tokenIcon', 'generalIcon');
  let tokenNumber = document.createElement('div');
  tokenNumber.classList.add('rewardNumber', 'generalNumber');
  tokenNumber.id = 'rewardNumber';
  tokenNumber.innerHTML = rewardGained;

  let tokenContainer = document.createElement('div');
  tokenContainer.classList.add('tokenContainer');
  tokenContainer.append(tokenIcon, tokenNumber);

  rewardContainer.append(plusSymbol, tokenContainer);

  document.getElementById('slotMachine' + slotMachineLabel).append(rewardContainer);

  setTimeout(function () {
    document.querySelector('.tokenCounter').classList.add('tokenPop');
  }, 1650);

};


/* addForegroundVisuals((trialCount - numberOfTrialsPerBlock), roundPoints, accumulatedPoints); */
function addForegroundVisuals(remainingSpins, remainingTokens, accumulatedTokens, whichRound) {
  let contentContainer = document.getElementById('jspsych-content');

  let tokenContainer = document.createElement('div');
  tokenContainer.classList.add('tokenContainer');

  let tokenCounter = document.createElement('div');
  tokenCounter.classList.add('tokenCounter', 'generalCounter');
  let tokenIcon = document.createElement('div');
  tokenIcon.classList.add('tokenIcon', 'generalIcon');
  let tokenNumber = document.createElement('div');
  tokenNumber.classList.add('tokenNumber', 'generalNumber');
  tokenNumber.id = 'tokenNumber';
  tokenNumber.innerHTML = remainingTokens;
  tokenCounter.append(tokenIcon, tokenNumber);

  let spinCounter = document.createElement('div');
  spinCounter.classList.add('spinCounter', 'generalCounter');
  let spinIcon = document.createElement('div');
  spinIcon.classList.add('spinIcon', 'generalIcon');
  let spinNumber = document.createElement('div');
  spinNumber.classList.add('spinNumber', 'generalNumber');
  spinNumber.id = 'spinNumber';
  spinNumber.innerHTML = remainingSpins;
  spinCounter.append(spinIcon, spinNumber);

  contentContainer.append(tokenCounter, spinCounter);

  let roundCounter = document.createElement('div');
  roundCounter.classList.add('roundCounter', 'titleCounter');
  roundCounter.innerHTML = 'ROUND ' + whichRound;
  contentContainer.prepend(roundCounter);

  let accumulatedCounter = document.createElement('div');
  accumulatedCounter.classList.add('accumulatedCounter');

  let accumulatedPreface = document.createElement('div');
  accumulatedPreface.classList.add('accumulatedPreface');
  accumulatedPreface.innerHTML = 'TOTAL POINTS SO FAR';

  let accumulatedWrapper = document.createElement('div');
  accumulatedWrapper.classList.add('accumulatedWrapper');
  let accumulatedIcon = document.createElement('div');
  accumulatedIcon.classList.add('tokenIcon', 'accumulatedIcon');
  let accumulatedNumber = document.createElement('div');
  accumulatedNumber.classList.add('accumulatedNumber', 'generalNumber');
  accumulatedNumber.id = 'accumulatedNumber';
  accumulatedNumber.innerHTML = accumulatedTokens;
  accumulatedWrapper.append(accumulatedIcon, accumulatedNumber);
  accumulatedCounter.append(accumulatedPreface, accumulatedWrapper);
  contentContainer.append(accumulatedCounter);
};

function addForegroundVisualsInPracticeRound(remainingSpins, remainingTokens, accumulatedTokens) {
  let contentContainer = document.getElementById('jspsych-content');

  let tokenContainer = document.createElement('div');
  tokenContainer.classList.add('tokenContainer');

  let tokenCounter = document.createElement('div');
  tokenCounter.classList.add('tokenCounter', 'generalCounter');
  let tokenIcon = document.createElement('div');
  tokenIcon.classList.add('tokenIcon', 'generalIcon');
  let tokenNumber = document.createElement('div');
  tokenNumber.classList.add('tokenNumber', 'generalNumber');
  tokenNumber.id = 'tokenNumber';
  tokenNumber.innerHTML = remainingTokens;
  tokenCounter.append(tokenIcon, tokenNumber);

  let spinCounter = document.createElement('div');
  spinCounter.classList.add('spinCounter', 'generalCounter');
  let spinIcon = document.createElement('div');
  spinIcon.classList.add('spinIcon', 'generalIcon');
  let spinNumber = document.createElement('div');
  spinNumber.classList.add('spinNumber', 'generalNumber');
  spinNumber.id = 'spinNumber';
  spinNumber.innerHTML = remainingSpins;
  spinCounter.append(spinIcon, spinNumber);

  contentContainer.append(tokenCounter, spinCounter);

  let roundCounter = document.createElement('div');
  roundCounter.classList.add('roundCounter', 'titleCounter');
  roundCounter.innerHTML = 'PRACTICE ROUND';
  contentContainer.prepend(roundCounter);

  let accumulatedCounter = document.createElement('div');
  accumulatedCounter.classList.add('accumulatedCounter');

  let accumulatedPreface = document.createElement('div');
  accumulatedPreface.classList.add('accumulatedPreface');
  accumulatedPreface.innerHTML = 'TOTAL POINTS SO FAR';

  let accumulatedWrapper = document.createElement('div');
  accumulatedWrapper.classList.add('accumulatedWrapper');
  let accumulatedIcon = document.createElement('div');
  accumulatedIcon.classList.add('tokenIcon', 'accumulatedIcon');
  let accumulatedNumber = document.createElement('div');
  accumulatedNumber.classList.add('accumulatedNumber', 'generalNumber');
  accumulatedNumber.id = 'accumulatedNumber';
  accumulatedNumber.innerHTML = accumulatedTokens;
  accumulatedWrapper.append(accumulatedIcon, accumulatedNumber);
  accumulatedCounter.append(accumulatedPreface, accumulatedWrapper);
  contentContainer.append(accumulatedCounter);
};

function addBackgroundVisuals() {
  let contentWrapper = document.querySelector('.jspsych-content-wrapper');
  let backgroundIllustrations = document.createElement('div');
  backgroundIllustrations.classList.add('backgroundIllustrations');
  let topLeft = document.createElement('div');
  topLeft.classList.add('backgroundDetail', 'topLeft');
  var laurelBox = document.createElement('div');
  laurelBox.classList.add('laurelBox');
  topLeft.append(laurelBox);

  let topRight = document.createElement('div');
  topRight.classList.add('backgroundDetail', 'topRight');
  var laurelBox = document.createElement('div');
  laurelBox.classList.add('laurelBox');
  topRight.append(laurelBox);

  let bottomLeft = document.createElement('div');
  bottomLeft.classList.add('backgroundDetail', 'bottomLeft');
  var laurelBox = document.createElement('div');
  laurelBox.classList.add('laurelBox');
  bottomLeft.append(laurelBox);

  let bottomRight = document.createElement('div');
  bottomRight.classList.add('backgroundDetail', 'bottomRight');
  var laurelBox = document.createElement('div');
  laurelBox.classList.add('laurelBox');
  bottomRight.append(laurelBox);

  backgroundIllustrations.append(topLeft, topRight, bottomLeft, bottomRight);
  contentWrapper.append(backgroundIllustrations);
};

function resizeContent() {
  let contentHeight, contentWidth;
  contentHeight = 1280;
  contentWidth = 1280;
  document.documentElement.style.setProperty(
    "--scale",
    window.innerHeight / contentWidth < window.innerWidth / contentHeight
      ? (window.innerHeight / contentWidth) * 0.90
      : (window.innerWidth / contentHeight) * 0.90
  );
  window.onresize = () => {
    document.documentElement.style.setProperty(
      "--scale",
      window.innerHeight / contentWidth < window.innerWidth / contentHeight
        ? (window.innerHeight / contentWidth) * 0.90
        : (window.innerWidth / contentHeight) * 0.90
    );
  };
};