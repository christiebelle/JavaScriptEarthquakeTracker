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

const displayQuakeData = function(quakesArray){
  const button = document.querySelector("#quakelist");
  for(let quake of quakesArray){
    const li = document.createElement('li');
    const li1 = document.createElement('li1');
    li.innerText = quake.properties.place;
    li1.innerText = `of ${quake.properties.mag} magnitude` ;
    ul.appendChild(li);
    ul.appendChild(li1);
  };
};
