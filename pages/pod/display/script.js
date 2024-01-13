import config from './config.js';

window.onload = function () {
    let date = localStorage.getItem('selectedDate')
    const apiUrl = 'https://api.nasa.gov/planetary/apod';

    // Query parameters
    const params = {
        api_key: config.apiKeyNasa,
        date: date,
    };

    // Construct the URL with query parameters
    const urlWithParams = `${apiUrl}?${new URLSearchParams(params)}`;

    // Make the API call using fetch
    fetch(urlWithParams)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Handle the API response data
            let title = data.title
            let date = data.date
            let explanation = data.explanation
            let url = data.url

            document.getElementById('title').innerHTML = title
            document.getElementById('heading').textContent = date
            document.getElementById('image').src = url
            document.getElementById('explanation').innerHTML = explanation

        })
        .catch(error => {
            // Handle errors
            window.location.href = '../../noResults/noResult.html'
            console.error('Error fetching data:', error);
        });
}
