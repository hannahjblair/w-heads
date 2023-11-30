//puts random dog image from API in api-container
async function fetchDog() {
    const result = await fetch("https://dog.ceo/api/breeds/image/random");
    const resultJson = await result.json();
    // console.log(resultJson.message);
    const dogContainer = document.getElementById("api-container");
    let html = `<img src='${resultJson.message}' alt='random dog'>`
    dogContainer.insertAdjacentHTML("afterbegin", html);
}

fetchDog();