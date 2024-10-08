const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://api.quotable.io/quotes/random";

async function getquote(url) {
    const response = await fetch(url);
    let data = await response.json();

    if (response.ok) {
        quote.textContent = data[0].content;
        author.textContent = data[0].author;
    } else {
        quote.textContent = "An error occurred! Couldn't load Your daily inspiration...";
    }
}

getquote(api_url);