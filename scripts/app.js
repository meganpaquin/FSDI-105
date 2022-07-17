let userinfo = {
    user:[]
}

class AddUser {
    constructor(firstname, lastname, email, phone, password, payment_method, color) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.payment_method = payment_method;
        this.color = color;
    }
}

function isValid(user){
    let valid=true;
    
    if(typeof user.firstName === "undefined"){
        valid=false;
        $('#firstName').addClass("is-invalid")
        console.log(user.firstName);
    }
    if(typeof user.lastName === "undefined"){
        valid=false;
        $('#lastName').addClass("is-invalid")
    }
    if(user.email.length ==0){
        valid=false;
        $('#email').addClass("is-invalid")
    }
    if(typeof user.phoneNumber=== "undefined"){
        valid=false;
        $('#phoneNumber').addClass("is-invalid")
    }
    if(user.password != $('#password2').val()){
        valid=false;
        $('#password2').addClass("is-invalid")
    }
      
    return valid;
}

function register(){
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let email = $("#email").val();
    let phoneNumber = $("#phoneNumber").val();
    let password = $("#password").val();
    let payment = $("#payment").val();
    let color = $("#color").val();

    let userinput = new AddUser(firstName, lastName, email, phoneNumber, password, payment, color);

       /* not working
       
        if(isValid(userinput)){
            userinfo.user.push(userinput);
            //saveUser(userinfo.user);
            console.log(userinfo.user)
        } */
        userinfo.user.push(userinput);
        console.log(userinfo.user);
        console.log("test");
    
    //clear the inputs
    $(".form-control").val("");
}

function init(){
    //array issue: saveUser(Array Here);
}

window.onload=init;
