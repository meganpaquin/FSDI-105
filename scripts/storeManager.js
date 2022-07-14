const KEY="users";
function saveUser(userObj){
    //read the current local storage
    let oldData = readUsers();
    //add new data
    oldData.push(userObj);
    //turn the object into a string
    let value = JSON.stringify(oldData);
    //send the user to the local storage
    localStorage.setItem(KEY, value);
    console.log("test");
}

function readUsers(){
    let data = localStorage.getItem(KEY);
    console.log(data);
    if(!data){
        return [];//creating the array
    }else{
        let list = JSON.parse(data);
        return list
    }
}