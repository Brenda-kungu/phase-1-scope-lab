// Write your solution in this file!
var customerName = "bob";
function uppercaseCustomerName() {
    if (typeof customerName === "string") {
      customerName = customerName.toUpperCase();
    } else {
      console.error("customerName is not a string!");
    }
  }
  function declareBestCustomer() {
    // Declare a variable in the global scope
    bestCustomer = 'not bob';
  }

  var bestCustomer = 'not bob';

// Function to overwrite the global variable
function overwriteBestCustomer(newBestCustomer) {
  // Modifying the global variable
  bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = 'Joe';

// Function attempting to change the constant
function changeLeastFavoriteCustomer(newLeastFavoriteCustomer) {
  // This will result in an error
  leastFavoriteCustomer = newLeastFavoriteCustomer;
}

