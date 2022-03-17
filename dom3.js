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

// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent='Hello 2';
// items[1].style.fontWeight='bold';

// items[1].style.backgroundColor='yellow';

// for(var i=0;i< items.length;i++){

//     items[i].style.fontWeight='bold';
//     items[i].style.backgroundColor='#f4f4f4';
// }



// //var newLi=document.createElement('li');
// var newLi=document.getElementsByClassName('lists');
// console.log(newLi);
// newLi[0].textContent='Hello 5';
// newLi[0].style.fontWeight='bold';
// newLi[0].style.backgroundColor='yellow';

// var li=document.getElementsByTagName('li');
// //console.log(li[1]);
// li[4].style.fontWeight='bold';
// li[4].style.backgroundColor='yellow';

// var headerMain=document.querySelector('#main-header');
// headerMain.style.backgroundColor='solid 3px #abc';
// var input=document.querySelector('input');
// input.value='Hello World';
// var submit=document.querySelector('input[type="submit"]');
// submit.value='Send';

// var itemSec= document.querySelector('.list-group-item:nth-child(2)');
// itemSec.style.backgroundColor='#00FF00';
// var itemThird= document.querySelector('.list-group-item:nth-child(3)');
// itemThird.style.display="none";

// var secGreen=document.querySelectorAll('li:nth-child(even)');
// console.log(secGreen);
// secGreen[0].style.color='green';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='#00FF00';
// }


// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// parentNode
 //console.log(itemList.parentNode);
 //itemList.parentNode.style.backgroundColor = '#aaa';
//console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode); //null
//console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode); //#document
//console.log(itemList.parentNode.parentNode.parentNode.parentNode); //html
// console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode); //#document
// console.log(itemList.parentElement.parentElement.parentElement.parentElement.parentElement); //null

// parentElement ,Parent Element returns null if the parent is not an element node
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';

// childNodes
//  console.log(itemList.childNodes);  

// console.log(itemList.children);
//console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
console.log(itemList.firstChild);
// // firstElementChild
 console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
console.log(itemList.lastChild);
// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
console.log(itemList.nextSibling); //#text
// // nextElementSibling
console.log(itemList.nextElementSibling); //null

// previousSibling
console.log(itemList.previousSibling); //#text
// previousElementSibling
console.log(itemList.previousElementSibling); //null
itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div
var newDiv =  document.createElement('div');

// // Add class
newDiv.className= 'hello';

// // Add id
newDiv.id = 'hello1';

// // Add attr
newDiv.setAttribute('title', 'Hello Div');

// // Create text node
var newDivText = document.createTextNode('HEllo word');

// // Add text to div
newDiv.appendChild(newDivText);
newDiv.style.fontSize = '30px';
console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);

var newh =  document.createElement('h2');

newh.className= 'hi';

newh.id = 'hi1';

newh.setAttribute('title', 'HEllo word');

var newhText = document.createTextNode('HEllo word');
newh.appendChild(newhText);
console.log(newh);
var body1 = document.querySelector('.container #main');
console.log(body1);
var u1 = document.querySelector('body div div ul');
console.log(u1);
body1.insertBefore(newh, u1);




