var sub=document.getElementById('submits');
sub.addEventListener('click', submitform);
var expenseLst = document.getElementById('expenseList');
var updatess=document.getElementById('updates');
updatess.style.display = "none";

function submitform(e){
  e.preventDefault();
  let data={
  };
  data.amount= document.getElementById('amt').value;
  data.description=document.getElementById('description').value;
  data.category=document.getElementById('category').value;
  let id =  Math.floor(Math.random() * 100);
  data.id = id;
  localStorage.setItem(id,JSON.stringify(data));
  window.location.reload();  
}

expenseDeatils();
function expenseDeatils(){
      for (let i = 0; i < localStorage.length; i++) {  
          const key = localStorage.key(i);

          var val=JSON.parse(localStorage.getItem(key));

          var newLi =  document.createElement('li');
          var newLiText = document.createTextNode(val['amount']);
          var newLiText1 = document.createTextNode(val['description']);
          var newLiText2 = document.createTextNode(val['category']);
          newLi.appendChild(newLiText);
          newLi.appendChild (document.createTextNode ("    "));
          newLi.appendChild(newLiText1);
          newLi.appendChild (document.createTextNode ("       "));
          newLi.appendChild(newLiText2);
          newLi.appendChild (document.createTextNode ("    "));
          
          var deleteBtn = document.createElement('button');
          deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
          deleteBtn.appendChild(document.createTextNode('Delete Expense'));
          newLi.appendChild(deleteBtn);
          var editbutton = document.createElement('button');
          editbutton.className = 'btn btn-dark btn-sm float-right';
          editbutton.appendChild(document.createTextNode('Edit Expense'));
          newLi.appendChild(editbutton);
          expenseLst.appendChild(newLi);
          deleteBtn.addEventListener('click', () => {
            localStorage.removeItem(key);
            expenseLst.removeChild(newLi);
            window.location.reload();
          });
          editbutton.addEventListener('click',  () => {
            sub.style.display = "none";
            updatess.style.display = "block";
            let val = JSON.parse(localStorage.getItem(key));
            console.log(val);
            document.getElementById('amt').value=val.amount;
            document.getElementById('description').value=val.description;
            document.getElementById('category').value=val.category;
            updatess.addEventListener('click',  () => {
            val.amount =  document.getElementById('amt').value ;
            val.description = document.getElementById('description').value ; 
            val.category =  document.getElementById('category').value;
            localStorage.setItem(key, JSON.stringify(val));
            window.location.reload();
            });
        });        
} 
}  
