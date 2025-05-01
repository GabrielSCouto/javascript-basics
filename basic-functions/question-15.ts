function findLongestWord(text: string): string {
    let words = text.split(" ");
    let longest = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}

console.log(findLongestWord("Tutorial de desenvolvimento da web"));
