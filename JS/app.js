'use strict';

let anchorElement = document.getElement

function FoodItem(id, name, type, price) {
    this.foodID = id;
    this.foodName = name;
    this.foodType = type;
    this.foodPrice = price;
}

FoodItem.prototype.renederFoodItem = function () {
    let targetArea = document.getElementById('tableBody');
    let bodyContent = document.createElement('tr');
    let id = document.createElement('td');
    id.textContent = this.foodID;

    let name = document.createElement('td');
    name.textContent = this.foodName;

    let type = document.createElement('td');
    type.textContent = this.foodType;

    let price = document.createElement('td');
    price.textContent = `${this.foodPrice} JD`;

    bodyContent.appendChild(id);
    bodyContent.appendChild(name);
    bodyContent.appendChild(type);
    bodyContent.appendChild(price);
    targetArea.appendChild(bodyContent);
};

function createFoodItemID() {
    return Math.ceil(Math.random() * (9999 - 1000) + 1000);
}

function handler(e) {
    e.preventDefault();

    let id = createFoodItemID();
    let name = e.target.foodName.value;
    let type = e.target.foodType.value;
    let price = e.target.price.value;

    console.log(name, type);

    let foodItem = new FoodItem(id, name, type, price);
    foodItem.renederFoodItem();
}

let saveFormData = document.getElementById('foodForm');
saveFormData.addEventListener('submit', handler);