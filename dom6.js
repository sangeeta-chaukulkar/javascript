var sub=document.getElementById('submits');
sub.addEventListener('click', submitform);
var userList = document.getElementById('userList');
let data={
};

function submitform(e){
  e.preventDefault();
  data.name= document.getElementById('name').value;
  data.email=document.getElementById('email').value;
  data.phone=document.getElementById('phone').value;
  data.date=document.getElementById('da').value;
  data.time=document.getElementById('da1').value;
  let id=data.email;
  localStorage.setItem(id,JSON.stringify(data));
  window.location.reload();   
}

userDeatils();
function userDeatils(){
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    var val=JSON.parse(localStorage.getItem(key));
    let str= userList.innerHTML += '<div class="main"><div class="details"><h4  id="names">'+val['name']+'</h4><h5 id="emails">'+val['email']+'</h5><p id="phones">'+val['phone']+'</p></div><div class="buttons"><button class="btn btn-dark btn-sm float-right" id="edit-button" onclick="editUser('+JSON.stringify(val['email'])+')">Edit</button><button class="btn btn-danger btn-sm float-right delete" id="delete-button" onclick="removeUser('+JSON.stringify(val['email'])+')">Delete</button></div></div>';
  }
}   

function removeUser(id){
  localStorage.removeItem(id);
  window.location.reload();
}

function editUser(id){
    let val = JSON.parse(localStorage.getItem(id));
    console.log(val);
    document.getElementById('name').value=val.name;
    document.getElementById('email').value=val.email;
    document.getElementById('phone').value=val.phone;
    document.getElementById('da').value=val.date;
    document.getElementById('da1').value=val.time;
    sub.addEventListener('click',  () => {
    val.name =  document.getElementById('name').value ;
    val.email = document.getElementById('email').value ; 
    val.phone =  document.getElementById('phone').value;
    val.date=document.getElementById('da').value;
    val.time=document.getElementById('da1').value;
    localStorage.setItem(id, JSON.stringify(val));

    removeUser(id);
    window.location.reload();
  });
  
}