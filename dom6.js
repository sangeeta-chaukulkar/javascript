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

var sub=document.getElementById('submits');
sub.addEventListener('click', submitform);


function submitform(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('da').value;
    var time = document.getElementById('da1').value;
    var data={
        name: name,
        email:email,
        phone:phone,
        date:date,
        time:time};
    localStorage.setItem(email,JSON.stringify(data));
}

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    var val=JSON.parse(localStorage.getItem(key));
    // console.log(val['email']);
    var newDiv =  document.createElement('div');
    newDiv.id = 'hello1';
    var newDivText = document.createTextNode(val['email']);
    var newDivText1 = document.createTextNode(val['name']);
    var newDivText2 = document.createTextNode(val['phone']);
    var newDivText3 = document.createTextNode(val['date']);
    var newDivText4 = document.createTextNode(val['time']);
    newDiv.appendChild(newDivText1);
    newDiv.appendChild (document.createTextNode ("    "));
    newDiv.appendChild(newDivText);
    newDiv.appendChild (document.createTextNode ("       "));
    newDiv.appendChild(newDivText2);
    newDiv.appendChild (document.createTextNode ("    "));
    newDiv.appendChild(newDivText3);
    newDiv.appendChild (document.createTextNode ("       "));
    newDiv.appendChild(newDivText4);
   
    newDiv.style.fontSize = '15px';
    var desc = document.getElementById('desc');
    desc.parentNode.insertBefore(newDiv, desc);
}

document.addEventListener('DOMContentLoaded', () => {
    var val=JSON.parse(localStorage.getItem('admin@gmail.com'));
    document.getElementById('name').value=val['name'];
    document.getElementById('email').value=val['email'];
    document.getElementById('phone').value=val['phone'];
    document.getElementById('da').value=val['date'];
    document.getElementById('da1').value=val['time'];
});
