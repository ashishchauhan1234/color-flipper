const colors = ["green" , "red" ,"blue","#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click',function () {
// console.log(document.body);
// get random numbers between 0-3
//     const randomNumber = 2;
//     document.body.style.backgroundColor= colors[randomNumber];
//     color.textContent = colors[randomNumber];

//       GETTING VALUES BY USING RANDOM FUNCTION

     const randomNumber = getRandomNumber();
     console.log(randomNumber);
     document.body.style.backgroundColor= colors[randomNumber];
     color.textContent = colors[randomNumber];

});

function getRandomNumber() {
//    return parseInt(Math.random()*colors.length);
    return Math.floor(Math.random()*colors.length);
}
