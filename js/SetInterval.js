let image = document.querySelector(".image");
let interval = document.querySelector(".interval");
let form = document.getElementById('form');


const imgLinks = [
    './img/one.jpg',
    './img/two.jpg',
    './img/three.jpg',
    './img/four.jpg'
];

form.onsubmit = function (evt) {
    let intervalNumber = 1000 * Number(interval.value);
    let currentIndex = 0;
    let intervalID = setInterval(function () {
        image.src = imgLinks[currentIndex];
        currentIndex++;
        if (currentIndex >= imgLinks.length) {
            currentIndex = 0;
        }
    }, intervalNumber);
    form.onreset = function (evt) {
        clearInterval(intervalID);
        interval.value = '';
        evt.preventDefault();
    }
    evt.preventDefault();
}
