const KEY='users';
let i;
function saveUser(userArray){
    //read the current local storage
    let oldArray = readUsers();
    oldArray.push(userArray);
    //turn the objects into a string
    let value = JSON.stringify(oldArray);
    //send the string to local storage
    localStorage.setItem(KEY, value);
}

function readUsers(){
    //get the current local storage users
    storageData = localStorage.getItem('users');
    //check if there is data and set it to our array
    if(!storageData){
        console.log('there was nothing');
        return [];
    }else{
        let list =JSON.parse(storageData);//parse the string to obj
        console.log('there was something');
        return list;//return array with obj
    }
}