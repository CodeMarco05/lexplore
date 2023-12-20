function commitInput() {
    // Get the input value
    const inputValue = document.getElementById('searchField').value;
    if (inputValue) {

        window.location.href = './pages/collection/collection.html?query=' + encodeURIComponent(inputValue)
    }else{
        window.alert("Please eter search criterias.")
    }
}