const img = document.querySelector('img');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=GtYoTs26EUXYcvWqoF6SVl09c1hd0a7D&s=rick_roll', {mode: 'cors'})
    .then(response => response.json())
    .then(response => {
        img.src = response.data.images.original.url;
    })
