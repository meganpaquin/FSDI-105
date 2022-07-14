let userinfo = {
    user:[]
}

class AddUser {
    constructor(firstname, lastname, email, password, payment_method, color) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.payment_method = payment_method;
        this.color = color;
    }
}

function createUser(){
    let amanda = new AddUser('Amanda', 'Kuhn', 'amanda.kuhn@gmail.com', 'password1', 'Visa', 'Red');
    let matt = new AddUser('Matt', 'Boring', 'matt.boring@gmail.com', 'uniqueid', 'MasterCard', 'Blue');
    let andy = new AddUser('Andy', 'Letter', 'AL@gmail.com', 'newpw', 'Visa', 'Blue');

    userinfo.user.push(amanda, matt, andy);
}

function isValid(user){
    let valid=true;
    if(user.email.length==0){
        valid=false;
        $("#email").addClass("error-input");
    }
    if(user.password.length==0){
        valid=false;
        $("#password").addClass("error-input");
    }
    console.log(user.lastName);
    console.log(user.password);
    
    return valid;
}

function register(){
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let password2 = $("#password2").val();
    let usercolor = $("#usercolor").val();

    //is the user valid


        if(password == password2){
            let userinput = new AddUser(firstName, lastName, email, password, 'Visa', usercolor);
            
            if(isValid(userinput)){
                userinfo.user.push(userinput);
                console.log(userinfo.user);
                saveUser(userinfo.user);
            }
            
        }else{
            alert('Your passwords do not match');
        }
    
    //clear the inputs
    $(".form-control").val("");
}

function init(){
    createUser();
    console.log('Creating Users...')
    console.log(userinfo.user);
    saveUser(userinfo.user);
}

window.onload=init;
