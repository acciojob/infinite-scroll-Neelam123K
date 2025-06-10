//your code here!
const list = document.getElementId("infi-list");
let Itemcount = 0;
function addListItems(count){
	for(let i = 0; i < count; i++){
	const li = document.createElement('li');
    itemCount++;
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
	}
}
addListItems(10);

window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (Math.ceil(scrolled) >= scrollable) {
    addListItems(2); 
  }
});
