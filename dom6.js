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
  axios.post("https://crudcrud.com/api/e5cae32df5014831b8143ea248c149d3/appointmentData", data)
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
  axios.get("https://crudcrud.com/api/e5cae32df5014831b8143ea248c149d3/appointmentData")
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
          userList.appendChild(newLi);
          deleteBtn.addEventListener('click', () => {
                axios.delete("https://crudcrud.com/api/e5cae32df5014831b8143ea248c149d3/appointmentData/"+response.data[i]._id)
                .then((response) => {
                  console.log(response);
                  userList.removeChild(newLi);
                  userDeatils();
                  })
                .catch((err) => {
                  console.log(err)}); 
          });
              // console.log(userList);
        
      }
    })
  .catch((err) => {
      console.log(err)});

}   