const posts=[
    {title:"Post One",body:"This is post One"},
    {title:"Post Two",body:"This is post two"},
    {title:"Post Three",body:"This is post three"}
    ];
    
    function getPosts(){
        setTimeout(()=>{
            let output='';
    posts.forEach((post,index)=>{
       
    output+=`<li>${post.title} </li>`;
    
    document.body.innerHTML=output;
        
    });
        },2000);
    }
    
    function createPost(post){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        posts.push(post);
    const err=false;


    if(err){
        reject();
    }else{
        resolve();
    }

    },3000);
    
    }
)

};


// createPost({title:'Post five',body:'This is post five'})
// .then(()=>{
//     getPosts();
// console.log('loadede');
// }).catch(err=>console.log(err));

const promise1=Promise.resolve('Hello world');
const promise2=2;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'Promise went good');
});

Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
})