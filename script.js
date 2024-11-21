document.querySelectorAll('.animal').forEach(animal => {
    animal.addEventListener('click', () => {
        animal.querySelector('img').src = 'new-image.jpg'; // Change the image on click
    });
});

