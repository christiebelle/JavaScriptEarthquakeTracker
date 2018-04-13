const app = function(){

    const api = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";
    makeRequest(api, requestComplete);
};

window.addEventListener('load', app);

const makeRequest = function(api, callback){
  const request = new XMLHttpRequest();
  //open request.
  request.open("GET", api);
  //what to do when we get a response.
  request.addEventListener("load", callback)
  //tell it to run.
  request.send();
};

const requestComplete = function(){
  if(this.status !== 200) return;
    const jsonString = this.responseText;
    const quakes = JSON.parse(jsonString);
    const quakesArray = quakes.features;
    displayQuakeData(quakesArray);
};

const displayQuakeData = function(quakesArray){
  const ul = document.querySelector("#quakelist");
  for(let quake of quakesArray){
    const li = document.createElement('li');
    li.innerText = quake.properties.place;
    ul.appendChild(li);
  };
};
