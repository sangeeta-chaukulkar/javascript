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
console.log(items[0]);
items[1].textContent='Hello 2';
item[1].style.fontWeight='bold';
item[1].style.backgroundColor='yellow';

for(var i=0;i< items.length;i++){

    console.log(items[i].style.fontWeight='bold');
    items[i].style.backgroundColor='#f4f4f4';
}

items[2].style.backgroundColor='#00FF00';


