exports.user = function (phoneNumber, firstName, lastName, password="") {
    this.phoneNumber = phoneNumber;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
}
