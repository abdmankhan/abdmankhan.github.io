
function validate() {
    /*
       If you want to print your data then you need to write this function other wise your page is refresh automatically
    */
    // event.preventDefault();

    const name = document.getElementById('name');
    const mobile = document.getElementById('mobile');
    const email = document.getElementById('email');
    const password = document.getElementById('pass');
    const cpassword = document.getElementById('cpass');
    const error = document.getElementsByClassName('error');

    /*
     This for loop is because the u change the value of innerText before so to remove the previous text we used this
    */
    for(let i=0;i<error.length;i++){
       error[i].innerText = "";
    }
    name.style.border = "1px solid black";
    mobile.style.border = "1px solid black";
    email.style.border = "1px solid black";
    password.style.border = "1px solid black";
    cpassword.style.border = "1px solid black";
    
    if (name.value.length < 5) {
        error[0].innerText = " *Name should be greater than 5 character";
        name.style.border="2px solid red";
        return false;
    }
    else if(mobile.value.length<10 || mobile.length>10){
        mobile.style.border="2px solid red";
        error[1].innerText="*Mobile no. should be 10 digits"
        return false;
    }
    else if(isNaN(mobile.value)){
        mobile.style.border="2px solid red";
        error[1].innerText = " *Mobile number should contain only digits";
        return false;
    }
    else if(email.value.length <11){
        email.style.border="2px solid red";
        error[2].innerText="*Email should be greater than 11";
        return false;
    }
    else if(!email.value.endsWith("@gmail.com")){
        email.style.border="2px solid red";
        error[2].innerText="*Email should contains @gmail.com";
        return false;
    }
    else if(password.value.length<5)
    {
        password.style.border="2px solid red";
        error[3].innerText="*Password should be greater than 5 charactor";
        return false;
    }
    else if(!password.value.match(/[a-z]/g) || !password.value.match(/[A-Z]/g) || !password.value.match(/[0-9]/g)){
        password.style.border="2px solid red";
        error[3].innerText="*Password should contain atleast one(small,big,digit)";
        return false;
    }
    else if(password.value!=cpassword.value)
    {
        cpassword.style.border="2px solid red";
        error[4].innerText="*Confirm password should be matched";
        return false;
    }
    else{
        localStorage.setItem('email',email.value);
        localStorage.setItem('password',password.value);
        alert("Your form is submitted successfully");
        window.open('/html/indexcopy.html');
        return true;

    }
}

function check()
{
    const username=document.getElementById('username');
    const lpass=document.getElementById('lpass');
    const checkdetail=document.getElementById('checkdetail');
    if(username.value==localStorage.getItem('email') && lpass.value==localStorage.getItem('password'))
    {
        alert("Login successfully");
        window.open('/html/indexcopy.html');
        return true;
        
    }
    else
    {
       checkdetail.innerText="*Enter valid details";
       return false;
    }
}