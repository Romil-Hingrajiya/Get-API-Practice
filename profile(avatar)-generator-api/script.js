let click = document.getElementById("click");

click.addEventListener('click', ()=>{
    let nameInput = document.getElementById('nameInput');
    let imgChange = document.getElementById("img");

    if(click){
        let name = nameInput.value;
        alert(name);
        nameInput.value = "";

        imgChange.src = `https://joesch.moe/api/v1/${name}`;

    }
})