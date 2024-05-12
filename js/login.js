
/*to check the validation*/
function adminvalidation() {
    var useradmin = "youssef",
        passwordadmin = "123456",
        user = document.getElementById("username").value,
        password = document.getElementById("password").value;
    if (useradmin === user && passwordadmin === password) {
        window.open("home_admin.html");
    } else {
        var temp=confirm("your are not an admin so you would have to go to home page");
        if (temp==true) {
            window.open("home.html");
        } else {
                alert("You should make sure from your username and password");
            }
        }
     }

/*----------------------------------------------------------------------------------------------------*/
/*to change login icon to the name of admin after checking*/

var myName = "Youssef";
document.getElementById("admon").innerHTML = myName;



/*----------------------------------------------------------------------------------------------------*/
/*to change the color of the site*/
const colors = document.getElementsByClassName('colors');
let i;
for(i = 0;i<colors.length;i++){
    colors[i].addEventListener('click', changecolor)
}

function changecolor(){
    let color = this.getAttribute('data-color');
    document.documentElement.style.setProperty('--color',color);
}