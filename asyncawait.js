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
    posts.push(post);
}
    async function init(){
        await createPost({title:'Post 10',body:'This is post ten'});
getPosts();
    }

    init();