var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'bamazonDB'
});

connection.connect(function(err) {
  if (err) {
    console.error('connection error: ' + err.stack);
  }
  showTable();
});

// Display table listing all available products
function showTable() {
  connection.query('SELECT * FROM products', function(err, res) {
    if (err) throw err;
    console.table(res);

    takeOrder(res);
  });
}

// Prompt customer for id of item they wish to purchase
function takeOrder(items) {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'choice',
        message:
          'What would you would like to purchase? Please enter item id or Q to quit:',
        validate: function(val) {
          return !isNaN(val) || val.toLowerCase() === 'q';
        }
      }
    ])
    .then(function(val) {
      exitApp(val.choice);
      var choiceId = parseInt(val.choice);
      var product = checkInventory(choiceId, items);

      if (product) {
        orderQuant(product);
      } else {
        console.log('\nItem not found.');
        showTable();
      }
    });
}

function exitApp(choice) {
  if (choice.toLowerCase() === 'q') {
    console.log('Exiting...');
    process.exit(0);
  }
}

function checkInventory(choiceId, items) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].item_id === choiceId) {
      return items[i];
    }
  }
  return null;
}

function orderQuant(product) {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'quantity',
        message: 'How many would you like?  Please enter quantity:',
        validate: function(val) {
          return val > 0 || val.toLowerCase() === 'q';
        }
      }
    ])
    .then(function(val) {
      exitApp(val.quantity);
      var quantity = parseInt(val.quantity);

      if (quantity > product.stock_quantity) {
        console.log('\nNot enough in stock.  Please try a smaller quantity.');
        showTable();
      } else {
        purchaseItem(product, quantity);
      }
    });
}

function purchaseItem(product, quantity) {
  connection.query(
    'UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?',
    [quantity, product.item_id],
    function(err, res) {
      console.log(
        '\nConfirmation:  You purchased ' +
          quantity +
          ' ' +
          product.product_name
      );
      showTable();
    }
  );
}

// inquirer.prompt([
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
