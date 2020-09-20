// from data.js
var tableData = data;
console.log(tableData) //check returned data

// get a reference to the table body
var tbody = d3.select("tbody");

// add data to html table
tableData.forEach((ufoReport) => {
   var row = tbody.append("tr");
   Object.entries(ufoReport).forEach(([key, value]) => {
     var cell = row.append("td");
     cell.text(value);
   });
 });

// Select the button and form
var button = d3.select("#filter-btn"); 
var form = d3.select("#filters");

// Create event handlers 
button.on("click", runEnter); //should runEnter be function() ???
form.on("submit",runEnter); //should runEnter be function() ???

// Complete the event handler function for the form
function runEnter() {

   // Prevent the page from refreshing
   d3.event.preventDefault();

   // Select the input element and get the raw HTML node
   var inputDate = d3.select("#datetime");

   // Get the value property of the input element
   var inputValue = inputDate.property("value");

   console.log(inputValue);

   var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

   console.log(filteredData);

};   