
const Validation = (values) => {
    let errors = {}
    
    if(!values.username.trim()) {
        errors.username = "Username required"
    }

    if(!values.password) {
        errors.password = "Password required"
    } else if (values.password.length <6) {
        errors.password = "Password must be at least 6 characters"
    }

    if(!values.confirm) {
        errors.confirm = "Password is required"
    } else if (values.password !== values.confirm) {
        errors.confirm = "Passswords do not match, plese try again"
    }

    return errors;
}

export default Validation;
