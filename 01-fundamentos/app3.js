const fs = require('fs');

console.clear();

const content = fs.readFileSync("README.md", "utf8");

const wordCount = content.split(" ");

const filterReact = wordCount.filter((word) => {
    return word === "React"
});



//console.log(`Tiene ${content.length} characters`);
//console.log(`Tiene ${wordCount} palabras`);

console.log(`React \n${filterReact}`);
console.log(`Tiene ${filterReact.length} palabras`);