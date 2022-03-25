//if something needs to wait it will make wait
console.log('person1:show ticket');
console.log('person2:show ticket');


const promiseWifeBringingTickets= new Promise((resolve,reject)=> {
    setTimeout(()=>{
            resolve('ticket');
    },3000)
});
// promiseWifeBringingTickets.then((t)=> {
//     console.log(`person2:show ${t} `);
// });
const getPopcorn= promiseWifeBringingTickets.then((t)=> {
    console.log('wife: I have tickets');
    console.log('husband: we should go in');
    console.log('wife: no I am hungry');
    return new Promise((resolve,reject) => resolve(`${t} popcorn`));
});
const getButter= getPopcorn.then((t)=> {
    console.log('husband: I got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');
    return new Promise((resolve,reject) => resolve(`${t} butter`));
});
const getColdDrinks= getButter.then((t)=> {
    console.log(`husband: I got some butter`);
    console.log(`husband: anything else?`);
    console.log(`wife : lets go we are getting late`);
    console.log(`husband: thank you for reminder`);
    return new Promise((resolve,reject) => resolve(`${t} cold drinks`));
});

getColdDrinks.then((t)=> console.log(t));

console.log('person4:show ticket');
console.log('person5:show ticket');
