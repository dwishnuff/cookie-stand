
//generate random number
function randomNum (min,max){
  return Math.floor(Math.random() * (max - min) + min);
};

//array for hours
var  hours = ['10AM:', '11AM:', '12PM:', '1PM:', '2PM:', '3PM:', '4PM:', '5PM:'];

//location1
var location1 = {
  name: 'Pioneer Square',
  min: 17,
  max: 88,
  avg: 5.2,
  cookiesbyhour: [],
  calcEstVolume: function () {
    for (var indexHours = 0; indexHours<hours.length; indexHours++){
      location1.cookiesbyhour.push (Math.floor(randomNum(location1.min, location1.max) * location1.avg));
    }
  },

  //calculate total sales
  TotSales: 0,
  calcTotSales: function() {
    for (var index = 0; index<location1.cookiesbyhour.length; index++){
      location1.TotSales += location1.cookiesbyhour[index]
    }
  },
  //create total sales row for table
  totSalesRow: function(){
    var totRow="<tr><td>" + "TOTAL: " +"</td>";
    totRow +="<td>" + location1.TotSales +"</td></tr>";
    return totRow;
  },
  //create row data for table
  locationInfoRow: function  (index) {
    var rowData = "<tr><td>" + hours[index] + "</td>";
    rowData += "<td>" + location1.cookiesbyhour[index] + "</td></tr>";
    return rowData;
  },

  buildTable: function () {
    for (var index=0; index<hours.length; index++){
      document.getElementById('location1').innerHTML += location1.locationInfoRow(index);


    }
    document.getElementById('location1').innerHTML += location1.totSalesRow();
  }
};

document.getElementById('locName1').innerHTML = location1.name
location1.calcEstVolume();
location1.calcTotSales();
location1.buildTable();



// buildTable();
var location2 = {
  name: 'Portland Airport',
  min: 6,
  max: 24,
  avg: 1.2,
  cookiesbyhour: [],
  calcEstVolume: function () {
    for (var indexHours = 0; indexHours<hours.length; indexHours++){
      location2.cookiesbyhour.push (Math.floor(randomNum(location2.min, location2.max) * location2.avg));
    }
  },
  locationInfoRow: function  (index) {
    var rowData = "<tr><td>" + hours[index] + "</td>";
    rowData += "<td>" + location2.cookiesbyhour[index] + "</td></tr>";
    return rowData;
  },
  buildTable: function () {
    for (var index=0; index<hours.length; index++){

      document.getElementById('location2').innerHTML += location2.locationInfoRow(index);
    }
  }
};

document.getElementById('locName2').innerHTML = location2.name
location2.calcEstVolume();
location2.buildTable();

var location3 = {
  name: 'Washington Square',
  min: 11,
  max: 38,
  avg: 1.9,
  cookiesbyhour: [],
  calcEstVolume: function () {
    for (var indexHours = 0; indexHours<hours.length; indexHours++){
      location3.cookiesbyhour.push (Math.floor(randomNum(location3.min, location3.max) * location3.avg));
    }
  },
  locationInfoRow: function  (index) {
    var rowData = "<tr><td>" + hours[index] + "</td>";
    rowData += "<td>" + location3.cookiesbyhour[index] + "</td></tr>";
    return rowData;
  },
  buildTable: function () {
    for (var index=0; index<hours.length; index++){

      document.getElementById('location3').innerHTML += location3.locationInfoRow(index);
    }
  }
};

document.getElementById('locName3').innerHTML = location3.name
location3.calcEstVolume();
location3.buildTable();

var location4 = {
  name: 'Sellwood',
  min: 20,
  max: 48,
  avg: 3.3,
  cookiesbyhour: [],
  calcEstVolume: function () {
    for (var indexHours = 0; indexHours<hours.length; indexHours++){
      location4.cookiesbyhour.push (Math.floor(randomNum(location4.min, location4.max) * location4.avg));
    }
  },
  locationInfoRow: function  (index) {
    var rowData = "<tr><td>" + hours[index] + "</td>";
    rowData += "<td>" + location4.cookiesbyhour[index] + "</td></tr>";
    return rowData;
  },
  buildTable: function () {
    for (var index=0; index<hours.length; index++){

      document.getElementById('location4').innerHTML += location4.locationInfoRow(index);
    }
  }
};

document.getElementById('locName4').innerHTML = location4.name
location4.calcEstVolume();
location4.buildTable();

var location5 = {
  name: 'Pearl District',
  min: 3,
  max: 24,
  avg: 2.6,
  cookiesbyhour: [],
  calcEstVolume: function () {
    for (var indexHours = 0; indexHours<hours.length; indexHours++){
      location5.cookiesbyhour.push (Math.floor(randomNum(location5.min, location5.max) * location5.avg));
    }
  },
  locationInfoRow: function  (index) {
    var rowData = "<tr><td>" + hours[index] + "</td>";
    rowData += "<td>" + location5.cookiesbyhour[index] + "</td></tr>";
    return rowData;
  },
  buildTable: function () {
    for (var index=0; index<hours.length; index++){

      document.getElementById('location5').innerHTML += location5.locationInfoRow(index);
    }
  }
};

document.getElementById('locName5').innerHTML = location5.name
location5.calcEstVolume();
location5.buildTable();
