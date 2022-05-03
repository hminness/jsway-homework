const carouselImg = document.querySelector('#carouselImg');
const parityImg = document.querySelector('#parityImg');
const inputImg = document.querySelector('#inputImg');
const fizzBuzzImg = document.querySelector('#fizzBuzzImg');
// const followingDayImg = document.querySelector('#followingDayImg');
const dogImg = document.querySelector('#dogImg');

const elementIDs = ['carousel', 'parity', 'input', 'fizzBuzz', 'followingDay', 'numberComp', 'daysInMonth', 'updateAurora', 'meetFang', 'modelCircle', 'modelBankAccount', 'musketeers', 'sumOfValues', 'arrayMaximum', 'wordList']
for (const element of elementIDs) {
    let id = '#' + element;
    document.querySelector(id).addEventListener('click',window[element])
}

/*  *************************
    Keep at Top
************************* */

function removeDisplays() {
    const elements = document.getElementsByClassName("newSpan");
    while (elements.length > 0) elements[0].remove();
}
function hideEverything() {
    removeDisplays();
    carouselImg.classList.add('hidden');
    parityImg.classList.add('hidden');
    inputImg.classList.add('hidden');
    // fizzBuzzImg.classList.add('hidden');
    dogImg.classList.add('hidden');
}
function returnValue (returnText) {
    const newSpan = document.createElement('span');
    const newLine = document.createTextNode(returnText);
    const newBr = document.createElement('br');
    newSpan.appendChild(newLine);
    newSpan.appendChild(newBr);
    newSpan.className = "newSpan";
    const currentSpan = document.getElementById("displayValues");
    document.body.insertBefore(newSpan, currentSpan);
}



/*  *************************
            Carousel
    ************************* */
function carousel() {
    hideEverything();
    carouselImg.classList.remove('hidden');
    const rounds = prompt("How many times will the carousel circle?","0");
    for (let i = 1; i <= rounds; i++) {
        if (i === 1) {
            returnValue (`${i} turn around the carousel`);
        } else {
            returnValue (`${i} turns around the carousel`);
        }
    }
}


/*  *************************
            Parity
    ************************* */
function parity() {
    hideEverything();
    parityImg.classList.remove('hidden');
    const startNum = Number(prompt("Where should I start?","0"));
    const oddEven = Number(prompt("Where should I end?","0"));
    if (startNum < oddEven) {
        for (let i = startNum; i <= oddEven; i++) {
            if (i % 2 === 0) {
                returnValue (`${i} is even`);
            } else {
                returnValue (`${i} is odd`);
            }
        }
    } else {
        alert(`Starting number should be less than ending number. Given start was ${startNum} and given end was ${oddEven}.`);
    }
}

/*  *************************
        Input   
************************* */
function input () {
    hideEverything();
    inputImg.classList.remove('hidden');
    inputCall(inputNum = prompt("Give me a number","0"));
}
function inputCall (inputNum) {
    if (inputNum < 50) {
        inputCall(inputNum = prompt(`${inputNum} is too small! Give me a bigger number.`,"0"));
    } else if (inputNum > 100) {
        inputCall(inputNum = prompt(`${inputNum} is too large! Give me a smaller number.`,"0"));
    } else {
        returnValue (`Thanks! ${inputNum} is a great number!`);
    }
}

/* *************************
        FizzBuzz
************************* */

function fizzBuzz() {
    hideEverything();
    fizzBuzzImg.classList.remove('hidden');
    const fizzNum = Number(prompt('What number should I go to?','0'));
    for (let i = 1; i <= fizzNum; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                returnValue ("FizzBuzz");
            } else {
                returnValue ("Fizz");
            }
        } else if (i % 5 === 0) {
            returnValue ("Buzz");
        } else {
            returnValue (i);
        }

    }
}

/*  *************************
        Following Day
    ************************* */

function followingDay() {
    hideEverything();
    const givenDay = prompt('Give me a day of the week').toLowerCase();
    switch (givenDay) {
        case 'sunday':
            returnValue (`Tomorrow is Monday!`);
            break;
        case 'monday':
            returnValue (`Tomorrow is Tuesday!`);
            break;
        case 'tuesday':
            returnValue (`Tomorrow is Wednesday!`);
            break;
        case 'wednesday':
            returnValue (`Tomorrow is Thursday!`);
            break;
        case 'thursday':
            returnValue (`Tomorrow is Friday!`);
            break;
        case 'friday':
            returnValue (`Tomorrow is Saturday!`);
            break;
        case 'saturday':
            returnValue (`Tomorrow is Sunday!`);
            break;
        default:
            returnValue (`${givenDay} is not a day of the week.`);
    }
}

