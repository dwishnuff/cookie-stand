var location1 = {
  name: 'Pioneer Square',
  min: 17,
  max: 88,
  avg: 5.2,
  randomNum: function (){
    return Math.floor(Math.random() * (location1.max - location1.min) + location1.min);
  },
  hours: ['10AM:', '11AM:', '12PM:', '1PM:', '2PM:', '3PM:', '4PM:', '5PM:'],
cookiesbyhour: [],
  calcEstVolume: function () {
    for (var indexHours = 0; indexHours<location1.hours.length; indexHours++){
      location1.cookiesbyhour.push (location1.randomNum() * location1.avg)
  }},
  // function locationInfoRow () {
  //   var rowData = "<tr><td>" + location1.hours + "</td>";
  //   rowData += "<td>" + location1.cookiesbyhour + "</td>";
  //     return rowData;
  // }
  // function buildTable() {
  //   for (var index=0; index<location1.hours.length; index++){
  //
  //     document.getElementById('location1').innerHTML += locationInfoRow;
  //   }
};




// buildTable();
var location2 = {
  name: 'Portland Airport',
  min: 6,
  max: 24,
  avg: 1.2,
  randomNum: function (){
    return Math.floor(Math.random() * (location2.max - location2.min) + location2.min);
  },
  hours: ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'],
cookiesbyhour: [],
  calcEstVolume: function () {
    for (var indexHours = 0; indexHours<location2.hours.length; indexHours++){
      location2.cookiesbyhour.push (location2.randomNum() * location2.avg)
  }},
};

var location3 = {
  name: 'Washington Square',
  min: 11,
  max: 38,
  avg: 1.9,
  randomNum: function (){
    return Math.floor(Math.random() * (location3.max - location3.min) + location3.min);
  },
  hours: ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'],
cookiesbyhour: [],
  calcEstVolume: function () {
    for (var indexHours = 0; indexHours<location3.hours.length; indexHours++){
      location3.cookiesbyhour.push (location3.randomNum() * location3.avg)
  }},
};

var location4 = {
  name: 'Sellwood',
  min: 20,
  max: 48,
  avg: 3.3,
  randomNum: function (){
    return Math.floor(Math.random() * (location4.max - location4.min) + location4.min);
  },
  hours: ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'],
cookiesbyhour: [],
  calcEstVolume: function () {
    for (var indexHours = 0; indexHours<location4.hours.length; indexHours++){
      location4.cookiesbyhour.push (location4.randomNum() * location4.avg)
  }},
};

var location5 = {
  name: 'Pearl District',
  min: 3,
  max: 24,
  avg: 2.6,
  randomNum: function (){
    return Math.floor(Math.random() * (location5.max - location5.min) + location5.min);
  },
  hours: ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'],
cookiesbyhour: [],
  calcEstVolume: function () {
    for (var indexHours = 0; indexHours<location5.hours.length; indexHours++){
      location5.cookiesbyhour.push (location5.randomNum() * location5.avg)
  }},
};
