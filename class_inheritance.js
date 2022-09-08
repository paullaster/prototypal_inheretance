/**
 * Class
 */
class Users{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
    getUserDetails(){
        return `username:${this.username}, password: ${this.password}`;
    }
}


class Student extends Users{
    constructor(username, password, email, reg){
        super(username,password);
        this.email = email;
        this.reg = reg;
        this.totalFee = 450
        this.feePaid = null;
        this.feeBal = null;
    }
    registerStudent(){
       return this.feeBal = this.totalFee
    }
    
    payFee(amount){
        return this.feePaid = this.feePaid + amount;
    }
    checkFeeBal(){
        //this.feePaid = this.payFee(amount);
        this.feeBal = this.totalFee - this.feePaid;
        console.log(`${this.username}\`s  fee balance is : $${this.feeBal}`);
        return this.feeBal;
    }
    studentRecords(){
        const userdetails = super.getUserDetails();
        console.log(`${userdetails}, email: ${this.email},
         registration number: ${this.reg}  Fee Balance: $${this.feeBal}`);
    }
}

//Creating a new User

let cee = new Users('Cee', '@#$%');
cee.getUserDetails();


//Creating new student
let std1 = new Student('Cynthia', 'Cee@123$', 'cee@school.io', 'sst-123-001/2019');
std1.payFee(250);
std1.checkFeeBal();
std1.studentRecords();