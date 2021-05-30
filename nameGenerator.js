function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

let names = Array("Harry", "Bert", "Henk", "Sebastiaan", "Papa", "Rutger", "Mama", "Lars", "Steven", "Jannes", "Iwan", "Milan", "Bertwim", "Amgela", "Jorgiam", "Hansje", "Pim", "Sandra", "Hennie", "Achmet", "Dirkjan", "Barbaba", "Jeroen", "Riejan", "Willem", "Leo", "Meneer", "Bas", "Dennis", "Jan", "Kees", "Lies", "Sem", "Jan", "Cor", "Lucas", "Finn", "Daan", "Levi", "Milan", "Bram", "Luuk", "Emma", "Tess", "Sophie", "Julia", "Anna", "Mila", "Sara", "Luuk", "Jesse", "Mees", "Thomas", "Sam", "Thijs", "Adam", "Max", "Jullian", "Hugo", "Gijs", "Benjamin", "Tim", "Ruben", "Teun", "Olivier", "Sven", "David", "Stijn", "Tom", "Isa", "Noa", "Jasmijn", "Esmee", "Sanne", "Joël", "Emmanuel", "Nathan", "Tobias", "Alex", "Daniële", "Elias", "Carlijn", "Caroline", "Lisanne", "Marije", "Tirza", "Naomi", "Joyce", "Indy", "Marith", "Micha", "Hayanne", "Isa", "Nadine", "Aron")


let objects = Array("stoep", "dinosaurus", "klokken", "lampen", "mieren", "appelmoes", "poep", "bank", "goudvis", "ramen", "pizza", "banannen", "blopvis", "pennen", "bomen", "schoenen", "fietspompen", "fietsen", "deur", "bezem", "eekhoorn", "muis", "tafel", "cavia", "koek", "luiaart", "paarden", "melkpak", "chocola", "bananentros", "cavia", "brulaap", "duiven", "ezel", "geiten", "neushoorn", "zwijnen", "struisvogel", "varken", "parkiet", "stokbrood", "boeken")

let action = Array("inspecteur", "zitter", "liefhebber", "visser", "schepper", "specialist", "schoonmaker", "verkoper", "wasser", "bakker", "temmer", "progammeur", "vlogger")

let emojis = Array("😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "🙁", "☹️", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👹", "👺", "🤡", "💩", "👻", "💀", "☠️", "👽", "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "👀", "👶", "👧", "🧒", "👦", "👩", "🧑", "👨", "👩‍🦱", "👨‍🦱", "👩‍🦰", "👨‍🦰", "👱‍♀️", "👱‍♂️", "👩‍🦳", "👨‍🦳", "👩‍🦲", "👨‍🦲", "🧔", "👵", "🧓", "👴", "👲", "👳‍♀️", "👳‍♂️", "🧕", "👮‍♀️", "👮‍♂️", "👷‍♀️", "👷‍♂️", "💂‍♀️", "💂‍♂️", "🕵️‍♀️", "🕵️‍♂️", "👩‍⚕️", "👨‍⚕️", "👩‍🌾", "👨‍🌾", "👩‍🍳", "👨‍🍳", "👩‍🎓", "👨‍🎓", "👩‍🎤", "👨‍🎤", "👩‍🏫", "👨‍🏫", "👩‍🏭", "👨‍🏭", "👩‍💻", "👨‍💻", "👩‍💼", "👨‍💼")

let livingPlaces = Array("huis", "grot", "hutje", "auto", "boomhut", "helicopter", "snoepautomaat", "kast", "flat", "snackbar", "school", "doos", "fabriek", "boot")

//rarity
let rarityNames = Array("Super legendarisch!!!", "legendarisch!!!", "episch!!", "zeldzaam!", "normaal")
let backgroundColor = Array("rgb(57,30,214)", "rgb(14,22,109)", "rgb(252,37,233)", "rgb(253,147,38)", "rgb(255, 255, 255)")
let textColor = Array("rgb(133,246,118)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(0, 0, 0)")

function decideRarity(rarity) {
    //if you change these numbers with inspect element then you do not have any friends :-)
    if (rarity > 9999) {
        //super legendary
        return 0
    } else if (rarity > 9990) {
        //legendary
        return 1
    } else if (rarity > 9900) {
        //epic
        return 2
    } else if (rarity > 9000) {
        //rare
        return 3
    } else {
        //normal
        return 4
    }
}

function setRarity() {
    let personRarity = randomNumber(1, 10000)
    document.getElementById("rarity").innerHTML = rarityNames[decideRarity(personRarity)]
    document.getElementById("body").style.background = backgroundColor[decideRarity(personRarity)]
    document.getElementById("body").style.color = textColor[decideRarity(personRarity)]
}

function generateRandaam() {
    setRarity()
    document.getElementById("emoji").innerHTML = randomElement(emojis)
    document.getElementById("randaam").innerHTML = randomElement(names) + " de " + randomElement(objects) + " " + randomElement(action);
    document.getElementById("livingPlace").innerHTML = "woont in een " + randomElement(livingPlaces)
}

window.onload = generateRandaam

window.onclick = generateRandaam

window.onkeydown = generateRandaam

