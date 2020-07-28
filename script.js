// Write your JavaScript code here!
window.addEventListener("load",function(){
 
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let copilotNameInput = document.querySelector("input[name=copilotName]");
   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let cargoMassInput = document.querySelector("input[name=cargoMass]");
   let faultyItems = document.getElementById("faultyItems");
   let launchStatusMessage = document.getElementById("launchStatus");
   let fuelStatusMessage = document.getElementById("fuelStatus");
   let cargoMassStatus = document.getElementById("cargoStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let missionTarget=document.getElementById("missionTarget");
   let form = document.getElementById("launchForm");

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
     response.json().then(function(json){
         missionTarget.innerHTML= `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance} </li>
               <li>Number of Moons: ${json[0].moons}</li>
            <img src="${json[0].image}">
            </ol>
  `

  form.addEventListener("submit",function(event){

   if (pilotNameInput.value === "" || copilotNameInput.value === "" || 
   fuelLevelInput.value === "" || cargoMassInput.value === ""){
      console.log(pilotNameInput.value);
      alert("All fields are required");
      event.preventDefault();}
   
   else if (! isNaN(pilotNameInput.value) || ! isNaN(copilotNameInput.value) ||isNaN(fuelLevelInput.value)||
   isNaN(cargoMassInput.value)){
      alert("Make sure to enter valid information for each field !");
      event.preventDefault();
   }
   else if (Number(fuelLevelInput.value)<10000){
      faultyItems.style.visibility = `visible`;
      launchStatusMessage.innerHTML = `Shuttle not ready for launch.`;
      launchStatusMessage.style.color ="red";
      pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`;
      copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch.`;
      fuelStatusMessage.innerHTML = `There is not enough fuel for the journey.`;
      event.preventDefault();
   }
else if (Number(cargoMassInput.value)>10000){
 
   faultyItems.style.visibility = `visible`;
   launchStatusMessage.innerHTML = `Shuttle not ready for launch.`;
   launchStatusMessage.style.color ="red";
   pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`;
   copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch.`;
   cargoMassStatus.innerHTML = `There is too much mass for the shuttle to take off.`;
   event.preventDefault();
}
else if (Number(fuelLevelInput.value)<10000 || Number(cargoMassInput.value)>10000){

   faultyItems.style.visibility = `visible`;
   launchStatusMessage.innerHTML = `Shuttle not ready for launch.`;
   launchStatusMessage.style.color ="red";
   pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`;
   copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch.`;
   fuelStatusMessage.innerHTML = `There is not enough fuel for the journey.`;
   cargoMassStatus.innerHTML = `There is too much mass for the shuttle to take off.`;
   event.preventDefault();

}

else  {
   faultyItems.style.visibility = `visible`;
   launchStatusMessage.innerHTML =`Shuttle is ready for launch.`;
   launchStatusMessage.style.color ="green";
   pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`;
   copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch.`;
   event.preventDefault();
   fuelStatusMessage.innerHTML =`Fuel level high enough for launch`
   cargoMassStatus.innerHTML = `Cargo mass low enough for launch.`
   event.preventDefault(); 
};
});


});
});
})

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
