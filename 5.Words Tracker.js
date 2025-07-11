function wordsTracker(arr) {
    let wordsObj = {}
    arr.shift().split(" ").forEach(word => {
        wordsObj[word] = 0
    });
    for (const word of arr) {
        if (wordsObj.hasOwnProperty(word)) {
            wordsObj[word] += 1
        }
    }
   let sortedArr = Object.entries(wordsObj).sort((a,b) => b[1] - a[1])
    for (const words of sortedArr) {
       
       console.log(`${words[0]} - ${words[1]}`);
        
    }
}



wordsTracker([
'this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)