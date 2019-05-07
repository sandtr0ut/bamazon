var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "B8master!",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  takeOrder();
});

// Display table listing all available products
function takeOrder() {
  console.log("\n Displaying all available items: \n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
}


// inquirer.prompt([
//   // Prompt customer for id of item they wish to purchase
//   {
//     type: "input",
//     name: "itemID",
//     message: "What would you would like to purchase? Please enter item id:"  
//   },
//   // Prompt for quantity to purchase
//   {
//     type: "input",
//     name: "quantity",
//     message: "How many would you like?  Please enter quantity:"
//   }
// ]).then(function(answer) {
//   var chosenItem;
//   for (let i = 0; i < results.length; i++) {
//     if (results[i].item_id === answer.choice) {
//       chosenItem = results[i]
//     }
    
//   }
// })


// //Prints products table
// function fetchProducts(res){
//   var options = {
//      sql : 'SELECT * FROM product'
//   }
//   executeQuery(options, function(result){
//   res.write("<table>");
//   res.write("<tr>");
//   for(var column in result[0]){
//       res.write("<td><label>" + column + "</label></td>");
//   }
//   res.write("</tr>");
//   for(var row in result){
//       res.write("<tr>");
//       for(var column in result[row]){
//           res.write("<td><label>" + result[row][column] + "</label></td>");       
//       }
//       res.write("</tr>");         
//   }
//   res.write("</table>");
// });
// }







// Check stock of item to be purchased

// If quant is insufficient, notify customer

// If quant is sufficient, fill the order
  // Update the SQL database
  // Show customer the total cost of their purchase