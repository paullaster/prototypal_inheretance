/**
 * Class
 */
class Users{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
    getUserDetails(){
        console.log(`username:${this.username}, password: ${this.password}`);
    }
}




//Creating a new User

let cee = new Users('Cee', '@#$%');
cee.getUserDetails();