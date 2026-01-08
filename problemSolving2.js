// Problem 2: Count Vowels

function countVowels(str) {
    let count = 0;
    let vowels = 'aeiou';
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
const vowels = countVowels("Masad");
console.log(vowels);
