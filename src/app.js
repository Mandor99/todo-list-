// vars
const addBtn = document.getElementById('add');
const listItems = document.getElementById('lists');
const inputVal = document.getElementById('item');
const selectBox = document.getElementById('filter'); // functions

const addItems = e => {
  e.preventDefault();

  if (inputVal.value.length) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('list');
    const newList = document.createElement('li');
    newList.innerText = inputVal.value;
    itemContainer.append(newList);
    const compeleteBtn = document.createElement('button');
    compeleteBtn.classList.add('btn');
    compeleteBtn.id = 'compelete';
    const compeleteIcon = document.createElement('i');
    compeleteIcon.classList.add('fas', 'fa-check');
    compeleteBtn.appendChild(compeleteIcon);
    itemContainer.append(compeleteBtn);
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn');
    deleteBtn.id = 'delete';
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-trash');
    deleteBtn.appendChild(deleteIcon);
    itemContainer.append(deleteBtn);
    listItems.append(itemContainer);
    inputVal.value = '';
  } else return false;
};

const delete_checkItems = e => {
  e.preventDefault();
  e.target.id == 'delete' ? e.target.parentElement.remove() : false;
  e.target.id == 'compelete' ? (e.target.previousElementSibling.classList.toggle('done'), e.target.parentElement.classList.toggle('well-done')) : false;
};

const filterItems = e => {
  const filterdItems = listItems.childNodes;
  filterdItems.forEach(item => {
    switch (e.target.value) {
      case 'all':
        item.style.display = 'flex';
        break;

      case 'compelete':
        item.classList.contains('well-done') ? item.style.display = 'flex' : item.style.display = 'none';
        break;

      case 'un-compelete':
        !item.classList.contains('well-done') ? item.style.display = 'flex' : item.style.display = 'none';
        break;

      default:
        break;
    }
  });
}; //events


document.addEventListener('DOMContentLoaded', () => {
  addBtn.addEventListener('click', addItems);
  lists.addEventListener('click', delete_checkItems);
  selectBox.addEventListener('click', filterItems);
});