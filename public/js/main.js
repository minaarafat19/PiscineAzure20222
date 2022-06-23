const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('input');
const emojiBtn = document.querySelector('#emoji-btn');
const picker = new EmojiButton();

var SendBtn = document.getElementById("send-btn");
var SendBtn = document.getElementById("send-btn");
var SendBtn2 = document.getElementById("send-btn2");

var inputfile = document.getElementById("read-file");
var inputfile2 = document.getElementById("read-file2");


// Emoji selection  
window.addEventListener('DOMContentLoaded', () => {

    picker.on('emoji', emoji => {
      document.querySelector('input').value += emoji;
    });
  
    emojiBtn.addEventListener('click', () => {
      picker.togglePicker(emojiBtn);
    });
  });        

//   chat button toggler 

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})

// send msg 
submitBtn.addEventListener('click', ()=>{
    let userInput = inputElm.value;

    let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    <img src="img/me.jpg" class="avatar">
    </div>`;

    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';

  SendBtn.addEventListener("click",function(){

    var upimage = `<img src="./img/${inputfile.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]}">`;
    
    
    var input=document.getElementById("add-todo");
    
   
    
    var ul= document.getElementById("list-todo");
    var li= document.createElement("li");
    li.innerText=upimage;
    li.setAttribute("class","list-group-item");
    //ul.appendChild(li);

    var ul2= document.getElementById("list-text");
    var li2= document.createElement("lire");
    
    li2.setAttribute("class","list-group-item2");
    ul2.appendChild(li2);
   
    
    var badge= document.getElementById("badge-todo");
    var tabLi= document.getElementsByClassName("list-group-item");
    //badge.innerText=tabLi.length;
    var upimage = `<img src="./img/${inputfile.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]}">`;

    let temp = `<div class="out-msg">
    <span class="my-msg">${upimage}</span>
    <img src="img/me.jpg" class="avatar">
    </div>`;
     chatArea.insertAdjacentHTML("beforeend", temp);

     Tesseract.recognize(

            `img/${inputfile.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]}`,
            'eng',
            { logger: m => console.log(m) }
                 ).then(({ data: { text } }) => {
                console.log(text);
                   let temp = `<div class="income-msg">
                    <span class="msg">${text}</span>
                    <img src="img/person.jpg" class="avatar">
                    </div>`;
                    chatArea.insertAdjacentHTML("beforeend", temp);
                //ul2.appendChild(li2).innerText=text;
            })

      
    //li.innerHTML = upimage;

  })
 
})
window.addEventListener("load",function(){
    console.log("clicked");
        SendBtn2.addEventListener("click",function(){
          console.log("clicked");

            var ul3= document.getElementById("list-todo3");
            var li3= document.createElement("li");
            //li3.innerText=upimage;
            li3.setAttribute("class","list-group-item3");
            //ul3.appendChild(li3);

            var classifier,label,prob;

            var img=new Image(300,350);

            function setup(){
                img.src=`img/${inputfile2.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]}`;
                image2 = `<img src="./img/${inputfile2.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]}">`;
                 let temp = `<div class="income-msg">
                    <span class="my-msg">I${image2}</span>
                    <img src="img/me.jpg" class="avatar">
                    </div>`;
                    chatArea.insertAdjacentHTML("beforeend", temp);
                //document.body.appendChild(img);
                classifier=ml5.imageClassifier("MobileNet",modelReady);
            }

            function modelReady(){

                classifier.predict(img,gotResults);
            }

            function gotResults(err,results){
            label=results[0].className;
            prob=results[0].probability*100;
            //li3.innerHTML="Its a :"+label;
            //document.getElementById("output2").innerHTML="Im, "+prob+"% sure";

             let temp = `<div class="out-msg">
                    <span class="msg">Its a :+ ${label}</span>
                    <img src="img/person.jpg" class="avatar">
                    </div>`;
                    chatArea.insertAdjacentHTML("beforeend", temp);
            }
            setup();
         });
  })