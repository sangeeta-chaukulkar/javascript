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

var user=console.log(document.getElementById('users'));
console.log(user);
//user.textContent='Hello';
//user.innerHTML='Goodbye'; //plats attention to style
//console.log(user.textContent);
user.innerHTML='<h3>Hello</h3>';
user.style.borderBottom='solid 3px #000';
var item=console.log(document.getElementById('item'));
item.style.borderBottom='solid 3px #00FF00';


