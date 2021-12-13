requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
.then(function(response) {
    return response.json();
})
.then(function(jsonObject){
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        let town = document.createElement('section');
        let h2 = document.createElement('h2');
        let motto = document.createElement('q');
        let year = document.createElement('p');
        let pop = document.createElement('p');
        let rain = document.createElement('p');
        let image = document.createElement('img');
         
        h2.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        year.textContent = 'Year Founded: ' + towns[i].yearFounded;
        pop.textContent = 'Population: ' + towns[i].currentPopulation;
        rain.textContent = 'Annual Rain Fall: '+ towns[i].averageRainfall;
        image.setAttribute('src', towns[i].photo);

        town.appendChild(h2);
        town.appendChild(motto);
        town.appendChild(year);
        town.appendChild(pop);
        town.appendChild(rain);
        town.appendChild(image);


        document.querySelector('div.towns').appendChild(town);

    }

});