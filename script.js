const posts = [
    {
        username: "jerry",
        media: "image/image1.jpg",
        likes: 123_987,
        message: "Lol! Javascript is superb :)",
        time: "11 HOURS AGO"
    },
    {
        username: "alpha_studio247",
        media: "image/image2.jpg",
        likes: 123_987_230,
        message: "We offer the best services!",
        time: "2 HOURS AGO"
    },
    {
        username: "codem@nia",
        media: "image/image3.jpg",
        likes: 10_561,
        message: "Check out our new Project",
        time: "2 MINUTES AGO"
    },
    {
        username: "new_user",
        media: "image/image2.jpg",
        likes: 61,
        message: "Hello World",
        time: "10 MINUTES AGO"
    }
]

let post_container = document.querySelector(".post_container");

window.onload = () => {

    posts.forEach(post => {
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
        `
    })
}