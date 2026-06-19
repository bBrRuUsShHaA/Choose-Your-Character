alert("The characters in Choose Your Character are not characters from the creator, although it's in the creator's style and headcanons. Instead they're from the tower defense game Flavor Frenzy. If you don't know what that is, I suggest you go to the link below the title.");

const starFruitAim = 240;
const starFruitSpeed = 100;
const starFruitRange = 184;
const starFruitIntelligence = 270;
const starFruitResistance = 187;

const starFruitTotal = starFruitAim + starFruitSpeed + starFruitRange + starFruitIntelligence + starFruitResistance;

const flanAim = 198;
const flanSpeed = 97;
const flanRange = 376;
const flanIntelligence = 200;
const flanResistance = 200;

const flanTotal = flanAim + flanSpeed + flanRange + flanIntelligence + flanResistance;

const ubeAim = 200;
const ubeSpeed = 90;
const ubeRange = 376;
const ubeIntelligence = 280;
const ubeResistance = 180;

const ubeTotal = ubeAim + ubeSpeed + ubeRange + ubeIntelligence + ubeResistance;

const pineBerryAim = 0;
const pineBerrySpeed = 10;
const pineBerryRange = 0;
const pineBerryIntelligence = 499;
const pineBerryResistance = 430;

const pineBerryTotal = pineBerryAim + pineBerrySpeed + pineBerryRange + pineBerryIntelligence + pineBerryResistance;

const spiritAim = 500;
const spiritSpeed = 81;
const spiritRange = 25;
const spiritIntelligence = 310;
const spiritResistance = 730;

const spiritTotal = spiritAim + spiritSpeed + spiritRange + spiritIntelligence + spiritResistance;

const okraAim = 300;
const okraSpeed = 180;
const okraRange = 234;
const okraIntelligence = 287;
const okraResistance = 100;

const okraTotal = okraAim + okraSpeed + okraRange + okraIntelligence + okraResistance;

const candyCornAim = 190;
const candyCornSpeed = 430;
const candyCornRange = 220;
const candyCornIntelligence = 100;
const candyCornResistance = 200;

const candyCornTotal = candyCornAim + candyCornSpeed + candyCornRange + candyCornIntelligence + candyCornResistance;

const jamAim = 699;
const jamSpeed = 301;
const jamRange = 147;
const jamIntelligence = 193;
const jamResistance = 210;

const jamTotal = jamAim + jamSpeed + jamRange + jamIntelligence + jamResistance;

const meringueAim = 367;
const meringueSpeed = 132;
const meringueRange = 487;
const meringueIntelligence = 266;
const meringueResistance = 327;

const meringueTotal = meringueAim + meringueSpeed + meringueRange + meringueIntelligence + meringueResistance;

function questionMe() {
    var answer = prompt("Which character will you pick?");
    if (answer === "Starfruit") {
        alert(starFruitTotal);
    }
    else if (answer === "Flan") {
        alert(flanTotal);
    }
    else if (answer === "Ube") {
        alert(ubeTotal);
    
    }
    else if (answer === "Pineberry") {
        alert(pineBerryTotal);
    }
    else if (answer === "Pineberry's Spirit") {
        alert(spiritTotal);
    }

    else if (answer === "Okra") {
        alert(okraTotal);
    }

    else if (answer === "CandyCorn") {
        alert(candyCornTotal);
    }

    else if (answer === "Jam") {
        alert(jamTotal);
    }

    else if (answer === "Meringue") {
        alert(meringueTotal);
    }

    else if (answer === null) {
        alert("That was an accident, right?");
    }
    
    else {
        alert("That's not a valid answer >:(");
    }

};
