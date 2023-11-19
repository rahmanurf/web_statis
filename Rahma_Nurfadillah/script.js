alert('Welcome to The Itzel Cookies Webiste')
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

// toggle class active
const menu = document.querySelector('.menu');
//bar di klik
document.querySelector('#bar').onclick=() => {
    menu.classList.toggle('active');
}

const bar = document.querySelector('#bar');

document.addEventListener('click', function (e){
    if(!bar.contains(e.target) && !menu.contains(e.target)){
        menu.classList.remove('active');
    }
})

let search = document.querySelector('.search');
document.querySelector('#search').onclick=() => {
    search.classList.toggle('active');
}