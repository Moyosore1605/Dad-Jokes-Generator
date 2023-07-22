const btnEl = document.querySelector('button');
const apiKey = 'ejMyhSGTGuM8cVdFMrTNZA==CkGF4u4ILDJOvc64';
const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'
const displayJoke = document.querySelector('p');

const options = {
    method:'GET',
    headers:{'X-Api-Key': apiKey,}
}

const getJokes = async () => { 
    const response = await fetch(apiURL, options);
    const data = await response.json();
    displayJoke.innerText = data[0].joke;
}


btnEl.addEventListener('click', getJokes);