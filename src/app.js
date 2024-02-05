let pronoun = ['the', 'our', 'my'];
let adj = ['great', 'big', 'sad'];
let noun = ['jogger', 'racoon', 'plane'];

function printPossibilities(pronoun, adj, noun) {
  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let y = 0; y < noun.length; y++) {
        console.log(`${pronoun[i]}${adj[x]}${noun[y]}.com`);
      }
    }
  }
}

printPossibilities(pronoun, adj, noun);


