const getFirstName = (fullName) =>  {
    return fullName.split(' ')[0]
}
const isValidPassword = (pass) => {
    return pass.length >=8 && pass.toLowerCase().includes('password')
}

export {getFirstName, isValidPassword}