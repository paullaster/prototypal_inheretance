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
    studentRecords(){
        const userdetails = super.getUserDetails();
        this.feeBal = this.registerStudent();
        console.log(`${userdetails}, email: ${this.email},
         registration number: ${this.reg}  Fee Balance: $${this.feeBal}`);
    }
    checkFeeBal(){
        console.log(`${this.username}\`s  fee balance is : $${this.feeBal}`);
    }
    payFee(amount){
        this.feePaid = amount;
        this.feeBal = this.totalFee - this.feePaid;
    }
}

//Creating a new User

let cee = new Users('Cee', '@#$%');
cee.getUserDetails();


//Creating new student
let std1 = new Student('Cynthia', 'Cee@123$', 'cee@school.io', 'sst-123-001/2019');
std1.studentRecords();
std1.checkFeeBal();