window.onload = () => {
    if (sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(user.email){
            location.replace('/');
        }
    }
}

//signupform
let formBtn = document.querySelector('#btn-s');
let loader = document.querySelector('.loader');

formBtn.addEventListener('click', () => {
    let fullname = document.querySelector('#name');
    let email = document.querySelector('#e-mail');
    let number = document.querySelector('#number');
    let password = document.querySelector('#password');
    let tcb = document.querySelector('#tc');

    //validation
    if(fullname.value.length < 2){
        showeror('name must me at least 2 letters long^^');
    }else if(!email.value.length){
        showeror('enter your email');
    }else if(password.value.length < 8){
        showeror('pasword must be at least 8 letters long');
    } else if(Number(number) || number.value.length < 10){
        showeror('invalid number'); 
    }else if(!tcb.checked){
        showeror('you must agree to our conditions');
    } else {
        //submit
        loader.style.display = 'block';
        sendData('/signup' ,{
            name: fullname.value,
            email: email.value,
            password: password.value,
            number: number.value,
            tcb: tcb.value
        })
    }
})