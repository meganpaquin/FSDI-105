const KEY="users";
let i;
function saveUser(userArray){
    //read the current local storage
    readUsers();
    let oldArray = download;
    validateArray(userArray, oldArray);
    //turn the objects into a string
    let value = JSON.stringify(oldArray);
    //send the string to local storage
    localStorage.setItem(KEY, value);
}

function validateArray(newArray, oldArray){
    oldArray = download;
        for(i=0; i<newArray.length; i++){
            if(newArray[i] != oldArray[i]){
               oldArray[i] = (newArray[i]);
            }
        }
}

function readUsersInit(){
    //get the current local storage users
    storageData = localStorage.getItem('users');
    //check if there is data and set it to our array
    if(!storageData){
        userinfo.user=[];
        console.log("there was nothing")
    }else{
        let newObject = JSON.parse(storageData);
        userinfo.user = [];
        download = [];
            newObject.forEach(element => {
                userinfo.user.push(element);
                download.push(element);
            })
        console.log("there was something")
    }
}

function readUsers(){
    //get the current local storage users
    storageData = localStorage.getItem('users');
    //check if there is data and set it to our array
    if(!storageData){
        userinfo.user=[];
        console.log("there was nothing")
    }else{
        let newObject = JSON.parse(storageData);
        download = [];
            newObject.forEach(element => {
                download.push(element);
            })
        console.log("there was something")
    }
}