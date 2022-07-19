
function displayUsers(){
    let table = "";
    let userData = readUsers();

    for(i=0; i<userData.length; i++){
        let firstname = userData[i].firstname;
        let lastname = userData[i].lastname;
        let email = userData[i].email;
        let phone = userData[i].phone;
        let payment = userData[i].payment_method;
        let color = userData[i].color;

        let className = 'row'+color

        //create the table
        table+= `
        <tr class='${className}'>
            <td>${firstname}</th>
            <td>${lastname}</th>
            <td>${email}</th>
            <td>${phone}</th>
            <td>${payment}</th>
        </tr>
        `

        //put into html
        $('#userTable').html(table);
        let concat = '.row'+i;
        $(concat).css('background-color', color);
    }
}