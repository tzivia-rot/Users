import axios from 'axios'

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

function NameValidation(name) {

}

function ValidEmail(email) {

}

function PhoneNumberValidation(PhoneNumber) {
    axios.get(`https://phonevalidation.abstractapi.com/v1/?api_key=76ce3eacb8ff4fd79e87075ba8322cee&phone=+972${PhoneNumber}`
    )
        .then(() => {
            return true;
        })
        .catch(() => {
            return false;
        });
}

function Get() {
    return users;
}

function Add(user) {
    const newUser = user;
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
    NameValidation,
    ValidEmail,
    PhoneNumberValidation,
    Get,
    Add,
    Update,
    Delete,
}

export default UserModel
