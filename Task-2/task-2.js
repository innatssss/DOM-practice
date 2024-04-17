// Edd names
const namesToAdd = ["Smith", "Jeff", "Larry"];

// Get the list element
const list = document.getElementById("myList");

// Create new list items and append them to the list
const smithItem = document.createElement("li");
smithItem.classList.add("item");
smithItem.textContent = namesToAdd[0];
list.insertBefore(smithItem, list.firstElementChild);

const middleIndex = Math.ceil(list.children.length / 2);
const jeffItem = document.createElement("li");
jeffItem.classList.add("item");
jeffItem.textContent = namesToAdd[1];
list.insertBefore(jeffItem, list.children[middleIndex]);

const larryItem = document.createElement("li");
larryItem.classList.add("item");
larryItem.textContent = namesToAdd[2];
list.appendChild(larryItem);

// Paint all odd items in purple
const items = document.querySelectorAll(".item");

items.forEach((item, index) => {
  if (index % 2 !== 0) {
    // if the index is odd
    item.style.backgroundColor = "#c19af5";
  }
});

// Loop through and remove the one containing Mel
for (let i = 0; i < items.length; i++) {
  if (items[i].textContent === "Mel") {
    // new list item indicating that Mel has been removed
    const removedMessage = document.createElement("li");
    removedMessage.className = "item removed";
    removedMessage.textContent = "Mel has been removed from the list";   
    // Insert the new item after the item containing Mel
    list.insertBefore(removedMessage, items[i].nextSibling);
    // Remove item Mel
    list.removeChild(items[i]);
    break;
  }
}
