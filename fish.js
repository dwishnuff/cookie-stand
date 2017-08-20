
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



//
// var location2 = {
//   name: 'Portland Airport',
//   min: 6,
//   max: 24,
//   avg: 1.2,
//   cookiesbyhour: [],
//
//   //calculate estimated volume by hour
//   calcEstVolume: function () {
//     for (var indexHours = 0; indexHours<hours.length; indexHours++){
//       location2.cookiesbyhour.push (Math.floor(randomNum(location2.min, location2.max) * location2.avg));
//     }
//   },
//
//     //calculate total sales
//     TotSales: 0,
//     calcTotSales: function() {
//       for (var index = 0; index<location2.cookiesbyhour.length; index++){
//         location2.TotSales += location2.cookiesbyhour[index]
//       }
//     },
//
//     //create total sales row for table
//     totSalesRow: function(){
//       var totRow="<tr><td>" + "TOTAL: " +"</td>";
//       totRow +="<td>" + location2.TotSales +"</td></tr>";
//       return totRow;
//     },
//     //create row data for table
//     locationInfoRow: function  (index) {
//       var rowData = "<tr><td>" + hours[index] + "</td>";
//       rowData += "<td>" + location2.cookiesbyhour[index] + "</td></tr>";
//       return rowData;
//     },
//
// //build table using rowData and totSalesRow
//     buildTable: function () {
//       for (var index=0; index<hours.length; index++){
//         document.getElementById('location2').innerHTML += location2.locationInfoRow(index);
//       }
//       document.getElementById('location2').innerHTML += location2.totSalesRow();
//     }
//   };
//
// //run each function
//   document.getElementById('locName2').innerHTML = location2.name
//   location2.calcEstVolume();
//   location2.calcTotSales();
//   location2.buildTable();
//
//
// var location3 = {
//   name: 'Washington Square',
//   min: 11,
//   max: 38,
//   avg: 1.9,
//   cookiesbyhour: [],
// //calculate estimated volume by hour
//   calcEstVolume: function () {
//     for (var indexHours = 0; indexHours<hours.length; indexHours++){
//       location3.cookiesbyhour.push (Math.floor(randomNum(location3.min, location3.max) * location3.avg));
//     }
//   },
//   //calculate total sales
//   TotSales: 0,
//   calcTotSales: function() {
//     for (var index = 0; index<location3.cookiesbyhour.length; index++){
//       location3.TotSales += location3.cookiesbyhour[index]
//     }
//   },
//
//   //create total sales row for table
//   totSalesRow: function(){
//     var totRow="<tr><td>" + "TOTAL: " +"</td>";
//     totRow +="<td>" + location3.TotSales +"</td></tr>";
//     return totRow;
//   },
//   //create row data for table
//   locationInfoRow: function  (index) {
//     var rowData = "<tr><td>" + hours[index] + "</td>";
//     rowData += "<td>" + location3.cookiesbyhour[index] + "</td></tr>";
//     return rowData;
//   },
//
// //build table using rowData and totSalesRow
//   buildTable: function () {
//     for (var index=0; index<hours.length; index++){
//       document.getElementById('location3').innerHTML += location3.locationInfoRow(index);
//     }
//     document.getElementById('location3').innerHTML += location3.totSalesRow();
//   }
// };
//
// //run each function
// document.getElementById('locName3').innerHTML = location3.name
// location3.calcEstVolume();
// location3.calcTotSales();
// location3.buildTable();
//
// var location4 = {
//   name: 'Sellwood',
//   min: 20,
//   max: 48,
//   avg: 3.3,
//   cookiesbyhour: [],
//   //calculate estimated volume by hour
//     calcEstVolume: function () {
//       for (var indexHours = 0; indexHours<hours.length; indexHours++){
//         location4.cookiesbyhour.push (Math.floor(randomNum(location4.min, location4.max) * location4.avg));
//       }
//     },
//     //calculate total sales
//     TotSales: 0,
//     calcTotSales: function() {
//       for (var index = 0; index<location4.cookiesbyhour.length; index++){
//         location4.TotSales += location4.cookiesbyhour[index]
//       }
//     },
//
//     //create total sales row for table
//     totSalesRow: function(){
//       var totRow="<tr><td>" + "TOTAL: " +"</td>";
//       totRow +="<td>" + location4.TotSales +"</td></tr>";
//       return totRow;
//     },
//     //create row data for table
//     locationInfoRow: function  (index) {
//       var rowData = "<tr><td>" + hours[index] + "</td>";
//       rowData += "<td>" + location4.cookiesbyhour[index] + "</td></tr>";
//       return rowData;
//     },
//
//   //build table using rowData and totSalesRow
//     buildTable: function () {
//       for (var index=0; index<hours.length; index++){
//         document.getElementById('location4').innerHTML += location4.locationInfoRow(index);
//       }
//       document.getElementById('location4').innerHTML += location4.totSalesRow();
//     }
//   };
//
//   //run each function
//   document.getElementById('locName4').innerHTML = location4.name
//   location4.calcEstVolume();
//   location4.calcTotSales();
//   location4.buildTable();
//
// var location5 = {
//   name: 'Pearl District',
//   min: 3,
//   max: 24,
//   avg: 2.6,
//   cookiesbyhour: [],
//   //calculate estimated volume by hour
//     calcEstVolume: function () {
//       for (var indexHours = 0; indexHours<hours.length; indexHours++){
//         location5.cookiesbyhour.push (Math.floor(randomNum(location5.min, location5.max) * location5.avg));
//       }
//     },
//     //calculate total sales
//     TotSales: 0,
//     calcTotSales: function() {
//       for (var index = 0; index<location5.cookiesbyhour.length; index++){
//         location5.TotSales += location5.cookiesbyhour[index]
//       }
//     },
//
//     //create total sales row for table
//     totSalesRow: function(){
//       var totRow="<tr><td>" + "TOTAL: " +"</td>";
//       totRow +="<td>" + location5.TotSales +"</td></tr>";
//       return totRow;
//     },
//     //create row data for table
//     locationInfoRow: function  (index) {
//       var rowData = "<tr><td>" + hours[index] + "</td>";
//       rowData += "<td>" + location5.cookiesbyhour[index] + "</td></tr>";
//       return rowData;
//     },
//
//   //build table using rowData and totSalesRow
//     buildTable: function () {
//       for (var index=0; index<hours.length; index++){
//         document.getElementById('location5').innerHTML += location5.locationInfoRow(index);
//       }
//       document.getElementById('location5').innerHTML += location5.totSalesRow();
//     }
//   };
//
//   //run each function
//   document.getElementById('locName5').innerHTML = location5.name
//   location5.calcEstVolume();
//   location5.calcTotSales();
//   location5.buildTable();
//array for locations

var locations = [location1,location2,location3, location4, location5];

function calcEstVolume (stand) {
  for (var indexHours = 0; indexHours<hours.length; indexHours++){
    stand.cookiesbyhour.push (Math.floor(randomNum(stand.min, stand.max) * stand.avg));
  }
}
//create total sales row for table
function totSalesRow (stand){
  var totRow="<tr><td>" + "TOTAL: " +"</td>";
  totRow +="<td>" + stand.TotSales +"</td></tr>";
  return totRow;
}
//create row data for table
function locationInfoRow (index) {
  var rowData = "<tr><td>" + hours[index] + "</td>";
  rowData += "<td>" + stand.cookiesbyhour[index] + "</td></tr>";
  return rowData;
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
  document.getElementById(stand.headingId).innerHTML = stand.name;
  calcEstVolume(stand);
  calcTotSales(stand);
  for (var timeIndex =0; timeIndex < hours.length; timeIndex++){
    document.getElementById(stand.tablebody).innerHTML+= locationInfoRow(timeIndex);
  }
  document.getElementById(stand.tablebody).innerHTML+=totSalesRow(stand);
}
