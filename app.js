console.log ("hello world");

// S1d2mntE6kFPaQQnXHICTFvg1yzEeSVC

// https://api.giphy.com/v1/gifs/search

fetch('https://api.giphy.com/v1/gifs/search?api_key=S1d2mntE6kFPaQQnXHICTFvg1yzEeSVC&q=ironman')
.then(res => res.json() )
.then(giphies => {
    console.log(giphies);
})