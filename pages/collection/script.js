window.onload = function () {
    let queryParameterValue = getQueryParameter('query');
    if (queryParameterValue) {

        let url = `https://images-api.nasa.gov/search?keywords=${queryParameterValue}&media_type=image&page_size=500`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data)
                const pictureContainer = document.getElementById("pictureContainer")
                // Handle the JSON response
                let items = data.collection.items


                console.log('API response:', items);

                items.forEach(entry => {
                    let link = (entry.links[0].href)

                    const container = document.createElement("div")
                    container.className = "picture-container"

                    const imgElement = document.createElement("img")
                    imgElement.src = link
                    imgElement.width = 600


                    const textElement = document.createElement('div');
                    textElement.className = 'text-container';
                    textElement.textContent = entry.data[0].description;


                    container.appendChild(imgElement)
                    container.appendChild(textElement)
                    pictureContainer.appendChild(container)

                });

            })
            .catch(error => {
                console.error('Error during API call:', error);
            });
    }
}

function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}