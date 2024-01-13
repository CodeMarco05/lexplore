function goToPOD(){
    window.location.href = './pages/pod/index.html'
}



function commitInput() {
    // Get the input value
    const inputValue = document.getElementById('searchField').value;
    if (inputValue) {

        window.location.href = './pages/collection/collection.html?query=' + encodeURIComponent(inputValue)
    } else {
        window.alert("Please eter search criterias.")
    }
}

window.onload = function () {
    getTimeForStarts()
}

const rows = 5
const columns = 2
const rocketStarts = Array.from({ length: rows }, () => Array(columns).fill(undefined));


function getTimeForStarts() {
    const url = 'https://fdo.rocketlaunch.live/json/launches/next/5'
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            let entries = data.result
            console.log(entries)

            let i = 0
            entries.forEach(entry => {
                rocketStarts[i][0] = entry.launch_description
                i++
            });


            const first = document.getElementById('firstStart')
            const second = document.getElementById('secondStart')
            const third = document.getElementById('thirdStart')
            const fourth = document.getElementById('fourthStart')
            const fifth = document.getElementById('fifthStart')

            if (first && second && third && fourth && fifth) {
                first.innerText = rocketStarts[0][0]
                second.innerText = rocketStarts[1][0]
                third.innerText = rocketStarts[2][0]
                fourth.innerText = rocketStarts[3][0]
                fifth.innerText = rocketStarts[4][0]
            }


        })
        .catch(error => {
            console.error('Error during API call:', error);
        });
}
