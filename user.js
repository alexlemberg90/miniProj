let params = new URL(location).searchParams
let id = params.get("userId")
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(value => value.json())
.then(value => {
    let userDiv = document.createElement('div');
    let userPosts = document.createElement('button');
    userDiv.style.display = 'flex';
    userDiv.style.flexWrap = 'wrap';
    userDiv.style.textAlign = 'center';

    userDiv.innerHTML =
        `<h4 style="background: limegreen; width: 100%">
Name : ${value.name}<br>
Username : ${value.username} <br>
Email : ${value.email} <br>
<hr>
Address : 
<!--<br>-->
<h5 style="background: chartreuse; width: 100%">
street : ${value.address.street}<br>
syite : ${value.address.suite}<br>
city : ${value.address.city}<br>
zipcode : ${value.address.zipcode}<br>
geo : lat(${value.address.geo.lat}), lng(${value.address.geo.lng})<br>
</h5>
<hr>
<h3 style="background: lawngreen; width: 100%">
Phone : ${value.phone}<br>
Website : ${value.website}<br>
</h3>
<hr>
<p style="background: greenyellow; width: 100%;">Company : </p>
<!--<br>-->
<h5 style="background: greenyellow; width: 100%">
name : ${value.company.name}<br>
catchPhrase : ${value.company.catchPhrase}<br>
bs : ${value.company.bs}<br>
</h5>
</h4>`;
    userPosts.innerHTML = 'post of current user';
    userPosts.style.backgroundColor = '#d1f63e';
    document.body.append(userDiv);
    userDiv.append(userPosts);
    userPosts.style. width = '18%';
    userPosts.style.border = '3px #f8ed17 solid';
    userPosts.style.margin = '10px';

    userPosts.onclick = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(posts => posts.json())
            .then(posts => {
                for (let post of posts) {
                    let postDiv = document.createElement('div');
                    let postTitle = document.createElement('button');
                    const nextPage = document.createElement('a');

                    postDiv.innerHTML = `Post - ${post.title}`;
                    nextPage.innerText = 'Post details';
                    nextPage.href = `post-details.html?postId=${post.id}`;
                    nextPage.style.textDecoration = 'none';
                    nextPage.style.color = 'black';
                    nextPage.style.margin = '10px';
                    postTitle.append(nextPage);
                    userDiv.append(postDiv);
                    postDiv.append(postTitle);
                    postTitle.style.backgroundColor = '#f6f34f';
                    postDiv.style.backgroundColor = '#d0f15c';
                    postDiv.style.width = '17%';
                    postDiv.style.border = '9px yellow solid';
                    postDiv.style.display = 'flex';
                    postDiv.style.margin = '10px';


                }


            });
    }
})