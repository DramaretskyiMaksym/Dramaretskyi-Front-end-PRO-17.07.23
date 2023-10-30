//ДЗ №17 - 4/4
/*
У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
Вивести зображення з цієї папки отримане випадковим чином (Math.random)
*/

const image = document.getElementById('image');
const loadImageButton = document.getElementById('loadImage');
const imageCount = 9; // Загальна кількість фотографій
const imagesFolder = './image/'; // Вкажіть шлях до папки з фотографіями на сервері

loadImageButton.addEventListener('click', function() {
    // Генеруємо випадковий номер фотографії
    const randomNumber = Math.floor(Math.random() * imageCount) + 1;

    // Формуємо URL випадкової фотографії
    const imageUrl = imagesFolder + randomNumber + '.jpeg';

    // Встановлюємо URL фотографії
    image.src = imageUrl;
});

