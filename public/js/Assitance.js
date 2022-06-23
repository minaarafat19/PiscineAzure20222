const button=document.querySelector("button");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();
recognition.onstart=function(){
 console.log("Speech Recognition started!");
};
recognition.onresult=function(event){
  console.log(event);
  const spokenwords=event.results[0][0].transcript;
  console.log("spoken words are",spokenwords);
  computerSpeech(spokenwords);
};

function computerSpeech(words){
  const speech=new SpeechSynthesisUtterance
  speech.lang="en-US";
  speech.pitch=0.9;
  speech.volume=1;
  speech.rate=1;
 determineWords(speech,words);
 window.speechSynthesis.speak(speech);
}

function determineWords(speech,words){

  if(words.includes("how are you")){
    speech.text="Iam fine,thank you!";
    window.location.href='#education';
  }
  if(words.includes("Home page")){
  
    window.speechSynthesis.cancel(speech);
    speech.text="redirecting you !";
    window.location.href='index.html'
    console.log(speech.text);
  }

  if(words.includes("Gallery")){
  
    window.speechSynthesis.cancel(speech);
    speech.text="redirecting you to the gallery !";
    window.location.href='search.html'
    console.log(speech.text);
  }

  if(words.includes("presentation page")){
  
    window.speechSynthesis.cancel(speech);
    speech.text=" I will redirect you to the presentation page !";
    window.location.href='seller.html'
    console.log(speech.text);
  }

  if(words.includes("Old problems")){
  
    window.speechSynthesis.cancel(speech);
    speech.text=" redirecting you to the obstacle page !";
    window.location.href='seller.html'
    console.log(speech.text);
  }


  if(words.includes("how is the weather")){
    window.speechSynthesis.cancel(speech);
    speech.text="why you care about that?You never go out!";
  }
  if(words.includes("do you love me")){
    window.speechSynthesis.cancel(speech);
    speech.text="why shouldIlove you Mina?!";
  }
  if(words.includes("need")){

    window.speechSynthesis.cancel(speech);

    speech.text="Yes! what do you want?";
  }
  if(words.includes("Youtube")) {
    window.speechSynthesis.cancel(speech);
    speech.text="Opening Youtube for you now";
    window.open("https://www.youtube.com/");

  }
  
 if(words.includes("Google")) {
  window.speechSynthesis.cancel(speech);
  speech.text="Opening Google for you now!";
  window.open("https://www.google.com/");
  }

}

button.addEventListener("click",() =>{
recognition.start();
});