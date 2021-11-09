const employee = require('../lib/employee.js')

class intern extends employee {
    constructor(name,id,email,school){
        super(id,name,email)
        this.school = school
    }
    getSchool(){
        return this.school
    };
    getRole(){
        return 'Intern'
    };
}
module.exports = intern;