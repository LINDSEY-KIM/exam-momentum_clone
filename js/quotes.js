const quotes = [

    {
        quote: "When you get tired, learn to rest, not quit.",
        author: "BANKSY",
    },
    {
        quote: "When in doubt, choose change.",
        author: "Lily Leung",
    },
    {
        quote: "Hard work beats talent when talent doesn't work hard.",
        author: "Tim Notke",
    },
    {
        quote: "Everything has beauty, but not everyone sees it.",
        author: "CONFUCIUS",
    },
    {
        quote: "Some of the most wonderful people are the ones who don't fit into boxes.",
        author: "Tori Amos",
    },
    {
        quote: "The bad news is time files. The good news is you're the pilot.",
        author: "MICHEL ALTSHULER",
    },
    {
        quote: "Start where you are. Use what you have. Do what you can.",
        author: "ARTHUR ASHE",
    },
    {
        quote: "I have always known what I wanted, and that was beauty...in every form.",
        author: "JOAN CRAWFORD",
    },
    {
        quote: "More powerful than the will to win is the courage to begin.",
        author: "Orrin Woodward",
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson MAndela",
    },

];

const quote = document.querySelector("#quote span:nth-child(1)");
const author = document.querySelector("#quote span:nth-child(2)");

// Math.floor(Math.random() * 10);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;