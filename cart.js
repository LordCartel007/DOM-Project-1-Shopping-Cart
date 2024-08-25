// THE HEART BUTTON

// creating a new variable for the heart button
var heartIcons = document.querySelectorAll(".fa-heart");

// adding for each to loop through all the heart button
heartIcons.forEach(function (eachHeart) {
  let touch = false;

  // adding event listeners for the heart button
  eachHeart.addEventListener("click", function () {
    // onclick touch is not false
    touch = !touch;
    // when true its red , on false its black
    if (touch === true) {
      eachHeart.style.color = "red";
    } else {
      eachHeart.style.color = "black";
    }
    console.log(touch);
  });
});

//  WORKING ON THE + PLUS BUTTONS
var plusButton = document.querySelectorAll(".fas.fa-plus-circle");

let total = 0;

var totalElement = document.querySelector(".total");
// using for each to loop through each button
plusButton.forEach(function (button) {
  button.addEventListener("click", function () {
    var itemQuantity = button.nextElementSibling;
    let quantity = parseInt(itemQuantity.textContent);
    quantity = quantity + 1;

    itemQuantity.textContent = quantity;

    var itemPrice = button.closest(".card-body").querySelector(".unit-price");
    // the slice(0, -1) removes the last position which removes the dollar sign
    var digitItemPrice = parseInt(itemPrice.textContent.slice(0, -1));
    // taking the integer plus total
    total = total + digitItemPrice;
    // convert the sum to string
    var totalDollar = "$" + total.toString();
    // updating the total price with the text dollar value
    totalElement.textContent = totalDollar;
  });
});

// WORKING ON THE - MINUS BUTTONS

var minusButtons = document.querySelectorAll(".fas.fa-minus-circle");
// looping through each minus button with for each
minusButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var itemQuantity = button.previousElementSibling;
    let quantity = parseInt(itemQuantity.textContent);
    // onclick if quantity greater than zero - 1 else do return nothing
    if (quantity > 0) {
      quantity = quantity - 1;
      itemQuantity.textContent = quantity;
    } else {
      return;
    }

    var itemPrice = button.closest(".card-body").querySelector(".unit-price");

    var digitItemPrice = parseInt(itemPrice.textContent.slice(0, -1));

    total = total - digitItemPrice;

    var totalDollar = "$" + total.toString();
    // updating total price
    totalElement.textContent = totalDollar;
  });
});

// DELETE BUTTON
// selecting all the delete icons
var deleteButton = document.querySelectorAll(".fas.fa-trash-alt");
// each delete icon
deleteButton.forEach(function (trash) {
  trash.addEventListener("click", function () {
    var itemContainer = trash.closest(".card");
    var itemQuantity = itemContainer.querySelector(".quantity");
    var itemPrice = itemContainer.querySelector(".unit-price");

    // the item price and quantity turned to number
    var itemQuantity2 = parseInt(itemQuantity.textContent);
    var itemPrice2 = parseInt(itemPrice.textContent.slice(0, -1));
    // the total minus quantity times price
    total = total - itemQuantity2 * itemPrice2;
    // back to string
    var totalDollar = "$" + total.toString();
    // updating total
    totalElement.textContent = totalDollar;
    // removing the cart container
    itemContainer.remove();
  });
});
