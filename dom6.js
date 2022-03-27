var sub=document.getElementById('submits');
sub.addEventListener('click', submitform);
var userList = document.getElementById('userList');

function submitform(e){
  e.preventDefault();
  let data={
  };
  data.name= document.getElementById('name').value;
  data.emailID=document.getElementById('email').value;
  data.phone=document.getElementById('phone').value;
  data.date=document.getElementById('da').value;
  data.time=document.getElementById('da1').value;
  axios.post("https://crudcrud.com/api/8d2ca5137f5c4f71b02686995f7fd5cf/appointmentData", data)
    .then((response) => {
         console.log(response)
           console.log(data); })

     .catch((err) => {
        console.log(err)});
  // let id=data.email;
  // localStorage.setItem(id,JSON.stringify(data));
  // window.location.reload();  
  userDeatils(); 
}

function userDeatils(){
  axios.get("https://crudcrud.com/api/8d2ca5137f5c4f71b02686995f7fd5cf/appointmentData")
  .then((response) => {
      console.log(response)
      for (var i = 0; i < response.data.length; i++) {   
        userList.innerHTML += `<div class="main">
        <div class="details"><h4  id="names">' ${response.data[i].name}
        </h4><h5 id="emails"> ${response.data[i].emailID}
        </h5><p id="phones"> ${response.data[i].phone}</p>
        <h4  id="names">' ${response.data[i].date}
        </h4><h4  id="names">' ${response.data[i].time}
        </h4>
        </div>
        <div class="buttons">
        <button class="btn btn-dark btn-sm float-right" id="edit-button" onclick="editUser(${JSON.stringify(response.data[i]._id)})">Edit</button>
        <button class="btn btn-danger btn-sm float-right delete" id="delete-button" onclick="removeUser(${JSON.stringify(response.data[i]._id)})">Delete
        </button></div></div>`;
    
      }
    })
  .catch((err) => {
      console.log(err)});

  // for (let i = 0; i < localStorage.length; i++) {
  //   const key = localStorage.key(i);
  //   var val=JSON.parse(localStorage.getItem(key));
  //   let str= userList.innerHTML += '<div class="main"><div class="details"><h4  id="names">'+val['name']+'</h4><h5 id="emails">'+val['email']+'</h5><p id="phones">'+val['phone']+'</p></div><div class="buttons"><button class="btn btn-dark btn-sm float-right" id="edit-button" onclick="editUser('+JSON.stringify(val['email'])+')">Edit</button><button class="btn btn-danger btn-sm float-right delete" id="delete-button" onclick="removeUser('+JSON.stringify(val['email'])+')">Delete</button></div></div>';
  // }
}   

function removeUser(id){
  localStorage.removeItem(id);
  userDeatils(); 
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
    userDeatils(); 
  });
  
}