//ДЗ №17 - 4/4
/*
У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
Вивести зображення з цієї папки отримане випадковим чином (Math.random)
*/

const image = document.getElementById ('image');
const loadImageButton = document.getElementById('loadImage');
const imageCount = 9; 
const imagesFolder = './images/';

loadImageButton.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * imageCount) + 1;
    const imageUrl = imagesFolder + randomNumber + '.jpeg';
    image.src = imageUrl;
    image.style.height = '500px';
    image.style.width = '600px';
});

