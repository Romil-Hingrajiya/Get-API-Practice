const quote = document.getElementById("quote");
const technology = document.getElementById("technology");
const history = document.getElementById("history");

const quoBtn = document.getElementById("quoBtn");
const techBtn = document.getElementById("techBtn");
const hisBtn = document.getElementById("hisBtn");

const quoteAPI = 'https://api.quotable.io/quotes/random?limit=3';
const technologyAPI = 'https://api.quotable.io/quotes/random?tags=technology,famous-quotes';
const historyAPI = 'https://api.quotable.io/quotes/random?tags=history|civil-rights';

function callURL(API,display){
    display.classList.remove("quote-fade");

    fetch(API)
    .then( (data) => data.json() )
    .then( (item)=>{
        console.log(item)
        display.innerText = `${item[0].content}`;
        display.classList.add("quote-fade");
    })
}

quoBtn.addEventListener("click", () => { callURL(quoteAPI, quote) });
techBtn.addEventListener("click", () => { callURL(technologyAPI, technology) });
hisBtn.addEventListener("click", () => { callURL(historyAPI, history) });
// addEventListener( "click", callURL(historyAPI, history) );  // it will execute(call) direct function & result will be unexpected


// you can write separate function for every btn
/*quoBtn.addEventListener("click", ()=>{
    quote.classList.remove("quote-fade");

    fetch(quoteAPI)
    .then( (data) => data.json() )
    .then( (item)=>{
        quote.innerText = `${item[1].content}`;
        quote.classList.add("quote-fade");
    })

});

techBtn.addEventListener("click", ()=>{
    technology.classList.remove("quote-fade");

    fetch(technologyAPI)
    .then( (data) => data.json() )
    .then( (item)=>{
        technology.innerText = `${item[0].content}`;
        technology.classList.add("quote-fade");
    })

});

hisBtn.addEventListener("click", ()=>{
    history.classList.remove("quote-fade");

    fetch(historyAPI)
    .then( (data) => data.json() )
    .then( (item)=>{
        history.innerText = `${item[0].content}`;
        history.classList.add("quote-fade");
    })

});
*/
