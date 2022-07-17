let userinfo = {
    user:[]
}
let download=[];

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
    $("input").removeClass("is-invalid");

    if(user.firstname == ""){
        valid=false;
        $('#firstName').addClass("is-invalid")
    }
    if(user.lastname == ""){
        valid=false;
        $('#lastName').addClass("is-invalid")
    }
    if(user.email == ""){
        valid=false;
        $('#email').addClass("is-invalid")
    }
    if(user.phone === ""){
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

        if(isValid(userinput)){
            userinfo.user.push(userinput);
            saveUser(userinfo.user);
        }
    
    //clear the inputs
    $(".form-control").val("");
}

function init(){
    readUsersInit();
}

window.onload=init;