/*  *************************
        Number Comparison
    ************************* */

function numberComp() {
    hideEverything();
    const num1 = prompt('Give me a number','0');
    const num2 = prompt('Give me another number','0');
    if ((isNaN(num1)) || (isNaN(num2))) {
        returnValue ('You\'ve given a non-numeric value');
    } else if (num1 === num2) {
        returnValue ('Both numbers are the same');
    } else if (num1 > num2) {
        returnValue (`${num1} is bigger than ${num2}`);
    } else {
        returnValue (`${num1} is smaller than ${num2}`);
    }
}


/*  *************************
     Number of days in a month
    ************************* */
    function daysInMonth() {
        hideEverything();
        const givenMonth = prompt('Give me the name of a month.').toLowerCase();
        switch (givenMonth) {
            case 'september':
            case 'april':
            case 'june':
            case 'november':
                returnValue (`${givenMonth[0].toUpperCase() + givenMonth.substring(1)} has 30 days.`);
                break;
            case 'february':
                returnValue (`${givenMonth[0].toUpperCase() + givenMonth.substring(1)} has 28 days in non leap years and 29 days in leap years.`);
                break;
            case 'january':
            case 'march':
            case 'may':
            case 'july':
            case 'august':
            case 'october':
            case 'december':
                returnValue (`${givenMonth[0].toUpperCase() + givenMonth.substring(1)} has 31 days.`);
                break;
            default:
                returnValue (`${givenMonth[0].toUpperCase() + givenMonth.substring(1)} is not a month.`);
        }
    }


/*  *************************
        Following second
    ************************* */

// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

//     This is not as simple as it seems... Look at the following results to see for yourself:

//         14h17m59s => 14h18m0s
//         6h59m59s => 7h0m0s
//         23h59m59s => 0h0m0s (midnight)

/*  *************************
        Calculator
    ************************* */

// Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

// // TODO: complete program

// console.log(calculate(4, "+", 6));  // Must show 10
// console.log(calculate(4, "-", 6));  // Must show -2
// console.log(calculate(2, "*", 0));  // Must show 0
// console.log(calculate(12, "/", 0)); // Must show Infinity


/*  *************************
  Circumference and area of a circle
    ************************* */

// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

// Here are some tips for solving this exercise:

//     Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
//     The value of number π (Pi) is obtained with Math.PI in JavaScript.
//     You might want to use the exponentiation operator ** to perform computations.

// console.log(2 ** 3); // 8: 2 * 2 * 2
// console.log(3 ** 2); // 9: 3 * 3

/*  *************************
     Update Aurora
    ************************* */
function updateAurora() {
    hideEverything();


    class Character {
        constructor(name, health, strength) {
          this.name = name;
          this.health = health;
          this.strength = strength;
          this.xp = 0; // XP is always zero for new characters
          this.keys = 1;
          this.gold = 10;
        }
        // Attack a target
        attack(target) {
          if (this.health > 0) {
            const damage = this.strength;
            returnValue(`${this.name} attacks ${target.name} and causes ${damage} damage points`);
            target.health -= damage;
            if (target.health > 0) {
                returnValue(`${target.name} has ${target.health} health points left`);
            } else {
              target.health = 0;
              const bonusXP = 10;
              returnValue(
                `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.keys} key${this.keys > 1 ? 's' : ''}, and ${target.gold} gold.`
              );
              this.xp += bonusXP;
              this.keys += target.keys;
              this.gold += target.gold;
            }
          } else {
            returnValue(`${this.name} can't attack (they've been eliminated)`);
          }
        }
        // Return the character description
        describe() {
          return `${this.name} has ${this.health} health points, ${this
            .strength} strength, ${this.xp} XP points, ${this.gold} gold, and ${this.keys} key${this.keys > 1 ? 's' : ''}`;
        }
    }
    const aurora = new Character("Aurora", 150, 25);
    const glacius = new Character("Glacius", 130, 30);
    
    returnValue("Welcome to the adventure! Here are our heroes:");
    returnValue(aurora.describe());
    returnValue(glacius.describe());
    
    const monster = new Character("Spike", 40, 20);
    returnValue("A wild monster has appeared: it's named " + monster.name);
    
    monster.attack(aurora);
    monster.attack(glacius);
    aurora.attack(monster);
    glacius.attack(monster);
    
    returnValue(aurora.describe());
    returnValue(glacius.describe());
}


