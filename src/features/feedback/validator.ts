import { FeedbackData } from "./feedbackAPI"

export const validateEmail = (email: string) => {
    if (!email) {
        return 'Обязательно'
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
        return 'Неверный e-mail'
    }
}

export const validatePhone = (phone: string) => {
    if (!phone) {
        return 'Обязательно'
    }
}

export const validateMessage = (message: string) => {
    if (!message) {
        return 'Обязательно'
    }
}

/*
export const validateEmail = (email: string, errors: Partial<FeedbackData>) => {
    if (!email) {
        errors.email = 'Обязательно'
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
        errors.email = 'Неверный e-mail'
    }
}

export const validatePhone = (phone: string, errors: Partial<FeedbackData>) => {
    if (!phone) {
        errors.phone = 'Обязательно'
    }
}

export const validateMessage = (message: string, errors: Partial<FeedbackData>) => {
    if (!message) {
        errors.message = 'Обязательно'
    }
}
*/
/*if (!values.email) {
    errors.email = 'Обязательно'
} else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
) {
    errors.email = 'Неверный e-mail'
}*/