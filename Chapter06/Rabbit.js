function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("Oh my ears and whiskers, " +
    "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
//   late it's getting!'
hungryRabbit.speak("I could use a carrot right now.");
// → The hungry rabbit says 'I could use a carrot right now.'

speak.call(hungryRabbit, "Burp!");

function normalize() {
    console.log(this.coords.map(n => n / this.length));
}
normalize.call({ coords: [0, 2, 3], length: 5 });
// → [0, 0.4, 0.6]

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

blackRabbit.speak('Toy là B-Rabbit')

Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
  };
  
  console.log(String(blackRabbit));
  // → a black rabbit