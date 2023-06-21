import axios from 'axios'
import { HDate } from '@hebcal/core';
const User = ({
    _id:
    {
        type: String,
        require: true
    },
    name:
    {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    date:{
        type:HDate,
        require:true
    }
})

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
function AllValid(name,email,phoneNumber){
    if(name===null||email===null||phoneNumber===null){
        return false;

    }
    if(ValidateName(name)==true&&ValidateEmail(email)==true&&ValidatePhoneNumber(phoneNumber)==true)
        return true;
    
    return false
}

function ValidateName(name) {
    const regex = /^[a-zA-Z]+$/;
    // console.log(regex.test(name));
    return regex.test(name);
}

function ValidateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // console.log(regex.test(email))
    return regex.test(email);
}

function ValidatePhoneNumber(PhoneNumber) {
    axios.get(`https://phonevalidation.abstractapi.com/v1/?api_key=76ce3eacb8ff4fd79e87075ba8322cee&phone=+972${PhoneNumber}`
    )
        .then(() => {
            // console.log('yes')
            return true;
        })
        .catch(() => {
            console.log('no')
            return false;
        });
    return true;
}

function Get() {
    return users;
}

function Add(user) {
    const newUser = user;
    newUser._id=users.length+1;
    users.push(newUser);
}

function Update(id, user) {
    const index = users.findIndex(user => user._id == id);
    users[index].name = user.name;
    users[index].email = user.email;
    users[index].phoneNumber = user.phoneNumber;
}

function Delete(id) {
    users = users.filter(user => user._id != id);
}

const UserModel = {
    AllValid,
    Get,
    Add,
    Update,
    Delete,
}

export default UserModel
