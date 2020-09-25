// UFO Level 2

// from data.js
var tableData = data;
console.log(tableData) //check returned data

//***** Load all data into table and display *****

var tbody = d3.select("tbody");

createTable(tableData);

function createTable(tableData) {
   tbody.html("");
   tableData.forEach((ufoReport) => {
      var row = tbody.append("tr");
      Object.entries(ufoReport).forEach(([key, value]) => {
         var cell = row.append("td");
         cell.text(value);
      });
   });
} 

//***** Filter data by selected inputs and display results *****

// Select the button and form
var button = d3.select("#filter-btn"); 
var form = d3.selectAll(".filter");

// Create event handlers 
button.on("click", updateFilter); 
form.on("change", updateFilter);

var filters = {};

function updateFilter() {

   d3.event.preventDefault();

   var inputFilter = d3.select(this).select("input");
   var inputValue = inputFilter.property("value");
   var inputID = inputFilter.attr("id");
   
   if (inputValue) {
      filters[inputID] = inputValue;
   }
   else {
      delete filters[inputID];
   }
   //filterTable();  ????
};

function createTable(filterTable) {
   tbody.html("");
   filterTable.forEach((result) => {
      var row = tbody.append("tr");
      Object.entries(result).forEach(([key, value]) => {
         var cell = row.append("td");
         cell.text(value);
      });
   });
} 


// var data = [1, 2, 3, 4]
// d3.select("body")     // select the body
//   .selectAll("p")     // empty <p> selections to be used later
//   .data(data)         // parses data, and runs below operations n times
//   .enter()            // creates new data-bound element
//   .append("p")        // append <p> tag for each datum
//   .text("I'm no. 1")  // changes attribute's value




/* 
function filterTable() {
   tableData.filter.forEach(inputValue) = inputFilter



loop through objects forEach
tableData.filter

tableData.filter(function(d) { 
   return ( d.datetime == "inputValue" && 
            d.city == "inputValue" && 
            d.state == "inputValue" && 
            d.country == "inputValue" && 
            d.shape == "inputValue") 
})

   console.log(filteredData);

};  
*/
