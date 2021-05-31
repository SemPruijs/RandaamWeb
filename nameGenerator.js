function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function randomNumber(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
}

let names = Array("Harry", "Bert", "Henk", "Sebastiaan", "Papa", "Rutger", "Mama", "Lars", "Steven", "Jannes", "Iwan", "Milan", "Bertwim", "Amgela", "Jorgiam", "Hansje", "Pim", "Sandra", "Hennie", "Achmet", "Dirkjan", "Barbaba", "Jeroen", "Riejan", "Willem", "Leo", "Meneer", "Bas", "Dennis", "Jan", "Kees", "Lies", "Sem", "Jan", "Cor", "Lucas", "Finn", "Daan", "Levi", "Milan", "Bram", "Luuk", "Emma", "Tess", "Sophie", "Julia", "Anna", "Mila", "Sara", "Luuk", "Jesse", "Mees", "Thomas", "Sam", "Thijs", "Adam", "Max", "Jullian", "Hugo", "Gijs", "Benjamin", "Tim", "Ruben", "Teun", "Olivier", "Sven", "David", "Stijn", "Tom", "Isa", "Noa", "Jasmijn", "Esmee", "Sanne", "Joël", "Emmanuel", "Nathan", "Tobias", "Alex", "Daniële", "Elias", "Carlijn", "Caroline", "Lisanne", "Marije", "Tirza", "Naomi", "Joyce", "Indy", "Marith", "Micha", "Hayanne", "Isa", "Nadine", "Aron")


let objects = Array("stoep", "dinosaurus", "klokken", "lampen", "mieren", "appelmoes", "poep", "bank", "goudvis", "ramen", "pizza", "banannen", "blopvis", "pennen", "bomen", "schoenen", "fietspompen", "fietsen", "deur", "bezem", "eekhoorn", "muis", "tafel", "cavia", "koek", "luiaart", "paarden", "melkpak", "chocola", "bananentros", "cavia", "brulaap", "duiven", "ezel", "geiten", "neushoorn", "zwijnen", "struisvogel", "varken", "parkiet", "stokbrood", "boeken")

let action = Array("inspecteur", "zitter", "liefhebber", "visser", "schepper", "specialist", "schoonmaker", "verkoper", "wasser", "bakker", "temmer", "progammeur", "vlogger")

let emojis = Array("😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "🙁", "☹️", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👹", "👺", "🤡", "💩", "👻", "💀", "☠️", "👽", "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "👀", "👶", "👧", "🧒", "👦", "👩", "🧑", "👨", "👩‍🦱", "👨‍🦱", "👩‍🦰", "👨‍🦰", "👱‍♀️", "👱‍♂️", "👩‍🦳", "👨‍🦳", "👩‍🦲", "👨‍🦲", "🧔", "👵", "🧓", "👴", "👲", "👳‍♀️", "👳‍♂️", "🧕", "👮‍♀️", "👮‍♂️", "👷‍♀️", "👷‍♂️", "💂‍♀️", "💂‍♂️", "🕵️‍♀️", "🕵️‍♂️", "👩‍⚕️", "👨‍⚕️", "👩‍🌾", "👨‍🌾", "👩‍🍳", "👨‍🍳", "👩‍🎓", "👨‍🎓", "👩‍🎤", "👨‍🎤", "👩‍🏫", "👨‍🏫", "👩‍🏭", "👨‍🏭", "👩‍💻", "👨‍💻", "👩‍💼", "👨‍💼")

let livingPlaces = Array("huis", "grot", "hutje", "auto", "boomhut", "helicopter", "snoepautomaat", "kast", "flat", "snackbar", "school", "doos", "fabriek", "boot")

//rarity
let Rarity = class {
    constructor(name, backgroundColor, textColor) {
        this.name = name
        this.backgroundColor = backgroundColor
        this.textColor = textColor
    }

    apply() {
        document.getElementById("rarity").innerHTML = this.name
        document.getElementById("body").style.background = this.backgroundColor
        document.getElementById("body").style.color = this.textColor
    }
}

let rarities = Array(
    new Rarity("Super legendarisch!!!", "rgb(57,30,214)", "rgb(133,246,118)"),
    new Rarity("legendarisch!!!", "rgb(14,22,109)", "rgb(255, 255, 255)"),
    new Rarity("episch!!", "rgb(252,37,233)", "rgb(255, 255, 255)"),
    new Rarity("zeldzaam", "rgb(253,147,38)", "rgb(255, 255, 255)"),
    new Rarity("normaal", "rgb(255, 255, 255)", "rgb(0, 0, 0)")
)


function decideRarity(rarity) {
    //if you change these numbers with inspect element then you do not have any friends :-)
    if (rarity > 9999) {
        //super legendary
        return rarities[0]
    } else if (rarity > 9990) {
        //legendary
        return rarities[1]
    } else if (rarity > 9900) {
        //epic
        return rarities[2]
    } else if (rarity > 9000) {
        //rare
        return rarities[3]
    } else {
        //normal
        return rarities[4]
    }
}

function setRarity() {
    let personRarity = randomNumber(1, 10000)
    decideRarity(personRarity).apply();
}

function generateRandaam() {
    setRarity()
    document.getElementById("income").innerHTML = "&euro; " + randomNumber(1, 1000).toString() + " / week"
    document.getElementById("emoji").innerHTML = randomElement(emojis)
    document.getElementById("randaam").innerHTML = randomElement(names) + " de " + randomElement(objects) + " " + randomElement(action);
    document.getElementById("livingPlace").innerHTML = "woont in een " + randomElement(livingPlaces)
}

window.onload = generateRandaam

window.onclick = generateRandaam

window.onkeydown = generateRandaam

