const quote = document.getElementById("quote");
const author = document.getElementById("author");

const apiURL = "https://quotes-api-self.vercel.app/quote";

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();

    if (response.ok) {
        quote.textContent = data.quote;
        author.textContent = data.author;
    } else {
        quote.textContent = "An error occurred! Couldn't load Your daily inspiration...";
    }
}

getQuote(apiURL);
