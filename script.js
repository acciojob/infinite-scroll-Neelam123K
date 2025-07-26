//your code here!
// const list = document.getElementId("infi-list");
// let Itemcount = 0;
function addListItems(count) {
    const list = document.getElementById('list'); // Assuming your list has an id of 'list'
    for (let i = 0; i < count; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Item ${list.children.length + 1}`; // Dynamic item numbering
        list.appendChild(listItem);
    }
}
// Initial load of 10 items
addListItems(10);

// Function to check if user has scrolled to the bottom
function checkScroll() {
    const list = document.getElementById('list');
    if (window.innerHeight + window.scrollY >= list.offsetHeight) {
        addListItems(2); // Add 2 more items when reaching the end
    }
}

// Event listener for scrolling
window.addEventListener('scroll', checkScroll);