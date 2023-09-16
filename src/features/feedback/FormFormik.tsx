import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik"
import { FeedbackData, postFeedback } from "./feedbackAPI"
import AppField from "../../components/formField/formField"
import { validateEmail, validateMessage, validatePhone } from "./validator"
import styles from "./Feedback.module.css"

const AppForm = () => {
	const initialValues: FeedbackData = { email: '', phone: '', message: '' }

    const onSubmit = async (values: FeedbackData, { setSubmitting }: FormikHelpers<FeedbackData>) => {
        const resp = await postFeedback(values)
        setSubmitting(false)
    }

	return <Formik initialValues={initialValues} onSubmit={onSubmit}>
		{(props) => (
			<Form>
				<AppField {...props} x={{ name: "email", placeholder: "E-mail", validate: validateEmail }} />
				<div className={styles.field}>
					<Field type="text" name="phone" className={`${styles.input} ${props.touched.phone && props.errors.phone ? styles.error : ''} regular`} placeholder="Телефон" validate={validatePhone} />
					<ErrorMessage name="phone" component="div" className={styles.error} />
					<div className={`${styles.label} ${props.touched.phone ? styles.active : ''}`}>Телефон</div>
				</div>
				{/*<div className={styles.field}>
                                    <Field type="email" name="email" className={`${styles.input} ${touched.email && errors.email ? styles.error : ''} regular`} placeholder="E-mail" validate={validateEmail} />
                                    <ErrorMessage name="email" component="div" className={styles.error} />
                                    <div className={`${styles.label} ${touched.email ? styles.active : ''}`}>E-mail</div>
                                </div>
                                <div className={styles.field}>
                                    <Field type="text" name="phone" className={`${styles.input} ${touched.phone && errors.phone ? styles.error : ''} regular`} placeholder="Телефон" validate={validatePhone} />
                                    <ErrorMessage name="phone" component="div" className={styles.error} />
                                    <div className={`${styles.label} ${touched.phone ? styles.active : ''}`}>Телефон</div>
                                </div>
                                <div className={styles.field}>
                                    <Field type="text" name="message" className={`${styles.input} ${touched.message && errors.message ? styles.error : ''} regular`} placeholder="Сообщение" validate={validateMessage} />
                                    <ErrorMessage name="message" component="div" className={styles.error} />
                                    <div className={`${styles.label} ${touched.email ? styles.active : ''}`}>Сообщение</div>
                                </div>*/}
				<div className={styles.buttonContainer}>
					<button type="submit" disabled={props.isSubmitting} className={styles.button}>ОТПРАВИТЬ</button>
					<span>Нажимая “Отправить”, Вы даете согласие на&nbsp;обработку персональных данных</span>
				</div>
			</Form>
		)}
	</Formik>
}

export default AppForm