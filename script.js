//your code here!
const list = document.getElementById('infi-list');
let itemCount = 10;

// Function to add list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const item = document.createElement('li');
    item.innerText = `Item ${++itemCount}`;
    list.appendChild(item);
  }
}

// Initial 10 items
for (let i = 1; i <= 10; i++) {
  const item = document.createElement('li');
  item.innerText = `Item ${i}`;
  list.appendChild(item);
}

// Listen for scroll event
list.addEventListener('scroll', () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 5) {
    // Near bottom, add 2 more items
    addItems(2);
  }
});
