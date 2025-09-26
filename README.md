# Lab5.1

Reflection Questions

1. How did you dynamically create and append new elements to the DOM?

I dynamically created and appended new elements to DOM by using document.createElement("li") to create a new list item for each product added to the cart. I then starting giving each product its details by setting the innerHTML then appended it <ul id="cart"> by using cart.appendChild(li). After my cart was updating fully dynamically everytime a used clicked the "Add Product" button.

2. What steps did you take to ensure accurate updates to the total price?

I used the function updateTotalPrice(amount) which is a reusable function that ensures accurate updates by formatting the result with toFixed(2) whenever an item was removed, added, or its quantity changed. This ensures accurate updates by having the total always shows two decimal places. 

3. How did you handle invalid input for product name or price?

I handled invalid input for product name or price by validating the inputs before adding the items and displayed an alert and prevented the items from being added. I also added a console log warning message.

4. What challenges did you face when implementing the remove functionality?

One challenge that I faced when implementing the remove functionality was making sure that the total updated correctly when removing items with quantity greater than one. My solution for this problem was adding item.data.price and multiplied the current quantity by price times quantity to ensure that removing an item subtracted its full value from the total. Another challenge was also remembering to use event delegation to be more efficient in my coding.