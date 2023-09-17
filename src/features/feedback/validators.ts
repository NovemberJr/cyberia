export const validateEmail = {
    required: 'Field is required',
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Value is invalid'
    }
}

export const validatePhone = {
    required: 'Field is required',
    pattern: {
        value: /\+/,
        message: 'Value is invalid'
    }
}

export const validateMessage = {
    required: 'Field is required'
}