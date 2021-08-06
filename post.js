let params = new URL(location).searchParams
let postId = params.get("postId")
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(post => post.json())
    .then(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `<h4 style="background: #138686; width: 100%">User ID - ${post.userId}<br>
                             Post ID - ${post.id}<br>
                             Title: ${post.title}<br>
                             Body: ${post.body}<hr>
                             <h2 style="background: #0a5454; width: 100%"
                           >Post Comments</h2>
                             </h4>`;
        postDiv.style.textAlign = 'center';
        postDiv.style.display = 'flex';
        postDiv.style.flexWrap = 'wrap';
        postDiv.style.justifyContent = 'space-around';

        document.body.append(postDiv);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(comments => comments.json())
            .then(comments => {
                for (let comment of comments) {
                    let commentDiv = document.createElement('div');
                    commentDiv.innerHTML = `<p>Comment ID - ${comment.id}<br>
                                            name: ${comment.name}<br>
                                            email: ${comment.email}<br>
                                            body: ${comment.body}
                                            </p>`
                    postDiv.append(commentDiv);
                    commentDiv.style.backgroundColor = '#0d5469';
                    commentDiv.style.width = '17%';
                    commentDiv.style.border = '3px solid #04272f';



                }
            });
    })