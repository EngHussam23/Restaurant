"use strict";

let foodItemsContainerRetreived = [];

function getFoodItems() {
    let foodContainerJS = window.localStorage.getItem('Food List');
    console.log(`foodContainerJS before parse => ${foodContainerJS}`);

    foodItemsContainerRetreived = window.JSON.parse(foodContainerJS);
    console.log(`foodItemsContainerRetreived after parse => ${foodItemsContainerRetreived}`);

    if (foodItemsContainerRetreived == null) {
        console.log("The LS is Empty");
    } else {
        renederFoodItem();
    }

};

function renederFoodItem() {
    let targetArea = document.getElementById('tableBody');

    for (let i = 0; i < foodItemsContainerRetreived.length; i++) {

        let bodyContent = document.createElement('tr');
        let id = document.createElement('td');
        let name = document.createElement('td');
        let type = document.createElement('td');
        let price = document.createElement('td');

        id.textContent = foodItemsContainerRetreived[i].foodID;
        name.textContent = foodItemsContainerRetreived[i].foodName;
        type.textContent = foodItemsContainerRetreived[i].foodType;
        price.textContent = foodItemsContainerRetreived[i].foodPrice;

        bodyContent.appendChild(id);
        bodyContent.appendChild(name);
        bodyContent.appendChild(type);
        bodyContent.appendChild(price);
        targetArea.appendChild(bodyContent);
    }
};

getFoodItems();