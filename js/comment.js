fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(data => displayCommentData(data))

displayCommentData= comments =>{

    const commentContainer = document.getElementById('comment-container');

    for( let i=0; i<20; i++){
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('all-comment');
        commentDiv.innerHTML=`
        <h2>Post Id: ${comments[i].id} </h2>
        <h3>Name : ${comments[i].name} </h3>
        <button onclick = "commentdetails(${comments[i].id})"> Click </button>

        `
        commentContainer.appendChild(commentDiv);
        console.log(comments[i]);
    }
    
}

const commentdetails= id => {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    console.log(url);
}