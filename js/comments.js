function cometGets(){
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => commentDisplay(data));
}

function commentDisplay(comments){
    const commnetsConatainer = document.getElementById("comments-container");
    
    for(const comment of comments){
        console.log(comment);
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment')
        commentDiv.innerHTML = `
            <h3>Name: ${comment.name} </h3>
            <h4>Email: ${comment.email}</h4>
            <p>${comment.body}</p>
        `;
        commnetsConatainer.appendChild(commentDiv)
    }
}


cometGets();