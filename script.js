let name=document.getElementById('name');
let number=document.getElementById('number');
let email=document.getElementById('email');
let textarea=document.getElementById('textarea');

function valiatename(){
    var namevalue=name.value.trim()
    var nameerror=document.querySelector('.name-error');
    if(namevalue.length==0){
        nameerror.innerHTML="name shouldn't  empty"
        return false
    } else if (namevalue.length<5) {
        nameerror.innerHTML="name shouldn't less than 5"
        return false
    } else {
        nameerror.innerHTML='<span class="material-symbols-outlined check">check</span>';
        return true
    }
}
function valiatenumber(){
    var numbervalue=number.value.trim();
    var numbererror=document.querySelector('.number-error');
    const namePattern = /^[a-zA-Z]+$/;
    if(namePattern.test(numbervalue)){
        numbererror.innerHTML="shouln't be alphabets"
        return false
    }
    if(numbervalue.length<10){
        numbererror.innerHTML="shouln't be less than 10 digits"
        return false
    }else{
        numbererror.innerHTML='<span class="material-symbols-outlined check">check</span>'
        return true
    }
    
}
function valiateemail(){
    var emailvalue=email.value.trim();
    var emailerror=document.querySelector('.email-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailvalue==''){
        emailerror.innerHTML="email souldn't be empty "
        return false
    }
    if(!emailPattern.test(emailvalue)){
        emailerror.innerHTML="invalid email"
        return false
    }else{
        emailerror.innerHTML='<span class="material-symbols-outlined check">check</span>'
        return true
    }

}
function valiatearea(){
    var areavalue=textarea.value.trim()
    var areaerror=document.querySelector('.teaxtarea-error');
    total=30;
    var left=total-areavalue.length;
    if(areavalue.length<30){
        areaerror.innerHTML=left+"enter more charecters"
    }else{
        areaerror.innerHTML='<span class="material-symbols-outlined check">check</span>'
        return true
    }
}


function sumbit() {
    var submit = document.querySelector('.submit-error');
    if (valiatename() && valiatenumber() && valiateemail() && valiatearea()) {
        window.location.href = "https://renzullilearning.com/documents/en/images/261.png";
         return true;
    } else {
        var a = setInterval(() => {
            submit.innerHTML = "Form didn't fill properly";
        }, 500);
        
        setTimeout(() => {
            clearInterval(a);
            submit.innerHTML = "";
        }, 5000);
        return false;
    }
}