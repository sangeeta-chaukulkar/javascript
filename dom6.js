// localStorage.setItem('name','email');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');
// console.log(localStorage.getItem('name'));

// sessionStorage.setItem('name','email');
// console.log(sessionStorage.getItem('name'));
// sessionStorage.removeItem('name');
// console.log(sessionStorage.getItem('name'));

// document.cookie='name=sang; expires='+ new Date(2020,0,1).toUTCString();
// console.log(document.cookie);
// console.log(localStorage.getItem('usersangeeta'));

var sub=document.getElementById('submits');
sub.addEventListener('click', submitform);

function submitform(e){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('da').value;
    var time = document.getElementById('da1').value;
    const data={
        name: name,
        email:email,
        phone:phone,
        date:date,
        time:time
    }

    axios.post("https://crudcrud.com/api/8d2ca5137f5c4f71b02686995f7fd5cf/appointmentData", data)
    .then((response) => {
        console.error(response)})
    .catch((err) => {
        console.error(err)});
    // localStorage.setItem(email,JSON.stringify(data));
}