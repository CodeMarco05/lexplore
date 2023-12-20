window.onload = function () {
    let queryParameterValue = getQueryParameter('query');
    if (queryParameterValue) {
        document.getElementById('queryParameter').textContent = 'Query Parameter: ' + queryParameterValue;
    }
    let url = `https://images-api.nasa.gov/search?keywords=${queryParameterValue}&media_type=image`;
    console.log(url)
}

function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}