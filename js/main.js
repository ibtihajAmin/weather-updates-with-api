const API_KEY = `c6008f1db4f7f8d7c9c2ae6e08b18eb5`;

const searchResult = () => {
    const inputValue = document.getElementById('input-value').value;
    console.log(inputValue);
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=metric`;
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}

const createDynamicElement = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayData = (dataShow) => {
    createDynamicElement('city', dataShow.name);
    createDynamicElement('temperature', dataShow.main.temp);
    createDynamicElement('condition', dataShow.weather[0].main);
    createDynamicElement('humidity-show', dataShow.main.humidity);


    const url = `http://openweathermap.org/img/wn/${dataShow.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}