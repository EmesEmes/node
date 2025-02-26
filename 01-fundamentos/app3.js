const fs = require("fs")
const content = fs.readFileSync("README.md", "utf-8")
const words = content.split(" ");

// const reactCount = words.filter((word) => word.toLowerCase().includes("react")).length;

const reactCount = content.match(/react/gi ?? []).length

console.log("Palabras: ", words.length)
console.log("Palabras React encontradas: ", reactCount)
