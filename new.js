const sections = document.querySelectorAll('.section');
const sectBts = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const jokeButton = document.querySelector(".getJoke");
const jokeHolder = document.querySelector(".joke");
jokeButton.addEventListener("click", handleClick);


function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sctions Active 
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //resmove selected from the other btns
            sectBts.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();

const buttonText = [
    "Ugh.",
    "🤦🏻‍♂️",
    "omg dad.",
    "you are the worst",
    "seriously",
    "stop it.",
    "please stop",
    "that was the worst one",
];
function randomItemFromArray(arr, not) {
    const item = arr[Math.floor(Math.random() * arr.length)];
    return item;
}
//API function for getting dad joke
async function fetchJoke() {
    const response = await fetch("http://icanhazdadjoke.com", {
        headers: {
        Accept: "application/json",
        },
    });  
 
return response.json();
}
  
async function handleClick() {
    const { joke } = await fetchJoke();
    jokeHolder.textContent = joke;
    jokeButton.textContent = randomItemFromArray(
        buttonText,
        jokeButton.textContent
    );
}