const posts=[
    {title: 'Post one',body: 'this is post one' },
    {title: 'Post two',body: 'this is post two' }
];
function getPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        let output='';
        posts.forEach((post)=> {
            output+=`<li> ${post.title} </li>`;
        });
        document.body.innerHTML=output;
        resolve();
        },1000);
        
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
function deletePost(){
    return new Promise((resolve,reject)=>{
            if(posts.length >0){
                setTimeout(()=>{
                    posts.pop();
                    resolve();  
                },1000);
            }
            else{
                console.log('Array is empty now!');
            }
    });
    
}

async function printPosts(){
    await createPost({title: 'Post three',body: 'this is post three' });
    await getPost();
    await deletePost();
    await createPost({title: 'Post four',body: 'this is post four' });
    await getPost();
    await deletePost();
    await getPost();
    await deletePost();
    await getPost();
    await deletePost();
    await getPost();
    await deletePost();
}
printPosts();