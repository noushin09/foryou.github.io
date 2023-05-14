
const tiltle = document.getElementById('title');
const namefield = document.getElementById('namefield');
const signinbtn = document.getElementById('signinbtn');
const signupbtn = document.getElementById('signupbtn');

signupbtn.onclick=function(){
    tiltle.innerHTML="SignUp";
    namefield.style.display ="block";
}
signinbtn.onclick=function(){
    tiltle.innerHTML ="Login";
    namefield.style.display="none";
}