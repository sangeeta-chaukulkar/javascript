var sub=document.getElementById('submits');
sub.addEventListener('click', submitform);
var userList = document.getElementById('userList');
var updatess=document.getElementById('updates');
updatess.style.display = "none";

function submitform(e){
  e.preventDefault();
  let data={
  };
  data.name= document.getElementById('name').value;
  data.emailID=document.getElementById('email').value;
  data.phone=document.getElementById('phone').value;
  data.date=document.getElementById('da').value;
  data.time=document.getElementById('da1').value;
  axios.post("https://crudcrud.com/api/cb87f3bcafff48cb96f3efcf59d7e3eb/appointmentData", data)
    .then((response) => {
         console.log(response);
           document.getElementById('name').value='';
           document.getElementById('email').value='';
           document.getElementById('phone').value='';
           document.getElementById('da').value='';
           document.getElementById('da1').value='';
          })

     .catch((err) => {
        console.log(err)});
  // let id=data.email;
  // localStorage.setItem(id,JSON.stringify(data));
  // window.location.reload();  
  userDeatils(); 
}

userDeatils();
function userDeatils(){
  axios.get("https://crudcrud.com/api/cb87f3bcafff48cb96f3efcf59d7e3eb/appointmentData")
  .then((response) => {
      console.log(response);
      userList.innerHTML="";
      for (let i = 0; i < response.data.length; i++) {   
          var newLi =  document.createElement('li');
          var newLiText = document.createTextNode(response.data[i].emailID);
          var newLiText1 = document.createTextNode(response.data[i].name);
          var newLiText2 = document.createTextNode(response.data[i].phone);
          var newLiText3 = document.createTextNode(response.data[i].date);
          var newLiText4 = document.createTextNode(response.data[i].time);
          newLi.appendChild(newLiText1);
          newLi.appendChild (document.createTextNode ("    "));
          newLi.appendChild(newLiText);
          newLi.appendChild (document.createTextNode ("       "));
          newLi.appendChild(newLiText2);
          newLi.appendChild (document.createTextNode ("    "));
          newLi.appendChild(newLiText3);
          newLi.appendChild (document.createTextNode ("       "));
          newLi.appendChild(newLiText4);
          var deleteBtn = document.createElement('button');
          deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
          deleteBtn.appendChild(document.createTextNode('Delete User'));
          newLi.appendChild(deleteBtn);
          var editbutton = document.createElement('button');
          editbutton.className = 'btn btn-dark btn-sm float-right';
          editbutton.appendChild(document.createTextNode('Edit user'));
          newLi.appendChild(editbutton);
          userList.appendChild(newLi);
          deleteBtn.addEventListener('click', () => {
                axios.delete("https://crudcrud.com/api/cb87f3bcafff48cb96f3efcf59d7e3eb/appointmentData/"+response.data[i]._id)
                .then((response) => {
                  console.log(response);
                  userList.removeChild(newLi);
                  userDeatils();
                  })
                .catch((err) => {
                  console.log(err)}); 
          });
          editbutton.addEventListener('click', () => {
              sub.style.display = "none";
              updatess.style.display = "block";
              document.getElementById('name').value=response.data[i].name;
              document.getElementById('email').value=response.data[i].emailID;
              document.getElementById('phone').value=response.data[i].phone;
              document.getElementById('da').value=response.data[i].date;
              document.getElementById('da1').value=response.data[i].time;
              updatess.addEventListener('click', () =>{
                updateItem(response.data[i]._id);
              });
      });
              // console.log(userList);
        
      }
    })
  .catch((err) => {
      console.log(err)});

}   
function updateItem(id){
    // alert(id);
    let data1= axios.get("https://crudcrud.com/api/cb87f3bcafff48cb96f3efcf59d7e3eb/appointmentData/"+id)
    .then((response) => {
      data1.name =  document.getElementById('name').value ;
      data1.emailID = document.getElementById('email').value ; 
      data1.phone =  document.getElementById('phone').value;
      data1.date=document.getElementById('da').value;
      data1.time=document.getElementById('da1').value;
      axios.put("https://crudcrud.com/api/cb87f3bcafff48cb96f3efcf59d7e3eb/appointmentData/"+id,{
            name: data1.name,
            emailID:data1.emailID,
            phone:data1.phone,
            date:data1.date,
            time:data1.time
        })
      .then((response) => {
        alert(response);
        userDeatils();
      })
      .catch((err) => {
      console.log(err)});
    });
}