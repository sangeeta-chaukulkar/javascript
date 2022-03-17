var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

var filter = document.getElementById('filter');

console.log(form);
console.log(itemList);
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);


function addItem(e){
  e.preventDefault();
  var newItem = document.getElementById('item').value;
  var newDesc=document.getElementById('description').value;
  
  var li = document.createElement('li');
  li.className = 'list-group-item';
  var newDiv =  document.createElement('p');
  var newDivText = document.createTextNode(newDesc);
  newDiv.appendChild(newDivText);

  li.appendChild(document.createTextNode(newItem));
  li.appendChild(newDiv);
 
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);
  var editbutton = document.createElement('button');
  editbutton.className = 'btn btn-dark btn-sm float-right';
  editbutton.appendChild(document.createTextNode('Edit'));
  li.append(editbutton);
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    //console.log(items); //HTMLCollection
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      var itemDesc = item.childNodes[1].textContent;
      //console.log(itemDesc);
      if(itemName.toLowerCase().indexOf(text) != -1 || itemDesc.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }