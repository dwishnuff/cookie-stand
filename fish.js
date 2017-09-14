//create Constructor function
var storeFront = function(location, name, min, max, avg) {
  this.location = location;
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesbyhour = [];

}
//create array for constructor function

var location1=  new storeFront("location1","Pioneer Square","17","88","5.2");
var location2= new storeFront("location2","Portland Airport","6","24","1.2");
var location3= new storeFront("location3","Washington Square","11","38","1.9");
var location4= new storeFront("location4","Sellwood","20","48","3.3");
var location5= new storeFront("location5","Pearl District","3","24","2.6");


//generate random number
function randomNum (min,max){
  var randomNumber = Math.floor((Math.random() * (parseInt(max) - parseInt(min))) + parseInt(min));
  // return Math.floor((Math.random() * (max - min)) + min);
  return randomNumber;
};

//array for hours
var  hours = ['10AM:', '11AM:', '12PM:', '1PM:', '2PM:', '3PM:', '4PM:', '5PM:'];

var locations = [location1,location2,location3, location4, location5];
// var locations = storeFront(this.location);

//add storefront from Form
function addStoreFront () {
  var form = document.forms['newStoreFront'];
  var newName= form.elements['name'];
  var minCust= form.elements['min'];
  var maxCust= form.elements['max'];
  var avgCookies=form.elements['avg'];
  var userAdded = new storeFront("userAdded",newName.value,minCust.value,maxCust.value,avgCookies.value);
  locations.unshift(userAdded);

  createTable();

}

function calcEstVolume (StoreInfo) {
  for (var indexHours = 0; indexHours<hours.length; indexHours++){
    StoreInfo.cookiesbyhour.push (Math.floor(randomNum(StoreInfo.min, StoreInfo.max) * parseFloat(StoreInfo.avg)));
  }
}
//create total sales row for table
function totSalesRow (storeInfo){
  var rowElement =document.createElement("tr");
  var labelElement=document.createElement("td");
  var strongElement=document.createElement("strong");
  strongElement.innerText = "TOTAL";
  labelElement.appendChild(strongElement);
  rowElement.appendChild(labelElement);
  var totalElement=document.createElement("td");
  strongElement = document.createElement("strong");
  strongElement.innerText=storeInfo.TotSales;
  totalElement.appendChild(strongElement);
  rowElement.appendChild(totalElement);
  return rowElement;


}
//create row data for table
function locationInfoRow (index, storeInfo) {
  var rowElement = document.createElement("tr");
  var hoursElement= document.createElement("td");
  hoursElement.innerText = hours[index];
  rowElement.appendChild(hoursElement);
  var cookieElement= document.createElement("td");
  cookieElement.innerText = storeInfo.cookiesbyhour[index];
  rowElement.appendChild(cookieElement);
  return rowElement;

}


function calcTotSales (storeInfo) {
  var TotSales= 0;
  for (var index = 0; index<storeInfo.cookiesbyhour.length; index++){
    TotSales += storeInfo.cookiesbyhour[index]
  }
  storeInfo.TotSales=TotSales;
}

//for loop for running calculations and creating table

function createTable(){
  document.getElementById("writeTables").innerHTML="";
for (var locationIndex =0; locationIndex<locations.length; locationIndex++) {
  var storeInfo = locations[locationIndex];
  var h2Element = document.createElement("h2");
  h2Element.innerText= storeInfo.name;
  document.getElementById("writeTables").appendChild(h2Element);
  var createTable =document.createElement("table");
  document.getElementById("writeTables").appendChild(createTable);
  var tableBody = document.createElement("tbody");
  createTable.appendChild(tableBody);
  var row = document.createElement("tr");
  tableBody.appendChild(row);
  var timeTitle = document.createElement("th");
  timeTitle.innerText = "TIME";
  row.appendChild(timeTitle);
  var avgTitle = document.createElement("th");
  avgTitle.innerText = "AVG COOKIES SOLD";
  row.appendChild(avgTitle);

  calcEstVolume(storeInfo);
  calcTotSales(storeInfo);
  console.log(calcTotSales(storeInfo));
  for (var timeIndex =0; timeIndex < hours.length; timeIndex++){

    tableBody.appendChild(locationInfoRow(timeIndex, storeInfo));
  }
  tableBody.appendChild(totSalesRow(storeInfo));
}
}
createTable();
