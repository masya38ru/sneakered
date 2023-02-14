let images = ['one', 'two', 'three', 'four'];

let blocks = document.querySelectorAll('.img');

images.forEach((elem, key) => {
    blocks[key].innerHTML = `<img src="./img/${elem}.jpg">`;
    blocks[key].addEventListener('mouseover', function (e) {
        blocks[key].innerHTML = `<img src="./img/${elem}2.jpg">`;
    })

    blocks[key].addEventListener('mouseout', function (e) {
        blocks[key].innerHTML = `<img src="./img/${elem}.jpg">`;
    })
})
