
function displayUsers(){
    let table = "";
    for(i=0; i<userinfo.user.length; i++){
        let path = userinfo.user;
        let firstname = path[i].firstname;
        let lastname = path[i].lastname;
        let email = path[i].email;
        let phone = path[i].phone;
        let payment = path[i].payment_method;
        let color = path[i].color;

        let className = "row"+color

        //create the table
        table+= `
        <tr class="${className}">
            <td>${firstname}</th>
            <td>${lastname}</th>
            <td>${email}</th>
            <td>${phone}</th>
            <td>${payment}</th>
        </tr>
        `

        //put into html
        $('#userTable').html(table);
        let concat = ".row"+i;
        $(concat).css('background-color', color);
    }
}

function init(){
    readUsersInit();
    displayUsers();
}

window.onload=init