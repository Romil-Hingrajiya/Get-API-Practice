let meme = document.getElementById("meme");
let title = document.getElementById("title");
let memeBtn = document.getElementById("memeBtn");
//API(URL)
let url = " https://meme-api.com/gimme";

//Array of subreddits of your choice
// let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];

//Function To Get Random Meme
let getMeme = () => {
  //Choose a random subreddit from the subreddits array
  //let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];

  //Fetch data from the api
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
    //   console.log(data);

      let memeImg = new Image();
      //Display meme image and title only after the image loads
      memeImg.onload = () => {
        meme.src = data.url;
        if (data.title == 'me_irl') {
            title.innerHTML = "";
        } else {
            title.innerText = data.title;
        }
      };
      memeImg.src = data.url;
    });
};

//Call the getMeme() on button click and on window load
memeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
