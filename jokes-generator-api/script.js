const joke = document.getElementById("joke");
const btn = document.getElementById("btn");
const jokeAPI = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?type=single';

btn.addEventListener("click", ()=>{
    joke.classList.remove("joke-fade");

    fetch(jokeAPI)
    .then( (data) => data.json() )
    .then( (item)=>{
        joke.innerText = `${item.joke}`;
        joke.classList.add("joke-fade");
    })

});
