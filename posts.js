let post_container = document.querySelector(".post_container");

window.onload = () => {

    fetch('http://localhost:8000/posts/')
        .then(res => res.json())
        .then(res => renderPost(res))
}

const showPost = (elem, flag) => {
    flag == 1 ? elem.setAttribute("style", "visibility: hidden; display:none;") : elem.setAttribute("style", "visibility: visible; display:grid;");
}

document.querySelector("#post_back").onclick = () => showPost(document.querySelector('.add_post_container'), 1)

document.querySelector(".floating_create_post").onclick = () => showPost(document.querySelector('.add_post_container'), 0)

document.querySelector("#post_post").onclick = () => addPost()

let post_media = document.querySelector('#post_media');
post_media.onchange = () => {
    
    if(["png", "jpg", "jpeg"].indexOf(post_media.files[0].name.toLowerCase().split(".")[1]) < 0){
        alert(`Only Images Can be Posted For Now`);
        return
    }

    let path = window.URL.createObjectURL(post_media.files[0]).split("/");

    console.log(`blob:null/${path[path.length - 1]}`);

    document.querySelector(".post_media_label").textContent = post_media.files[0].name.substring(0,20) + "...";
}

const addPost = () => {
    let username = document.querySelector('#post_username').value,
        post_message = document.querySelector('#post_message').value;

    if (!(username)){
        alert("Username and Media are required!");
        return;
    }
    
}

const renderPost = data => {
      data.forEach((post) => {
        post_container.innerHTML += `
              <div class="post">
                        <div class="top">
                            <div class="dp">
                                <i class="fas fa-user-circle"></i>
                                <div class="profile_name">${post.username}</div>
                            </div>
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                        <img src="${post.media}" class="post_image" width="100%">
                        <div class="reactions">
                            <div class="reaction_panel">
                                <div class="lcs">
                                    <i class="far fa-heart"></i>
                                    <i class="far fa-comment"></i>
                                    <i class="far fa-paper-plane"></i>
                                </div>
                                <i class="far fa-bookmark"></i>
                            </div>
                            <div class="post_texts">
                                <div class="likes"><b>${post.likes} likes</b></div>
                                <div class="message"><b>${post.username}</b> ${post.message}</div>
                                <div class="time">${post.time}</div>
                            </div>
                            <div class="comment">
                                <i class="far fa-smile"></i>
                                <input type="text" id="comment_text" placeholder="Add a comment">
                                <button class="post_button">Post</button>
                            </div>
                </div>
        `;
      });
}