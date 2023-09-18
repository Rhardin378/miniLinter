let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];
let storyWords = story.split(' ')
console.log(storyWords.length)
// filter out unnecessary words using the filter method on story words  
// everytime the iterator function is run it will check the current word against the words in the unneccessary words aray if the current word is not in the unnecessary lit it will be added to the filtered array
let betterWords = storyWords.filter(function(word){
    return !unnecessaryWords.includes(word)
})
console.log(betterWords)

const totalOverUsedWords =
    betterWords.reduce(function(accumulator, word){
        overusedWords.forEach(function(overWord){
            if (word.includes(overWord)){
                accumulator[overWord] += 1
            }
        })
        return accumulator
    },{
        really: 0,
        very: 0, 
        basically: 0
    })


let sentences = 0

for (let i = 0; i < betterWords.length; i++) {
    let string = betterWords[i]
    if(string[string.length - 1] === '!'){
        console.log(string)
        sentences += 1
    } else if ( string[string.length -1] === '.') {
        console.log(string)
        sentences += 1
    }
}

const giveStats = function(){
    console.log(`The word count is: ${storyWords.length}.  There are ${sentences} sentences in this essay.  You used the following overused words: \n ${overusedWords[0]}: ${totalOverUsedWords[overusedWords[0]]} times \n ${overusedWords[1]}: ${totalOverUsedWords[overusedWords[1]]} times \n ${overusedWords[2]}: ${totalOverUsedWords[overusedWords[2]]} time.`)
}

giveStats()

console.log(betterWords.join(" "))
