const app = function(){

    const api = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";
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
    console.log(quakes);
    displayQuakeData(quakes);
};

const displayQuakeData = function(quakes){
  const ul = document.querySelector("#quakelist");
  for(quake of quakes){
    const li = document.createElement('li');
    li.innerText = quake.features.properties[place];
    ul.appendChild(li);
  };
};
