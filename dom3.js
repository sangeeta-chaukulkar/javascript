//console.dir(document);

/*console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title=123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
//console.log(document.all);
console.log(document.all[8]);
document.all[8].textContent='Hello';
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);*/

//var header=console.log(document.getElementById('header-title'));

//console.log(header);
//header.textContent='Hello';
//header.innerHTML='Goodbye'; //plats attention to style
//console.log(header.textContent);
//header.innerHTML='<h3>Hello</h3>';
//header.style.borderBottom='solid 3px #000';
//var item=console.log(document.getElementById('item'));
//var headerMain=document.getElementById('main-header');
//headerMain.style.borderBottom='solid 3px #00FF00';

var items=document.getElementsByClassName('list-group-item');
console.log(items);
items[1].textContent='Hello 2';
items[1].style.fontWeight='bold';

items[1].style.backgroundColor='yellow';

for(var i=0;i< items.length;i++){

    items[i].style.fontWeight='bold';
    items[i].style.backgroundColor='#f4f4f4';
}



//var newLi=document.createElement('li');
var newLi=document.getElementsByClassName('lists');
console.log(newLi);
newLi[0].textContent='Hello 5';
newLi[0].style.fontWeight='bold';
newLi[0].style.backgroundColor='yellow';

var li=document.getElementsByTagName('li');
//console.log(li[1]);
li[4].style.fontWeight='bold';
li[4].style.backgroundColor='yellow';

var headerMain=document.querySelector('#main-header');
headerMain.style.backgroundColor='solid 3px #abc';
var input=document.querySelector('input');
input.value='Hello World';
var submit=document.querySelector('input[type="submit"]');
submit.value='Send';

var itemSec= document.querySelector('.list-group-item:nth-child(2)');
itemSec.style.backgroundColor='#00FF00';
var itemThird= document.querySelector('.list-group-item:nth-child(3)');
itemThird.style.display="none";

var secGreen=document.querySelectorAll('li:nth-child(even)');
console.log(secGreen);
secGreen[0].style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#00FF00';
}





