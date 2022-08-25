document.getElementById('apply-bg').addEventListener('click', function () {

    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
        // console.log(friend);
    }

})

document.getElementById('center-third').addEventListener('click', function () {
    const third = document.getElementById('third');
    third.style.textAlign = 'center';
});

document.getElementById('add-friend').addEventListener('click', function () {
    const addNew = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = ` <h3 class='friend-name'>New friend </h3>
    <p> Something new added</p>
    `;
    addNew.appendChild(friend);
})