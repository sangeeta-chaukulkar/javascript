
const posts=[
    {title: 'Post one',body: 'this is post one' },
    {title: 'Post two',body: 'this is post two' }
];

const user= {
    username: 'sachine',
    LastUserActivityTime: new Date().getTime()
}

function getPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        let output='';
        posts.forEach((post)=> {
            output+=`<li> ${post.title} </li>`;
        });
        document.body.innerHTML=output;
        resolve();
        },2000);
        
    }); 
}
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject("Error: something went wrong");
            }
        },1000);
    });  
}
// a new function called delete post
function deletePost(){
    return new Promise((resolve,reject)=>{
            if(posts.length >0){
                setTimeout(()=>{
                    posts.pop();
                    resolve();  
                },2000);
            }
            else{
                console.log('Array is empty now!');
            }
    });
    
}
//updateLastUserActivityTime
function updateLastUserActivityTime() {
    return new Promise((resolve,reject) => {
         setTimeout(() => {
            user.LastUserActivityTime= new Date().getTime();
            resolve(user.LastUserActivityTime);
         }, 1000);
    });
}
function userupdatepost(){
    Promise.all([createPost,updateLastUserActivityTime]).then(()=> {
        posts.forEach((post)=> {
            console.log(post.title, user.LastUserActivityTime);
        });
    }).then(()=> {
        deletePost();
    }).then(() => {
      getPost();});
}
userupdatepost();

createPost({title: 'Post three',body: 'this is post three' }).then(() => {
    getPost();});
deletePost().then(() => {
    getPost();}).then(() => {
        deletePost();}).then(() => {
            getPost();}).then(() => {
                deletePost();}).then(() => {
                    getPost();}).then(() => {
                        deletePost();}).catch((err) => console.log(err));

//creating a post and deleting at the same time
createPost({title: 'Post four',body: 'this is post four' }).then(() => {
    deletePost();});


// const promise1=Promise.resolve('Hello world!');
// const promise2=10;
// const promise3= new Promise((resolve,reject) => setTimeout(resolve,2000,'Good bye'));
// Promise.all([promise1,promise2,promise3]).then(values=> console.log(values));
