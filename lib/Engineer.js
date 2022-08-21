const Employee=require("./Employee")

class Engineer extends Employee{
constructor(name, id, email, gitUsername){
    super(name, id, email);
    this.gitUsername = gitUsername;
}
getgitUserName() {
    return this.gitUsername;
}
getRole() {
    return "Engineer";
}
}
module.exports = Engineer