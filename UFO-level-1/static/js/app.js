// UFO Level 1

// from data.js
var tableData = data;
console.log(tableData) //check returned data

//***** Load all data into table and display *****

// get a reference to the table body
var tbody = d3.select("tbody");

// add data to html table
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

//***** Filter data by selected date and display results *****

// Select the button and form
var button = d3.select("#filter-btn"); 
var form = d3.select("#datetime");

// Create event handlers 
button.on("click", updateFilter); 
form.on("change",updateFilter);

// Complete the event handler function for the form
function updateFilter() {

   // Prevent the page from refreshing
   d3.event.preventDefault();

   // Select the input element and get the raw HTML node
   var inputDate = d3.select("#datetime");

   // Get the value property of the input element
   var inputValue = inputDate.property("value");

   console.log(inputValue);

   var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
   
   console.log(filteredData);

   createTable(filteredData); 
}; 
