
var locations = []; // this array will hold your objects

function Regions ( state, revenue, locationCount){  // object constructor
  this.state = state;
  this.revenue = revenue;
  this.locationCount = locationCount;

  this.averageRevenue = function() {              // function to get avg revenue
    return (this.revenue / this.locationCount);
  }
};

var illinois = new Regions("IL", 5000 , 12);
var minnesota = new Regions("MN", 300, 3);          // notation
var nevada = new Regions("NV", 25000, 1);

locations.push(illinois, minnesota, nevada);// object constructor

// object instances

// push object instances to locations array

// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
