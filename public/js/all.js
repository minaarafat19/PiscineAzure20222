const sendData = (path, data) => {
    fetch(path, {
        method:'post' ,
        headers: new Headers({'Content-type': 'application/JSON'}),
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => processData(data));
}
const processData= (data) => {
    loader.style.display = null;
    if(data.alert){
        showeror(data.alert);
    }
}


const showeror = (err) => {
    let erorfile = document.querySelector('.eror');
    erorfile.innerHTML= err;
    erorfile.classList.add('show')
}