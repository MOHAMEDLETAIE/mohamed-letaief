function analyzeSentence(sentence) {
    let wordCount = 0;
    let vowelCount = 0;
    const vowels = new Set("aeiouAEIOU"); // Using a set for fast lookup
    
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        
        if (char === ' ') {
            wordCount++;
        } else if (vowels.has(char)) {
            vowelCount++;
        }
    }
    
    // Add 1 for the last word (ends with a point '.')
    wordCount++;
    
    return { wordCount, vowelCount };
}

// Example usage:
const sentence = "Hello world. This is a sample sentence.";
const { wordCount, vowelCount } = analyzeSentence(sentence);
console.log(`Number of words: ${wordCount}`);
console.log(`Number of vowels: ${vowelCount}`);
function sumOfDistinctElements(set1, set2) {
    const distinctElements = new Set([...set1, ...set2]);
    let totalSum = 0;
    
    distinctElements.forEach(element => {
        totalSum += element;
    });
    
    return totalSum;
}

// Example usage:
const set1 = new Set([3, 1, 7, 9]);
const set2 = new Set([2, 4, 1, 9, 3]);
const result = sumOfDistinctElements(set1, set2);
console.log(`Sum of distinct elements: ${result}`);
