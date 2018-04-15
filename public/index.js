const app = function(){

    const api = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";
    const apiS = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.geojson";
    const apiM = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson";
    const apiL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson";
    const apiSig = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson";
    makeRequestAll(api, requestCompleteAll);
    makeRequestSig(apiSig, requestCompleteSig);
    makeRequestSmall(apiS, requestCompleteSml);
    makeRequestMed(apiM, requestCompleteMed);
    makeRequestLge(apiL, requestCompleteLge);
};

window.addEventListener('load', app);

//ALL EARTHQUAKES AND MAIN FUNCTIONALITY
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
    displayQuakeInfo(quakesArray);
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
  return div
}

//SMALL EARTHQUAKES
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


//MEDIUM EARTHQUAKES
const makeRequestMed = function(api, callback){
  const request = new XMLHttpRequest();
  //open request.
  request.open("GET", api);
  //what to do when we get a response.
  request.addEventListener("load", callback)
  //tell it to run.
  request.send();
};

const requestCompleteMed = function(){
  if(this.status !== 200) return;
    const jsonString = this.responseText;
    const quakes = JSON.parse(jsonString);
    const quakesArrayMed = quakes.features;
    displayQuakeDataMed(quakesArrayMed);
    displayQuakeInfo(quakesArrayMed);
};

const displayQuakeDataMed = function(quakesArrayMed){
  const select = document.getElementById('quakelistMed-select')
  quakesArrayMed.forEach(function(quake, index) {
    let option = document.createElement('option')
    option.innerText = quake.properties.place;
    option.value = index
    select.appendChild(option)
  })
}


//LARGE EARTHQUAKES
const makeRequestLge = function(api, callback){
  const request = new XMLHttpRequest();
  //open request.
  request.open("GET", api);
  //what to do when we get a response.
  request.addEventListener("load", callback)
  //tell it to run.
  request.send();
};

const requestCompleteLge = function(){
  if(this.status !== 200) return;
    const jsonString = this.responseText;
    const quakes = JSON.parse(jsonString);
    const quakesArrayLge = quakes.features;
    displayQuakeDataLge(quakesArrayLge);
    displayQuakeInfo(quakesArrayLge);
};

const displayQuakeDataLge = function(quakesArrayLge){
  const select = document.getElementById('quakelistLge-select')
  quakesArrayLge.forEach(function(quake, index) {
    let option = document.createElement('option')
    option.innerText = quake.properties.place;
    option.value = index
    select.appendChild(option)
  })
}

//SIGNIFICANT EARTHQUAKES
const makeRequestSig = function(api, callback){
  const request = new XMLHttpRequest();
  //open request.
  request.open("GET", api);
  //what to do when we get a response.
  request.addEventListener("load", callback)
  //tell it to run.
  request.send();
};

const requestCompleteSig = function(){
  if(this.status !== 200) return;
    const jsonString = this.responseText;
    const quakes = JSON.parse(jsonString);
    const quakesArraySig = quakes.features;
    displayQuakeDataSig(quakesArraySig);
    displayQuakeInfo(quakesArraySig);
};

const displayQuakeDataSig = function(quakesArraySig){
  const select = document.getElementById('quakelistSig-select')
  quakesArraySig.forEach(function(quake, index) {
    let option = document.createElement('option')
    option.innerText = quake.properties.place;
    option.value = index
    select.appendChild(option)
  })
}
