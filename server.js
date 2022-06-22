import express from "express";
import bcrypt from "bcrypt";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, doc, collection, setDoc, getDoc,updateDoc} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOBDTjOdGMzEm5jdSTceu50ofdXsijBmw",
  authDomain: "kasapio.firebaseapp.com",
  projectId: "kasapio",
  storageBucket: "kasapio.appspot.com",
  messagingSenderId: "1023514397930",
  appId: "1:1023514397930:web:6fea51fc3e70e462a21b93"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
const db = getFirestore();

//init server
const app = express();

//middwares
app.use(express.static("public"));
app.use(express.json()); 

//paths
//home path
app.get('/home', (req, res) => {
    res.sendFile("index.html", { root : "public"})
})
//signup
app.get('/signup', (req, res) => {
    res.sendFile("signup.html", { root : "public"})
})
app.post('/signup', function (res, req) {
    const { name, email, password, number, tcb } = req.body ;

    if(name.value.length < 2){
        res.json({ 'alert' : 'name must me at least 2 letters long^^'});
    }else if(!email.value.length){
        res.json({'alert' : 'enter your email'});
    }else if(password.value.length < 8){
        res.json({'alert' : 'pasword must be at least 8 letters long'});
    } else if(!Number(number) || number.value.length < 10){
        res.json({ 'alert' : 'invalid number'}); 
    }else if(!tcb){
        res.json({ 'alert' : 'you must agree to our conditions'});
    }else{
        //storing data in db
        const users = collection(db, "users");

        getDoc(doc(users, email)).then(user => {
            if(user.exists()){
                return res.json({'alert' : 'email already exists'})
            } else{
                //safety passcode
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(password, salt, (err, hash) => {
                        req.body.password = hash;
                        req.bady.seller = false ;

                        //set the doc
                        setDoc(doc(users, email), req.body).then(data => {
                            res.json({
                                name: req.body.name,
                                email:req.body.email,
                                seller: req.body.seller,
                            })
                        })
                    })
                })
            }
        })
    }
    })
//login
app.get('/login', (req, res) => {
    res.sendFile("login.html", { root : "public"})
})
//products
app.get('/products', (req, res) => {
    res.sendFile("products.html", { root : "public"});
})
//search
app.get('/search', (req, res) => {
    res.sendFile("search.html", { root : "public"});
})
//seller path
app.get('/seller', (req, res) => {
    res.sendFile("seller.html", { root : "public"});
})
//404
app.get('/404', (req, res) => {
    res.sendFile("404.html", { root : "public"});
})


app.use((req, res) => {
    res.redirect('/404')
})
app.listen(3001, () => {
    console.log('listening on port 3001');
})