// Write a function starPattern that prints the following pattern in the console.

let starPattern = (a) => {
for(var i = 1; i <= a; i++){
    console.log("*".repeat(i));
  }
}
starPattern(10);