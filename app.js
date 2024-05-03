console.log("hello world");

var giphiesContainer = document.querySelector('.container');

// S1d2mntE6kFPaQQnXHICTFvg1yzEeSVC

// https://api.giphy.com/v1/gifs/search

fetch('https://api.giphy.com/v1/gifs/search?api_key=S1d2mntE6kFPaQQnXHICTFvg1yzEeSVC&q=avengers')
    .then(res => res.json())
    .then(giphies => {
        // console.log(giphies);
        giphies.data.forEach(gif => {
            // console.log(gif.images.original.url);
            var imgTag = document.createElement('img');
            imgTag.setAttribute('src', gif.images.original.url);
            giphiesContainer.appendChild(imgTag);
        })
    })