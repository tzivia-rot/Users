import axios from 'axios'
import { HDate } from '@hebcal/core';
class User {
    constructor(_id, name, email, phoneNumber, date) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.date = date;
    }
}

let users = [
    { _id: '1', name: 'aa', email: '1@gmail.com', phoneNumber: '0556781234' },
    { _id: '2', name: 'zz', email: '1@gmail.com', phoneNumber: '0556781234' },
    { _id: '3', name: 'xx', email: '1@gmail.com', phoneNumber: '0556781234' },
    { _id: '4', name: 'cc', email: '1@gmail.com', phoneNumber: '0556781234' },
    { _id: '5', name: 'vv', email: '1@gmail.com', phoneNumber: '0556781234' },
    { _id: '6', name: 'ww', email: '1@gmail.com', phoneNumber: '0556781234' },
    { _id: '7', name: 'ee', email: '1@gmail.com', phoneNumber: '0556781234' },
    { _id: '8', name: 'rr', email: '1@gmail.com', phoneNumber: '0556781234' },
    { _id: '9', name: 'yy', email: '1@gmail.com', phoneNumber: '0556781234' },
]
function AllExist(name, email, phoneNumber) {
    if (name == null || email == null || phoneNumber == null)
        return false;
    return true;
}

function ValidateName(name) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(name);
}

function ValidateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function ValidatePhoneNumber(PhoneNumber) {
    axios.get(
        `https://phonevalidation.abstractapi.com/v1/?api_key=76ce3eacb8ff4fd79e87075ba8322cee&phone=+972${PhoneNumber}`
    )
    .then(() => {
        return true;
    })
    .catch(() => {
        return false;
    });
    return true;
}

function Get() {
    return users;
}

function Add(user) {
    console.log(user)
    if(!ValidateName(user.name))
        throw new Error('Name not valid');
    if(!ValidatePhoneNumber(user.phoneNumber))
        throw new Error('Phone number not valid');
    if(!ValidateEmail(user.email))
        throw new Error('Email not valid');
    if(!AllExist(user.name,user.email,user.phoneNumber))
        throw new Error('One of the parameters is empty')
    const newUser = user;
    newUser._id = users.length + 1;
    users.push(newUser);
}

function Update(id, user) {
    const index = users.findIndex(user => user._id == id);
    users[index].name = user.name;
    users[index].email = user.email;
    users[index].phoneNumber = user.phoneNumber;
    users[index].date = user.date;
}

function Delete(id) {
    users = users.filter(user => user._id != id);
}

const UserModel = {
    Get,
    Add,
    Update,
    Delete,
}

export default UserModel
