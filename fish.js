
//generate random number
function randomNum (min,max){
  return Math.floor(Math.random() * (max - min) + min);
};

//array for hours
var  hours = ['10AM:', '11AM:', '12PM:', '1PM:', '2PM:', '3PM:', '4PM:', '5PM:'];


//location1
var location1 = {
  headingId: "locName1",
  tablebody: "location1",
  name: 'Pioneer Square',
  min: 17,
  max: 88,
  avg: 5.2,
  cookiesbyhour: [],
}


var location2 = {
  headingId: "locName2",
  tablebody: "location2",
  name: 'Portland Airport',
  min: 6,
  max: 24,
  avg: 1.2,
  cookiesbyhour: [],
}


var location3 = {
  headingId: "locName3",
  tablebody: "location3",
  name: 'Washington Square',
  min: 11,
  max: 38,
  avg: 1.9,
  cookiesbyhour: [],
}

var location4 = {
  headingId: "locName4",
  tablebody: "location4",
    name: 'Sellwood',
  min: 20,
  max: 48,
  avg: 3.3,
  cookiesbyhour: [],
}


var location5 = {
  headingId: "locName5",
  tablebody: "location5",
  name: 'Pearl District',
  min: 3,
  max: 24,
  avg: 2.6,
  cookiesbyhour: [],
}

var locations = [location1,location2,location3, location4, location5];

function calcEstVolume (stand) {
  for (var indexHours = 0; indexHours<hours.length; indexHours++){
    stand.cookiesbyhour.push (Math.floor(randomNum(stand.min, stand.max) * stand.avg));
  }
}
//create total sales row for table
function totSalesRow (stand){
var rowElement =document.createElement("tr");
var labelElement=document.createElement("td");
var strongElement=document.createElement("strong");
strongElement.innerText = "TOTAL";
labelElement.appendChild(strongElement);
rowElement.appendChild(labelElement);
var totalElement=document.createElement("td");
strongElement = document.createElement("strong");
strongElement.innerText=stand.TotSales;
totalElement.appendChild(strongElement);
rowElement.appendChild(totalElement);
return rowElement;

  // var totRow="<tr><td><strong>" + "TOTAL: " +"</strong></td>";
  // totRow +="<td><strong>" + stand.TotSales +"</strong></td></tr>";
  // return totRow;
}
//create row data for table
function locationInfoRow (index) {
  var rowElement = document.createElement("tr");
  var hoursElement= document.createElement("td");
  hoursElement.innerText = hours[index];
  rowElement.appendChild(hoursElement);
  var cookieElement= document.createElement("td");
  cookieElement.innerText = stand.cookiesbyhour[index];
  rowElement.appendChild(cookieElement);
  return rowElement;
  // var rowData = "<tr><td>" + hours[index] + "</td>";
  // rowData += "<td>" + stand.cookiesbyhour[index] + "</td></tr>";
  // return rowData;
}


function calcTotSales (stand) {
  var TotSales= 0;
  for (var index = 0; index<stand.cookiesbyhour.length; index++){
    TotSales += stand.cookiesbyhour[index]
  }
  stand.TotSales=TotSales;
}

//for loop for running calculations and creating table
for (var locationIndex =0; locationIndex<locations.length; locationIndex++) {
  var stand = locations[locationIndex];
  document.getElementById(stand.headingId).innerText = stand.name;
  calcEstVolume(stand);
  calcTotSales(stand);
  for (var timeIndex =0; timeIndex < hours.length; timeIndex++){
    document.getElementById(stand.tablebody).appendChild(locationInfoRow(timeIndex));
  }
  document.getElementById(stand.tablebody).appendChild(totSalesRow(stand));
}
