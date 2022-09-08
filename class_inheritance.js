/**
 * Class
 */
class Users{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
    getUserDetails(){
        return `
        username:${this.username}\n
        password: ${this.password}`;
    }
}


class Student extends Users{
    constructor(username, password, email, reg, course){
        super(username,password);
        this.email = email;
        this.reg = reg;
        this.course = course;
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
       // console.log(`${this.username}\`s  fee balance is : $${this.feeBal}`);
        return this.feeBal;
    }
    studentRecords(){
        const userdetails = super.getUserDetails();
        console.log(`
        ${userdetails}\n
        email: ${this.email}\n
        registration number: ${this.reg}\n
        Fee Balance: $${this.feeBal}\n
        Course: ${this.course} `);
    }
    static fetUsers(...std){
        for(let s of std){
            console.log(`
                Username: ${s.username}\n
                Course: ${s.course}\n
                Fee Balance: ${s.feeBal}`);
        }

    }
}

//Creating a new User

let cee = new Users('Cee', '@#$%');
cee.getUserDetails();


//Creating new student
let std1 = new Student('Cynthia', 'Cee@123$', 'cee@school.io', 'sst-123-001/2019', 'Tourism management');
let std2 = new Student('Fred', '@123Fredo$', 'fred@school.io', 'cit-123-001/2019', 'Hospitality management');
let std3 = new Student('Laster', 'thee@1&23$', 'laster@school.io', 'cit-221-057/2017', 'Computer Science');
std1.payFee(1050);
std1.checkFeeBal();

std2.payFee(80);
std2.checkFeeBal();

std3.payFee(20);
std3.checkFeeBal();
//std1.studentRecords();
Student.fetUsers(std1, std2, std3);