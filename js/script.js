// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array of Images
let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

// // Change Background Image Url
// landingPage.style.backgroundImage = 'url("imgs/3.jpg")';

// Get Random Numer
// let randomNumber = Math.floor(Math.random() * imgsArray.length);

// console.log(randomNumber);

setInterval(() => {

    // Get Random Numer
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    console.log(randomNumber);

    // Change Background Image Url
    landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';

    // console.log(randomNumber);

}, 10000);


const burger = document.querySelector('.burger');
const links = document.querySelector('.links');

burger.addEventListener('click', () => {
    links.classList.toggle("active");
});

document.querySelectorAll('.links').forEach(n => n.addEventListener('click', () => {
    links.classList.remove('.active');
}));

