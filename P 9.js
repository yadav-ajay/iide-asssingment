// Write a function findRepeat that very first charecter that repeats in a given string.
// It should return the repeated character, else if no characters are repeated it should return null.

let findRepeat = (str) => {
    const map = new Map;
    let result;
    let maxCount = 0;
    for (let ch of str) {
        let count = (map.get(ch) || 0) + 1;
        map.set(ch, count);
        if (count > maxCount) {
            maxCount = count;
            result = ch;
        }
    }
    return result;
}
console.log(findRepeat("prasrhhadcgg"));
