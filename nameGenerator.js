function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)]
}
let names = Array("Harry", "Bert", "Henk", "Sebastiaan", "Papa","Rutger", "Mama", "Lars", "Steven", "Jannes",  "Iwan","Milan","Bertwim","Amgela","Jorgiam","Hansje","Pim","Sandra","Hennie","Achmet","Dirkjan","Barbaba","Jeroen","Riejan","Willem","Leo","Meneer","Bas","Dennis","Jan","Kees","Lies","Sem","Jan","Cor","Lucas","Finn","Daan","Levi","Milan","Bram","Luuk","Emma","Tess","Sophie","Julia","Anna","Mila","Sara","Luuk","Jesse","Mees","Thomas","Sam","Thijs","Adam","Max","Jullian","Hugo","Gijs","Benjamin","Tim","Ruben","Teun","Olivier","Sven","David","Stijn","Tom","Isa","Noa","Jasmijn","Esmee","Sanne","Joël","Emmanuel","Nathan","Tobias","Alex","Daniële","Elias","Carlijn","Caroline","Lisanne","Marije","Tirza","Naomi","Joyce","Indy","Marith","Micha","Hayanne","Isa","Nadine","Aron")


let objects = Array("stoep", "dinosaurus", "klokken", "lampen","mieren","appelmoes", "poep", "bank", "goudvis","ramen","pizza","banannen","blopvis","pennen","bomen","schoenen","fietspompen","fietsen","deur","bezem","eekhoorn","muis","tafel","cavia","koek","luiaart","paarden","melkpak","chocola","bananentros","cavia","brulaap","duiven","ezel","geiten","neushoorn","zwijnen","struisvogel","varken","parkiet","stokbrood","boeken")

let action = Array("inspecteur", "zitter", "liefhebber", "visser", "schepper", "specialist", "schoonmaker","verkoper","wasser","bakker","temmer","progammeur","vlogger")

let emojis = Array("😀","😃","😄","😁","😆","😅","😂","🤣","☺️","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🤩","🥳","😏","😒","😞","😔","😟","😕","🙁","🙁","☹️","☹️","😣","😖","😫","😩","🥺","😢","😭","😤","😠","😡","🤬","🤯","😳","🥵","🥶","😱","😨","😰","😥","😓","🤗","🤔","🤭","🤫","🤥","😶","😐","😑","😬","🙄","😯","😦","😧","😮","😲","😴","🤤","😪","😵","🤐","🥴","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠","😈","👿","👹","👺","🤡","💩","👻","💀","☠️","👽","👾","🤖","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾","👀","👶","👧","🧒","👦","👩","🧑","👨","👩‍🦱","👨‍🦱","👩‍🦰","👨‍🦰","👱‍♀️","👱‍♂️","👩‍🦳","👨‍🦳","👩‍🦲","👨‍🦲","🧔","👵","🧓","👴","👲","👳‍♀️","👳‍♂️","🧕","👮‍♀️","👮‍♂️","👷‍♀️","👷‍♂️","💂‍♀️","💂‍♂️","🕵️‍♀️","🕵️‍♂️","👩‍⚕️","👨‍⚕️","👩‍🌾","👨‍🌾","👩‍🍳","👨‍🍳","👩‍🎓","👨‍🎓","👩‍🎤","👨‍🎤","👩‍🏫","👨‍🏫","👩‍🏭","👨‍🏭","👩‍💻","👨‍💻","👩‍💼","👨‍💼")

let livingPlaces = Array("huis","grot","hutje","auto","boomhut","helicopter","snoepautomaat","kast","flat","snackbar","school","doos","fabriek", "boot")


window.onload = function() {
    document.getElementById("emoji").innerHTML = randomElement(emojis)
    document.getElementById("randaam").innerHTML = randomElement(names) + " de " + randomElement(objects) + " " + randomElement(action);
}

