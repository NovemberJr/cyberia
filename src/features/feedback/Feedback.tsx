import { useEffect } from "react"
import { FeedbackData, postFeedback } from "./feedbackAPI"
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik"
import styles from "./Feedback.module.css"
import pic from "./pic.svg"
import { validateEmail, validateMessage, validatePhone } from "./validator"

const Feedback = () => {
    const initialValues: FeedbackData = { email: '', phone: '', message: '' }

    const onSubmit = async (values: FeedbackData, { setSubmitting }: FormikHelpers<FeedbackData>) => {
        const resp = await postFeedback(values)
        setSubmitting(false)
    }

    return <div className={styles.feedback}>
        <div className="container">
            <div className={styles.flex}>
                <div className={styles.left}>
                    <img src={pic} />
                    <span className={`h1 ${styles.header}`}>Расскажите о&nbsp;вашем проекте</span>
                    <span className={`${styles.desc}`}>Поделитесь с нами информацией, чем мы можем быть полезны: реализовать идею или выделить разработчиков для ИТ-команды. Чем больше вы нам расскажете — тем продуктивнее будет дальнейшее обсуждение.</span>
                </div>
                <div className={styles.right}>
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                        {({ isSubmitting, errors, touched }) => (
                            <Form>
                                <div>
                                    <Field type="email" name="email" className={`${styles.input} ${touched.email && errors.email ? styles.error : ''} regular`} placeholder="E-mail" validate={validateEmail} />
                                    <ErrorMessage name="email" component="div" className={styles.error} />
                                </div>
                                <div>
                                    <Field type="text" name="phone" className={`${styles.input} ${touched.phone && errors.phone ? styles.error : ''} regular`} placeholder="Телефон" validate={validatePhone} />
                                    <ErrorMessage name="phone" component="div" className={styles.error} />
                                </div>
                                <div>
                                    <Field type="text" name="message" className={`${styles.input} ${touched.message && errors.message ? styles.error : ''} regular`} placeholder="Сообщение" validate={validateMessage} />
                                    <ErrorMessage name="message" component="div" className={styles.error} />
                                </div>
                                <div className={styles.buttonContainer}>
                                    <button type="submit" disabled={isSubmitting} className={styles.button}>ОТПРАВИТЬ</button>
                                    <span>Нажимая “Отправить”, Вы даете согласие на&nbsp;обработку персональных данных</span>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    </div>
}

export default Feedback
