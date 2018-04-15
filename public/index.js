const app = function(){

    const api = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";
    const apiS = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.geojson";
    makeRequestAll(api, requestCompleteAll);
    makeRequestSmall(apiS, requestCompleteSml);
};

window.addEventListener('load', app);

//ALL EARTHQUAKES
const makeRequestAll = function(api, callback){
  const request = new XMLHttpRequest();
  //open request.
  request.open("GET", api);
  //what to do when we get a response.
  request.addEventListener("load", callback)
  //tell it to run.
  request.send();
};

const requestCompleteAll = function(){
  if(this.status !== 200) return;
    const jsonString = this.responseText;
    const quakes = JSON.parse(jsonString);
    const quakesArray = quakes.features;
    displayQuakeData(quakesArray);
};

const displayQuakeData = function(quakesArray){
  const select = document.getElementById('quakelist-select')
  quakesArray.forEach(function(quake, index) {
    let option = document.createElement('option')
    option.innerText = quake.properties.place;
    option.value = index
    select.appendChild(option)
  })
};

const displayQuakeInfo = function (quakes) {
  const selectedEarthquake = document.querySelector('select')
  selectedEarthquake.addEventListener('change', function() {
    let quake = quakes[this.value]
    quakeInfo(quake)
  })
}

const quakeInfo = function (quake) {
  const div = document.getElementById('quake-details')
  clearContent(div)
  const quakeEpicentre = document.createElement('p')
  quakeEpicentre.innerText = `Epicentre: ${quake.properties.place}`
  const quakeMagnitude = document.createElement('p')
  quakeMagnitude.innerText = `Magnitude: ${quake.properties.mag}`
  const quakePage = document.createElement('p')
  quakePage.innerText = `Further Information: ${quake.properties.url}`
  div.appendChild(quakeEpicentre);
  div.appendChild(quakeMagnitude);
  div.appendChild(quakePage);
  // addPin(country)
  return div
}

//SMALLL EARTHQUAKES
const makeRequestSmall = function(api, callback){
  const request = new XMLHttpRequest();
  //open request.
  request.open("GET", api);
  //what to do when we get a response.
  request.addEventListener("load", callback)
  //tell it to run.
  request.send();
};

const requestCompleteSml = function(){
  if(this.status !== 200) return;
    const jsonString = this.responseText;
    const quakes = JSON.parse(jsonString);
    const quakesArraySml = quakes.features;
    displayQuakeDataSml(quakesArraySml);
    displayQuakeInfo(quakesArraySml);
};

const displayQuakeDataSml = function(quakesArraySml){
  const select = document.getElementById('quakelistSmall-select')
  quakesArraySml.forEach(function(quake, index) {
    let option = document.createElement('option')
    option.innerText = quake.properties.place;
    option.value = index
    select.appendChild(option)
  })
}

// const displayQuakeInfo = function (quakes) {
//   const selectedEarthquake = document.querySelector('select')
//   selectedEarthquake.addEventListener('change', function() {
//     let quake = quakesArraySml[this.value]
//     quakeInfo(quake)
//   })
// }
//
// const quakeInfo = function (quake) {
//   const div = document.getElementById('country-details')
//   clearContent(div)
//   const countryName = document.createElement('p')
//   countryName.innerText = `Country: ${country.name}`
//   const countryPop = document.createElement('p')
//   countryPop.innerText = `Population: ${country.population}`
//   const countryCapital = document.createElement('p')
//   countryCapital.innerText = `Captial City: ${country.capital}`
//   const countryFlag = document.createElement('img')
//   countryFlag.src = country.flag
//   div.appendChild(countryName)
//   div.appendChild(countryPop)
//   div.appendChild(countryCapital)
//   div.appendChild(countryFlag)
//   addPin(country)
//   borderingCountries(country)
//   return div
// }
