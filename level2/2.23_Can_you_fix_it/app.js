var array = ["Inverted Peninsula", ",", 
  "Inverted Peninsula", ", ", "I", "—", 
  "P", "...", "hmmm", "."];
var internalThoughts = "";

console.time("Test");

internalThoughts = array.join(" ");

console.time("innerTest");
console.log(internalThoughts);
console.timeEnd("innerTest");

console.timeEnd("Test");
