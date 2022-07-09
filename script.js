let addPost = document.querySelector('.add-post-inp')
let right = document.querySelector('.right')
let addPostBtn = document.querySelector('.add-post-btn')
addPostBtn.onclick = () =>{
    let addPostVal = addPost.value
    let posted = document.createElement('div')
    posted.classList.add('posted')
    posted.innerHTML = 
    `
    <div class="posted-you">
        <img src="./images/logotype.png" class="logo">
        <h1>You  Post</h1>
    </div>
    <hr>
    <div class="posted-title">
        <h1 class="posted-text">${addPostVal}</h1>
    </div>
    `   
    right.appendChild(posted)
}