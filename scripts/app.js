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
    $('input').removeClass('is-invalid');

    if(user.firstname == ""){
        valid=false;
        $('#firstName').addClass('is-invalid');
    }
    if(user.lastname == ""){
        valid=false;
        $('#lastName').addClass('is-invalid');
    }
    if(user.email == ""){
        valid=false;
        $('#email').addClass('is-invalid');
    }
    if(user.phone === ""){
        valid=false;
        $('#phoneNumber').addClass('is-invalid');
    }
    if(user.password != $('#password2').val()){
        valid=false;
        $('#password2').addClass('is-invalid');
        $('#pwValid').hide();
    }
      
    return valid;
}

function validatePass(){
    console.log('validating password');
    let txtPass = $('#password');
    let password = txtPass.val();
    if(password.length<8){
        //the passwowrd is too short
        txtPass.addClass('is-invalid');
    }else{
        txtPass.removeClass('is-invalid');
    }
}


function register(){
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let email = $('#email').val();
    let phoneNumber = $('#phoneNumber').val();
    let password = $('#password').val();
    let payment = $('#payment').val();
    let color = $('#color').val();

    let userinput = new AddUser(firstName, lastName, email, phoneNumber, password, payment, color);

        if(isValid(userinput)){
            saveUser(userinput);
            $('#myModal').modal('hide');
        }
    
    //clear the inputs
    $('.form-control').val("");
    displayUsers();
}

function login(){
    let emailAtt = $('#loginEmail');
    let email = emailAtt.val();
    let passwordAtt = $('#loginPassword')
    let password = passwordAtt.val();
    let currentData = readUsers();
    let valid = true;

    for(i=0; i<currentData.length; i++){
        let arrayEmail = currentData[i].email;
        let arrayPassword = currentData[i].password;

        if(email == arrayEmail && arrayPassword == password){
            location.href = 'users.html';
        }else{
            valid = false;
        }
    }

    if(!valid){
        console.error('Invalid login');
        emailAtt.addClass('is-invalid');
        passwordAtt.addClass('is-invalid');
        $('#loginValid').hide();
    }
}


function init(){
    $('#password').keyup(validatePass);
    displayUsers();
}

window.onload=init;