const imageContainer = document.getElementById('gallery');

fetch('./data/images.json')
    .then(response => response.json())
    .then(images => {
        images.forEach(image => {
            const card = document.createElement('div');
            card.className = 'card';

            const img = document.createElement('img');
            img.src = `./data/images/${image.url}`;
            img.alt = image.description;

            const description = document.createElement('p');
            description.textContent = image.description;

            const quantity = document.createElement('p');
            quantity.textContent = `Quantity: ${image.quantity}`;

            card.appendChild(img);
            card.appendChild(description);
            card.appendChild(quantity);
            imageContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading images:', error));