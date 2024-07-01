const detailButton = document.getElementById('detail');
const userInput = document.getElementById('username');
const toshow = document.querySelector('.result');
const visible = document.querySelector('.wrapper');
const inputSection = document.getElementById('inputsection');

detailButton.addEventListener('click', function(e){
    let name = userInput.value;
    //console.log(name);
const requestUrl = `https://api.github.com/users/${name}`
//console.log(requestUrl);
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4)
    {
        const data = JSON.parse(this.responseText);
        //console.log(data.followers);
        eraseCurrent();
        display(data);
       
    }
}
xhr.send();
});



function eraseCurrent()
{
    inputSection.classList.add('hidden');
    toshow.classList.remove('hidden');

}


function display(data)
{
    toshow.innerHTML= '';
    visible.style.height = 'auto';
    const profile_name = document.createElement('h1');
    profile_name.innerHTML = `Name : ${data.name}`;
    toshow.appendChild(profile_name);
    const photo = document.createElement('img');
    const photoLink = data.avatar_url;
    photo.src = `${photoLink}`;
    photo.alt = 'profile_photo';
    photo.style.maxWidth = '100%';
    photo.style.height = 'auto';
    // photo.height = 200;
    toshow.appendChild(photo);
    const repo = document.createElement('h3');
    repo.innerHTML = `Number of Repository : ${data.public_repos}`;
    toshow.appendChild(repo);
    const newUser = document.createElement('button');
    newUser.innerHTML = `<h2 id="startover">CHECK FOR NEXT USER </h2>`;
    newUser.style.backgroundColor = 'black';
    newUser.style.color = 'white';
    newUser.addEventListener('click', nextUser);
    toshow.appendChild(newUser);
    
}

function nextUser()
{
    toshow.classList.add('hidden');
    inputSection.classList.remove('hidden');
}
