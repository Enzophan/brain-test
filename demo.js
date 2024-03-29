var brain = require('brain.js');


var network = new brain.NeuralNetwork();

// network.train([
//     { input: [0, 0, 0], output: [0] },
//     { input: [0, 0, 1], output: [0] },
//     { input: [0, 1, 1], output: [0] },
//     { input: [1, 0, 1], output: [1] },
//     { input: [1, 1, 1], output: [1] }
// ]);

// const output = network.run([0, 1, 1]);


network.train([
    { input: [1, 2], output: [1] },
    { input: [1, 3], output: [1] },
    { input: [2, 3], output: [0] },
    { input: [2, 4], output: [1] },
    { input: [1, 2], output: [0] },
    { input: [1, 3], output: [0] },
    { input: [3, 4], output: [0] }

]);

var output = network.run([1, 4]);


console.log(`Prob: ${output}`);