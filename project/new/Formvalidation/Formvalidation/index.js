function formvalidation(){
    var name=document.myform.name.value;
    var email=document.myform.email.value;
    var atposition=email.indexOf("@");
    var dotposition=email.lastIndexOf(".");
    var pas1=document.myform.password1.value;
    var pas2=document.myform.password2.value;
    var contact_no=document.myform.contact_no.value;
    
    if(name==""||name==null)
    {
        alert("enter tha valid name");
    }
    else if(atposition<1||dotposition<atposition+2||dotposition+2>=email.length)
    {
        alert("enter valid email_id");

    }
    else if(pas1!=pas2)
    {
       alert(" confirm pasword are not match");
    }
    else if(isNaN(contact_no))
    {
        alert("contact no is not numeric value");
    }
    else{
        alert("response submited successfully");
    }
}



