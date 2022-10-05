const uuid = require('uuid')

const usersDB = [{
    id: 1,
	first_name: 'Nilson',
	last_name: 'Diaz',
	email: 'noel200@gemail.com',
	password: 'admin',
	birthday: '2001/05/03'

}]

const getAllUsers = ()=>{
    return usersDB
}

const getAllUsersByID = (id)=>{
    const data = usersDB.find(user => user.id === id)
    return data
}



const createUser = (first_name, last_name, email, password, birthday) =>{
    const newUser = {
        id: uuid.v4(),
        first_name,
        last_name,
        email,
        password,
        birthday
    }
    usersDB.push(newUser)
    return newUser
}

module.exports = {
    getAllUsers,
    getAllUsersByID,
    createUser,
    usersDB
}