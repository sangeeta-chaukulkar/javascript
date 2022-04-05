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
  axios.post("https://crudcrud.com/api/a1b608c128f3418bb9debd5c603a6958/expenseData", data)
    .then((response) => {
         console.log(response);
           document.getElementById('amt').value='';
           document.getElementById('description').value='';
           document.getElementById('category').value='';
           expenseDeatils();
          })
     .catch((err) => {
        console.log(err)});
  
//   let id =  Math.floor(Math.random() * 100);
//   data.id = id;
//   localStorage.setItem(id,JSON.stringify(data));
//   window.location.reload();  
}

expenseDeatils();
function expenseDeatils(){
    axios.get("https://crudcrud.com/api/a1b608c128f3418bb9debd5c603a6958/expenseData")
    .then((response) => {
        console.log(response);
        expenseLst.innerHTML="";
        for (let i = 0; i < response.data.length; i++) {   
            var newLi =  document.createElement('li');
            var newLiText = document.createTextNode(response.data[i].amount);
            var newLiText1 = document.createTextNode(response.data[i].description);
            var newLiText2 = document.createTextNode(response.data[i].category);
            newLi.appendChild(newLiText);
            newLi.appendChild (document.createTextNode ("    "));
            newLi.appendChild(newLiText1);
            newLi.appendChild (document.createTextNode ("       "));
            newLi.appendChild(newLiText2);
            newLi.appendChild (document.createTextNode ("    "));
        
            var deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
            deleteBtn.appendChild(document.createTextNode('Delete User'));
            newLi.appendChild(deleteBtn);
            var editbutton = document.createElement('button');
            editbutton.className = 'btn btn-dark btn-sm float-right';
            editbutton.appendChild(document.createTextNode('Edit user'));
            newLi.appendChild(editbutton);
            expenseLst.appendChild(newLi);
            deleteBtn.addEventListener('click', () => {
                  axios.delete("https://crudcrud.com/api/a1b608c128f3418bb9debd5c603a6958/expenseData/"+response.data[i]._id)
                  .then((response) => {
                    console.log(response);
                    expenseLst.removeChild(newLi);
                    expenseDeatils();
                    })
                  .catch((err) => {
                    console.log(err)}); 
            });
            editbutton.addEventListener('click', () => {
                sub.style.display = "none";
                updatess.style.display = "block";
                document.getElementById('amt').value=response.data[i].amount;
                document.getElementById('description').value=response.data[i].description;
                document.getElementById('category').value=response.data[i].category;

                updatess.addEventListener('click', () =>{
                  updateItem(response.data[i]._id);
                });
        });
        }
      })
    .catch((err) => {
        console.log(err)});
}

function updateItem(id){
    // alert(id);
    let data1= axios.get("https://crudcrud.com/api/a1b608c128f3418bb9debd5c603a6958/expenseData/"+id)
    .then((response) => {
      data1.amount =  document.getElementById('amt').value ;
      data1.description = document.getElementById('description').value ; 
      data1.category =  document.getElementById('category').value;
      axios.put("https://crudcrud.com/api/a1b608c128f3418bb9debd5c603a6958/expenseData/"+id,{
            amount: data1.amount,
            description:data1.description,
            category:data1.category,
        })
      .then((response) => {
        // alert(response);
        expenseDeatils();
      })
      .catch((err) => {
      console.log(err)});
    });
}
