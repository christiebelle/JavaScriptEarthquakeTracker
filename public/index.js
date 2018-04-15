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
    displayQuakeDataTiny(quakesArray);
    displayQuakeInfoTiny(quakesArrayTiny);
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

const displayQuakeInfo = function (quakesArray) {
  const selectedEarthquake = document.querySelector('select')
  selectedEarthquake.addEventListener('change', function() {
    let quake = quakesArray[this.value]
    quakeInfoAll(quake)
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
  addMarker(quake);
  return div
}

const addMarker = function(quake){
  const container = document.getElementById('quake-map')
  const center = quake.geometry.coordinates;
  const map = new MapMaker(container, center, 5)
  map.addMarker(center)
}

const clearContent = function(node){
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
}

//TINY EARTHQUAKES
const displayQuakeDataTiny = function(quakesArray){
  const quakesArrayTiny = [];
  quakesArray.forEach(function(quake, index){
  if(quake.properties.mag < 1.0){
    quakesArrayTiny.push(quake);
  };
  return quakesArrayTiny;
  });
  const select = document.getElementById('quakelistTiny-select')
  quakesArrayTiny.forEach(function(quake, index) {
    let option = document.createElement('option')
    option.innerText = quake.properties.place;
    option.value = index
    select.appendChild(option)
  })
};

const displayQuakeInfoTiny = function (quakesArrayTiny) {
  const selectedEarthquake = document.querySelector('select')
  selectedEarthquake.addEventListener('change', function() {
    let quake = quakesArrayTiny[this.value]
    quakeInfoTiny(quake)
  })
}
const quakeInfoTiny = function (quake) {
  const div = document.getElementById('quakeTiny-details')
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
  addMarker(quake);
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
    displayQuakeInfoSml(quakesArraySml);
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

const displayQuakeInfoSml = function (quakesArraySml) {
  const selectedEarthquake = document.querySelector('select')
  selectedEarthquake.addEventListener('change', function() {
    let quake = quakesArraySml[this.value]
    quakeInfoSml(quake)
  })
}

const quakeInfoSml = function (quake) {
  const div = document.getElementById('quakeSmall-details')
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
  addMarker(quake);
  return div
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
    displayQuakeInfoMed(quakesArrayMed);
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

const displayQuakeInfoMed = function (quakesArrayMed) {
  const selectedEarthquake = document.querySelector('select')
  selectedEarthquake.addEventListener('change', function() {
    let quake = quakesArrayMed[this.value]
    quakeInfoMed(quake)
  })
}

const quakeInfoMed = function (quake) {
  const div = document.getElementById('quakeMed-details')
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
  addMarker(quake);
  return div
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
    displayQuakeInfoLge(quakesArrayLge);
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

const displayQuakeInfoLge = function (quakesArrayLge) {
  const selectedEarthquake = document.querySelector('select')
  selectedEarthquake.addEventListener('change', function() {
    let quake = quakesArrayLge[this.value]
    quakeInfoLge(quake)
  })
}

const quakeInfoLge = function (quake) {
  const div = document.getElementById('quakeLge-details')
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
  addMarker(quake);
  return div
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

const displayQuakeInfoSig = function (quakesArraySig) {
  const selectedEarthquake = document.querySelector('select')
  selectedEarthquake.addEventListener('change', function() {
    let quake = quakesArraySig[this.value]
    quakeInfo(quake)
  })
}

const quakeInfoSig = function (quake) {
  const div = document.getElementById('quakeSig-details')
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
  addMarker(quake);
  return div
}
