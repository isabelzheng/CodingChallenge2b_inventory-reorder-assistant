let itemName = "Pens"; 

let unitCost = 0.50; 
let currentStock = 200; 
let reorderLevel = 100; 
let targetStock = 500; 
let weeklyDemand = 100; 
let supplierLeadTimeWeeks = 3; 

let weeksOfCover = weeklyDemand > 0? currentStock / weeklyDemand: Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock); 
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks)? Math.ceil(stockDeficit):0;
let estimatedReorderCost = reorderQuantity * unitCost; 
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks; 

console.log("Item Name: " + itemName); 
console.log("Weeks of Cover: " + (weeksOfCover).toFixed(2)); 
console.log("Reorder Now: " + reorderNow); 
console.log("Recommended Reorder Quantity: " + reorderQuantity); 
console.log("Estimated Reorder Cost: $" + (estimatedReorderCost).toFixed(2)); 


