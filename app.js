const reviews = [
    {
        id: 1,
        name: "Pedro Prexi",
        job: "UX Designer",
        img: "./images/1.jpeg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, eius culpa rerum animi, reprehenderit, soluta qui inventore beatae quod optio aliquid ea fuga nulla commodi. Totam neque facere illum ea."
    },
    {
        id: 2,
        name: "Juana Aurora",
        job: "Product Manager",
        img: "./images/2.jpeg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, eius culpa rerum animi, reprehenderit, soluta qui inventore beatae quod optio aliquid ea fuga nulla commodi. Totam neque facere illum ea."
    },
    {
        id: 3,
        name: "El viejo Loco",
        job: "The Boss",
        img: "./images/3.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, eius culpa rerum animi, reprehenderit, soluta qui inventore beatae quod optio aliquid ea fuga nulla commodi. Totam neque facere illum ea."
    },
]

const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentIntem = 0;

window.addEventListener( "DOMContentLoaded", function(){
   showPerson(currentIntem)
} ) 

function showPerson( person ){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text
}

nextBtn.addEventListener( 'click', function(){
    currentIntem++;
    if( currentIntem > reviews.length -1 ){
        currentIntem = 0
    }
    showPerson( currentIntem )
} )

prevBtn.addEventListener( 'click', function(){
    currentIntem--;
    if( currentIntem < 0  ){
        currentIntem = reviews.length - 1
    }
    showPerson( currentIntem )
} )

randomBtn.addEventListener( 'click', function(){
    currentIntem = Math.floor( Math.random(  ) * reviews.length )
    showPerson( currentIntem )
} )