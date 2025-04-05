// worksheets of arrays in js

// Practice exercise 3.1
// 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and
// "Apples."
// 2. Check your list length in the console.
// 3. Update "Bread" to "Bananas."
// 4. Output your entire list to the console

let shopList = ["Milk", "Bread", "apples"];
console.log(shopList.length);
shopList[1] = "Bananas";
console.log(shopList);

// Practice exercise 3.2
// 1. Create an empty array to use as a shopping list.
// 2. Add Milk, Bread, and Apples to your list.
// 3. Update "Bread" with Bananas and Eggs.
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically.
// 6. Find and output the index value of Milk.
// 7. After Bananas, add Carrots and Lettuce.
// 8. Create a new list containing Juice and Pop.
// 9. Combine both lists, adding the new list twice to the end of the first list.
// 10. Get the last index value of Pop and output it to the console.

let cart = [];
let addon = ["Milk", "Bread", "Apples"];
cart.push(...addon);
console.log(cart);
cart.splice(1, 1, "bananas", "eggs");
console.log(cart);
cart.pop();
console.log(cart);
cart.sort();
console.log(cart);

console.log(cart.indexOf("Milk"));
cart.splice(2, 0, "carrots", "Lettuce");
let newlist = ["Juice", "Pop"];
cart = cart.concat(newlist, newlist); // Corrected concat usage
console.log(cart);
console.log(cart.lastIndexOf("Pop"));

// Practice exercise 3.3
// 1. Create an array containing three values: 1, 2, and 3.
// 2. Nest the original array into a new array three times.
// 3. Output the value 2 from one of the arrays into the console

let nested = [1, 2, 3];
let nested2 = [nested, nested, nested];
console.log(nested2);
console.log(nested2[1][1]);

// Practice exercise 3.4
// 1. Create a new myCar object for a car. Add some properties, including, but not
// limited to, make and model, and values for a typical car or your car. Feel free
// to use booleans, strings, or numbers
// 2. Create a variable that can hold the string value color. This variable
// containing a string value color can now be used to reference the property
// name within myCar. Then, use the variable within the square bracket notation
// to assign a new value to the color property in myCar.
//  3. Use that same variable and assign a new property string value to it, such as
// forSale. Use the bracket notation once again to assign a new value to the
// forSale property to indicate whether the car is available for purchase.
//  4. Output make and model into the console.
//  5. Output the value of forSale into the console.

let myCar = {
  company: "toyato",
  version: 2098,
  color: "grey",
  forsale: true,
  cylinder4: false,
  cylinder6: true,
};

myCar["color"] = "black";
myCar["forsale"] = false;

console.log(myCar.company);
console.log(myCar.version);

// Practice exercise 3.5
// 1. Create an object named people that contains an empty array that is called
// friends.
// 2. Create three variables, each containing an object, that contain one of your
// friend's first names, last names, and an ID value.
// 3. Add the three friends to the friend array.
// 4. Output it to the console

let people = {
  friends: [],
};
let friend1 = {
  firstName: "Alice",
  lastName: "Wonderland",
  id: 1,
};

let friend2 = {
  firstName: "Bob",
  lastName: "Marley",
  id: 2,
};

let friend3 = {
  firstName: "Charlie",
  lastName: "Brown",
  id: 3,
};

// 3. Add the three friends to the friend array.
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);

// 4. Output it to the console.
console.log(people);

//   Chapter projects
const theList = [
  "Laurence",
  "Svekis",
  true,
  35,
  null,
  undefined,
  { test: "one", score: 55 },
  ["one", "two"],
];

// Manipulate your array using various methods, such as pop(), push(), shift(), and
// unshift(), and transform it into the following:
//  ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
//  You can take the following steps, or adopt your own approach:
//  • Remove the first item and the last item.
//  • Add FIRST to the start of the array.
//  • Assign hello World to the fourth item value.
//  • Assign MIDDLE to the third index value.
//  • Add LAST to the last position in the array.
//  • Output it to the console.

// Remove the first and last items
// theList.shift();
theList.splice(2, 6, "MIDDLE", "hello World", "LAST");
theList.shift();
// let lastitem=["MIDDLE", "hello World", "LAST"]
// theList.push(...lastitem)
theList.unshift("FIRST");
console.log(theList);

// Add "FIRST" to the beginning
// theList.unshift("FIRST");

// // Assign "hello World" to index 3
// theList[3] = "hello World";

// // Assign "MIDDLE" to index 2
// theList[2] = "MIDDLE";

// // Add "LAST" to the end
// theList.push("LAST");

// console.log(theList); // Output: ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

//project2
// //creat an empty cart  and add items of objects
// Company product catalog
//  In this project, you will implement a data structure for a product catalog and create
// queries to retrieve data.

//  1. Create an array to hold an inventory of store items.
//  2. Create three items, each having the properties of name, model, cost, and
// quantity.
//  3. Add all three objects to the main array using an array method, and then log
// the inventory array to the console.
//  4. Access the quantity element of your third item, and log it to the console.
// Experiment by adding and accessing more elements within your data
// structure.

let companyCatlog = [];

let product1 = {
  name: "Apple Watch",
  model: "Series 7",
  cost: 399.99,
  quantity: 10,
};
let product2 = {
  name: "Apple iphone",
  model: "Series 13",
  cost: 499.99,
  quantity: 120,
};
let product3 = {
  name: "Apple Mini",
  model: "Series 4",
  cost: 899.99,
  quantity: 60,
};

companyCatlog.push(product1, product2, product3);
console.log(companyCatlog);

let product4 = {
  name: "Apple Mac",
  model: "Series 9",
  cost: 1899.99,
  quantity: 6,
};

companyCatlog.push(product4)
console.log(companyCatlog);
console.log(companyCatlog[1].model);

companyCatlog[1].model="Series 15"
console.log(companyCatlog[1].model);



// completed on 26 feb
