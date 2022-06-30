function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="user")
{
    alert("YOU ARE SUCCESSFULLY LOGINED");
    
    window.location.replace("voting.html");
    return false;

}
else
{
    alert("YOUR LOGIN FAILED");
}


}