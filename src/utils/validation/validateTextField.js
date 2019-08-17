const validateTextField = (val, rules, connectedValue) => {
    let isValid = true;
    for (let rule in rules) {
        switch (rule) {
            case 'isEmail':
                isValid = isValid && emailValidator(val);
                break;
            case 'minLength':
                isValid = isValid && minLengthValidator(val, rules[rule])
                break;
            case 'equalTo':
                //connectedValue fetches the rule from another input control
                isValid = isValid && equalToValidator(val, connectedValue[rule])
                break;
            default:
                isValid = true;
        }
    }
    return isValid;
}

//regular expression checks for majority of email formats
const emailValidator = val => {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        val
    );
}

const minLengthValidator = (val, minLength) => {
    return val.length >= minLength;
}

const equalToValidator = (val, checkValue) => {
    return val === checkValue;
}

export default validateTextField;