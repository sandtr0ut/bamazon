var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "*********",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  takeOrder();
});

// Display table listing all available products
function takeOrder() {
  console.log("Displaying all available items: \n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}


inquirer.prompt([
  // Prompt customer for id of item they wish to purchase
  {
    type: "input",
    name: "itemID",
    message: "What would you would like to purchase? Please enter item id:"  
  },
  // Prompt for quantity to purchase
  {
    type: "input",
    name: "quantity",
    message: "How many would you like?  Please enter quantity:"
  }
]).then(function(answer) {
  var chosenItem;
  for (let i = 0; i < results.length; i++) {
    if (results[i].item_id === answer.choice) {
      chosenItem = results[i]
    }
    
  }
})




// Check stock of item to be purchased

// If quant is insufficient, notify customer

// If quant is sufficient, fill the order
  // Update the SQL database
  // Show customer the total cost of their purchase