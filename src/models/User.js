class User {
    constructor(name, email, password, isAdmin = false) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}

module.exports = User;