console.log('person1:show ticket');
console.log('person2:show ticket');

const preMovie= async()=> {
    const promiseWifeBringingTickets= new Promise((resolve,reject)=> {
        setTimeout(()=>{
                resolve('ticket');
        },3000)
    });
    const getPopcorn=new Promise((resolve,reject)=> resolve('popcorn'));
    const addButter= new Promise((resolve,reject)=> resolve('butter'));
    const getColdDrinks= new Promise((resolve,reject)=> resolve('cold drinks'));

    let ticket= await promiseWifeBringingTickets;

    console.log(`wife: I have ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no I am hungry');
    let popcorn =await getPopcorn;
    console.log(`husband: I got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');
    let butter=await addButter;
    console.log(`husband: I got some ${butter}`);
    console.log(`husband: anything else?`);
    console.log(`wife : lets go we are getting late`);
    console.log(`husband: thank you for reminder`);
    let colddrink=await getColdDrinks;
    console.log(`husband: here are some ${colddrink}`);
    // let [Popcorn,Butter,coldDrinks]= await Promise.all([getPopcorn,addButter,getColdDrinks]);
    // console.log(`${Popcorn}, ${Butter}, ${coldDrinks}`);
    return ticket;
};
preMovie().then((m)=> console.log(`person3:show ${m}`));

console.log('person4:show ticket');
console.log('person5:show ticket');