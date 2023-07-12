
let quoteList = [
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },

    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Get busy living or get busy dying."
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison"
    },
    {
        quote: "If you want to live a happy life, tie it to a goal, not to people or things.",

        author: "Albert Einstein"

    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: " Will Smith"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor",
        author: " Henry Ford",
    },
    {
        quote: "In order to write about life first you must live it.",
        author: " Ernest Hemingway",
    },
] 

let quoteEle= document.getElementById("quote");
let authorEle = document.getElementById("author");

function getLocalQuotes(){
    let i = Math.floor(Math.random()*quoteList.length)
    quoteEle.innerText= quoteList[i].quote
    authorEle.innerText = "--" + "  " + quoteList[i].author
}



async function quoteAPI(){
    let response = await fetch("https://api.quotable.io/random");
    console.log(response)
    let quote = await response.json()
    console.log(quote)
    quoteEle.innerHTML = quote.content
    authorEle.innerText = "--" + "--" + quote.author
}

document.getElementById("getQuote").onclick= getLocalQuotes