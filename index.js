console.log("Hiermit beginne ich meinen Weg als GTA 6 Developer!");
// alert("Willkommen!");

let playerId, playerscore; // Hier wird eine Variable zunächst nur Erstellt noch keinen Wert zugefügt. 
// Man kann auch mehrere mit einen Komma hintereinander erstellen.

let playerName = "BUSYwithThaUzi"; // Erstellung einer Variable, man kann den Wert direkt zuweisen oder erst später.
console.log(playerName); // console.log und dann die Variable als Wertangabe.

playerName = "MakaKnacker"; // Hier wird der Wert der Variable verändert, im laufe des Codes kann man den Wert der Variable ändern.
console.log(playerName); // Jetzt wird hier der neue Wert der Variable ausgegeben, der Code wird von oben nach unten gelesen.

//Man kann auch eine Constante Variable erstellen, dessen Wert im laufe des Codes nicht verändert werden kann.
const Pi = 3.141;

const name = "Joel Neto Romeira"
const age = 21.34; // Man kann den Datentyp number auch für Kommazahlen benutzen.
const isMarried = false;
const address = undefined;
const state = null; // null wird benutzt wenn der Wert wirklich null sein soll es ist also nicht undefined sondern null.

console.log(typeof name); // Mit typeof vor der Variable kann man Abfragen um was für einen Datentyp es sich handelt.

playerName = 25; // Du kannst String Variablen in eine number Variable problemlos im laufe des Codes ändern.
console.log(playerName);

const nummer = 21;
const nummertostring = nummer.toString(); // Die Variable nummer wird zu einen String geändert.


const texttonumber = "21.5445"; // Die String Variable wird zu einer nummer Variable geändert.
let text = parseInt(texttonumber); // Damit werden keine Nachkommastellen mit eingebunden.
text = parseFloat(texttonumber); // Damit werden Nachkommastellen mit eingebunden.


// Erste Challenge 
/*const alter = prompt("Wie alt bist du?"); // Ein Popupfenster wo man reinschreiben kann.

console.log(alter); // Hier wird der Wert der in den Prompt geschrieben wurde in der Console ausgegeben.
console.log(typeof alter) // Hier wird der Typ des Datentypes in der Console ausgegeben.
const ageNumber = parseInt(alter); // Hier wird eine neue Variable erstellt wo der Wert des Promptes welcher ins Popupfenster eingegeben wird in eine Number Variable geändert.
console.log(typeof ageNumber) // Hier wird der Datentyp der veränderten Variable ausgegeben.
alert("Du bist " + ageNumber + " Jahre alt!") // Ein Popup welches das Alter (Den Wert welcher ins Prompt eingegeben wurde ausgegeben.)
*/

let a = 25;
let b = 26;
let c = 7;
let d = 10;

let biggerNumber = (a > b)
    ? a 
    : b;
console.log(biggerNumber);

/*const hasTicket = true; // hasTicket ist bereits ein boolean, deswegen muss man später nicht abfragen ob es du ist. Es hat den Wert True oder False schon in sich.
const ageId = parseInt(prompt("Wie alt bist du?"));
const money = parseInt(prompt("Wie viel Geld hast du? Ticket: 10$"))
const ageVerification = (ageId >= 18 && money >= 10 && hasTicket)
        ? "Eintritt erlaubt!"
        : "Eintritt verboten!";
alert(ageVerification);*/

/*const zahl = parseInt(prompt("Gebe eine Zahl ein."));
const checkzahl = (zahl > 0)
        ? "Positivezahl"
        : (zahl < 0) ? "Minuszahl" : "Null";
console.log(checkzahl);*/
// b = c + d; // Man kann eine Variable die nicht constant ist ändern und zu dem Wert aus zwei anderen Variablen ändern.

console.log("a + b = ", a + b ); // Variable a und Variable b werden zusammengerechnet und die Console gibt 5 aus.
console.log("c - a = ", c - a ); 
console.log("a * c = ", a * c );
console.log("a / c = ", a / c);

// Plus, Minus, Mal, Geteilt sind die Standard Operatoren

console.log("a % c = ", a % c); // Die zweite Zahl wird versucht in die erste Zahl zu stecken, das was übrig bleibt ist das Ergebnis.
console.log("a**b = ", a**b); // Exponentiation (**) Der rechte Wert gibt an wie oft sich der linke Wert mit sich selbst multipliziert.
console.log("-a = ", -a) // Negation, aus einer positiven Zahl wird eine negative Zahl und aus einer negativen eine Positive.

console.log("a =" + a + ", b = " + b)

let firstName = "Joel";
let lastName = "Romeira";

let Name = firstName + " " + lastName; // Man kann zwei Textvariablen miteinander verbinden.
console.log(Name);

let ab;
ab++; // gleich wie: ab = ab + 1: Erst wird der aktuelle Wert verwendet, danach wird die Variable um +1 erhöht.
++ab; // auch +1 aber zuerst wird die Variable um +1 erhöht, danach wird der neue Wert verwendet.
ab--; // gleich wie ab = ab - 1: Erst wird der aktuelle Wert verwendet, danach wird die Variable um -1 verringert.
--ab; // auch -1 aber zuerst wird die Variable um -1 verringert, danach wird der neue Wert verwendet.

const victimDead = true;
const treacherous = false;
const cruel = false;
const baseMotives = true;

const isMurder = victimDead && (treacherous || cruel || baseMotives);
const isManslaughter = victimDead && !(treacherous || cruel || baseMotives); // Das ! dreht den boolischen Wert um true und false es bedeutet "nicht".
console.log("Ist es Mord?: ", isMurder);
console.log("Ist es Todschlag?: ", isManslaughter)

const option = parseInt(prompt(
    "1 = Kontostand\n" +
    "2 = Einzahlen\n" +
    "3 = Abheben"
));

let menu = (option === 1)
    ? "Kontostand:"
    : (option === 2)
        ? "Einzahlen"
        : (option === 3)
            ? "Abheben"
            : "Ungültige Zahl";
alert(menu);

let balance = 100;
let userWithdraw = parseInt(prompt("Wie viel Geld willst du abheben?: "));

let enoughmoney = userWithdraw <= balance;
balance = enoughmoney
    ? balance - userWithdraw
    : balance;

let message = (enoughmoney)
    ? "Du hast erfolgreich " + userWithdraw + " abgehoben! Aktueller Kontostand: " + balance
    : "Du hast zu wenig Guthaben! Dein Kontostand: " + balance;

alert(message);
