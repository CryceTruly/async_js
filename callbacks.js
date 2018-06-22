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

function createPost(post,callback){
setTimeout(()=>{
     posts.push(post);
     callback();
},3000);

}
getPosts();
createPost({title:'post four',body:'This is post four'},getPosts);
    
