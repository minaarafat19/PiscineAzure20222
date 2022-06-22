
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY > 170){
        navbar.classList.add('bg');
    }else{
        navbar.classList.remove('bg');
    }
})

const createNavbar = () => {
    let navbar = document.querySelector('.navbar');

    navbar.innerHTML += `
    <ul class="links-container">
            <li class="link-item">
                <a href="index.html" class="link active">Welcome</a>
            </li>
            <li class="link-item">
                <a href="seller.html" class="link">How?</a>
            </li>
            <li class="link-item">
                <a href="search.html" class="link">WittyBot</a>
            </li>
            <li class="link-item">
                <a href="products.html" class="link">Obstacles</a>
            </li>
            
    `
}
createNavbar ();

//user

let userIcon = document.querySelector('.user-icon');
let userIcondrop = document.querySelector('.user-icon-drop');

userIcon.addEventListener('click', () => userIcondrop.classList.toggle('active'))

let text = userIcondrop.querySelector('.p');
let actionBtn = userIcondrop.querySelector('.a');
let user = JSON.parse(sessionStorage.user || null);

if(user != null){
    text.innerHTML = `login as,${user.name}`;
    actionBtn.innerHTML = `logout`;
    actionBtn.addEventListener('click', () => logout());
}else{
    text.innerHTML = `login to your account`;
    actionBtn.innerHTML = `login`;
    actionBtn.addEventListener('click', () => location.href = '/login');
}

const logout = () => {
    sessionStorage.clear()
    location.reload();
}