/*  *************************
    Meet Fang
************************* */
function meetFang() {
    hideEverything();
    const dogName = prompt(`What's your pup's name?`);
    const dogSpecies = prompt(`What kind of dog are they?`);
    const dogSize = prompt(`How tall are they in centimeters?`);
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.message)
      document.querySelector('#dogImg').src = data.message
      dogImg.classList.remove('hidden');
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
    class Dog {
        constructor(name,species,size) {
            this.name = name;
            this.species = species;
            this.size = size;
        }
        bark() {
            return this.size > 60 ? 'Grrr! Grrr!' : 'Woof! Woof!'
        }
        describeDog() {
            return `${this.name} is a ${this.species} dog measuring ${this.size} centimeters`
        }
        aCat() {
            return `Look, a cat! ${this.name} barks: ${this.bark()}`
        }
    }

    const newDog = new Dog (dogName,dogSpecies,dogSize)
    returnValue(newDog.describeDog());
    returnValue(newDog.aCat());

    // const fang = new Dog("Fang", "boarhound", 75);
    // returnValue(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
    // returnValue(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

    // const snowy = new Dog("Snowy", "terrier", 22);
    // returnValue(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
    // returnValue(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);
    
}


/*  *************************
   Model a circle
************************* */
function modelCircle() {
    hideEverything();
    const radius = Number(prompt('Enter the circle radius:','0'));
    const circle = {
        circumference() {
            return 2 * radius * Math.PI;
        },
        area() {
            return radius * radius * Math.PI;
        }
    };
    returnValue(`Its circumference is ${circle.circumference()}`);
    returnValue(`Its area is ${circle.area()}`);
}

/*  *************************
   Model a bank account
************************* */
function modelBankAccount() {
    hideEverything();
    const accountOwner = prompt('What is your name?');
    const bankAccount = {
        name: accountOwner,
        balance: 0,
        credit() {
            const credAmount = Number(prompt('How much was added or removed from your account? Added should be positive, removed should be negative','0'));
            return this.balance += credAmount;
        },
        describe() {
            return `Hello ${this.name}, you have a balance of $${this.balance}`;
        }
    };
    returnValue(bankAccount.describe());
    bankAccount.credit();
    returnValue(bankAccount.describe());
}

/*  *************************
    Musketeers
************************* */
function musketeers() {
    hideEverything();
    const musketeers = ['Athos', 'Porthos', 'Aramis']
    for (let i = 0; i < musketeers.length-1; i++) {
        returnValue(`${musketeers[i]} is a musketeer`);
    };
    returnValue(`D'Artagnan has joined the musketeers!`);
    musketeers.push('D\'Artagnan')
    musketeers.forEach(musketeer => {returnValue(`${musketeer} is a musketeer`);})
    returnValue(`Aramis has left the musketeers!`);
    for (const musketeer of musketeers) {returnValue(`${musketeer} is a musketeer`);}
}

/*  *************************
    Sum Of Array Values
************************* */
function sumOfValues() {
    hideEverything();
    const values = [3, 11, 7, 2, 9, 10];
    const sum = values.reduce((a,b) => a + b, 0)
    returnValue(`Our array is ${values}`);
    returnValue(`The sum of our array is ${sum}`);
}
/*  *************************
    Array Max
************************* */
function arrayMaximum() {
    hideEverything();
    const values = [3, 11, 7, 2, 9, 10];
    const max = values.reduce((a,b) => Math.max(a,b));
    returnValue(`Our array is ${values}`);
    returnValue(`The max number of our array is ${max}`);
}

/*  *************************
    Word List
************************* */
function wordList () {
    hideEverything();
    const inputWord = prompt('Give me a word. When you\'re done, type "Stop"');
    const wordArray = [inputWord];
    wordListCall(inputWord,wordArray);
}
function wordListCall (inputWord,wordArray) {
    if (inputWord.toLowerCase() === 'stop') {
        if (wordArray[0].toLowerCase() === 'stop') {
            returnValue (`You haven't given me any words!`);    
        } else {
            returnValue (`Your list of words is ${wordArray}.`);
        }
    } else if (wordArray.length === 1 && wordArray[0] === inputWord) {
        returnValue(`Your new word is ${inputWord}!`);
        wordListCall(inputWord = prompt('Give me a word. When you\'re done, type "Stop"'),wordArray);
    } else {
        returnValue(`Your new word is ${inputWord}!`);
        wordArray.push(inputWord);
        wordListCall(inputWord = prompt('Give me a word. When you\'re done, type "Stop"'),wordArray);
    }
}