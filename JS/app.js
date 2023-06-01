'use strict';

let foodItemsContainer = [];

function FoodItem(id, name, type, price) {
    this.foodID = id;
    this.foodName = name;
    this.foodType = type;
    this.foodPrice = price;
    foodItemsContainer.push(this);
}

function createFoodItemID() {
    return Math.ceil(Math.random() * (9999 - 1000) + 1000);
}

function handler(e) {
    e.preventDefault();

    let id = createFoodItemID();
    let name = e.target.foodName.value;
    let type = e.target.foodType.value;
    let price = e.target.price.value;

    // for testing
    console.log(`id => ${id}\nname => ${name}\ntype => ${type}\nprice => ${price}`);

    new FoodItem(id, name, type, price);
    let foodContainerJSON = JSON.stringify(foodItemsContainer);
    window.localStorage.setItem('Food List', foodContainerJSON);
}

let saveFormData = document.getElementById('foodForm');
saveFormData.addEventListener('submit', handler);