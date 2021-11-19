const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=a21468c147a898bf5b43fd9b2448580d';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   
    console.log(jsObject);
    const noon = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(noon);

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let day = 0;
    noon.forEach(forecast => {
        let thedate = new Date(forecast.dt_txt);
        document.querySelector(`#day${day + 1}`).textContent = weekdays[thedate.getDay()];
        document.querySelector(`#for${day + 1}`).textContent = forecast.main.temp;
        
        day++;
    })

    


});

