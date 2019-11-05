let hand1 = [];
let hand2 = [];
let deck1 = [];
let deck2 = [];
let minions = [];
let p1minions = [];
let p2minions = [];

let card = {
    name: this.name,
    cost: this.cost,
    atk: this.atk,
    hp: this.hp,
    type: this.type,
    effect: this.effect,

}

let wisp = {
    name: "Wisp",
    atk: 1,
    hp: 1,
    cost: 0,
    type: "none",
    effect: "",
    text: "none",
    sound: "",
    lore: "If you hit an Eredar Lord with enough Wisps, it will explode. But why?"
}

let farieDragon = {
    name: "Farie Dragon",
    atk: 3,
    hp: 2,
    cost: 2,
    type: "dragon",
    effect: "untargetable",
    text: "Can't be targeted by spells or hero powers",
    sound: "",
    lore: "Adorable. Immune to Magic. Doesn't pee on the rug. The perfect pet!"
}

//load up decks
for (let i = 0; i < 30; i++) {
    deck1.push(farieDragon);
    deck2.push(wisp);
}

let player1 = {
    hp: 30,
    hand: hand1,
    deck: deck1
}

let player2 = {
    hp: 30,
    hand: hand2,
    deck: deck2
}

function fight(minion1, minion2) {
    minion1.hp = minion1.hp - minion2.atk;
    minion2.hp = minion2.hp - minion1.atk;
}

console.log(deck1);
console.log(deck2);



