const loadUsers = ()=> {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then( data => displayUsers(data.results))
}

const displayUsers = users => {
    const userContainer = document.getElementById('user-container');

    for( const user of users ){
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML=`
        <h2> User Name: ${user.login.username} </h2> 
        <p> Email : ${user.email}
        <p> Location: ${user.location.city} </p>
        `
        userContainer.appendChild(userDiv)
    }
}

loadUsers();