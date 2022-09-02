fetch('https://randomuser.me/api/?gender=female')
.then(res => res.json())
.then(data => displayUser(data))


const displayUser=data=>{
    console.log(data);
    const UserConatiner =document.getElementById('user-container');
    const userDiv= document.createElement('div');
    userDiv.innerHTML=`
    <h2> User Name: ${data.results[0].name.last}</h2>
    <h2> City: ${data.results[0].location.city}</h2>
    <h2> Street: ${data.results[0].location.street.name}</h2>
    <img src="${data.results[0].picture.large}"> </img> 
    `
    UserConatiner.appendChild(userDiv);

}