import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { initProjects, selectProjects, selectCategories } from "./feedbackSlice"
import { Formik, Form, Field, ErrorMessage } from "formik"
import styles from "./Feedback.module.css"

const Feedback = () => {
    return <div className={styles.feedback}>
        <div className="container">
            <p>Расскажите о вашем проекте</p>
            <p>Поделитесь с нами информацией, чем мы можем быть полезны: реализовать идею или выделить разработчиков для ИТ-команды. Чем больше вы нам расскажете — тем продуктивнее будет дальнейшее обсуждение.</p>
            <Formik
                initialValues={{ email: '', phone: '', message: '' }}
                /*validate={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  return errors;
                }}*/
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div>
                            <Field type="text" name="phone" />
                            <ErrorMessage name="phone" component="div" />
                        </div>
                        <div>
                            <Field type="text" name="message" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                        <span>Нажимая “Отправить”, Вы даете согласие на обработку персональных данных</span>
                    </Form>
                )}
            </Formik>

        </div>
    </div>
}

export default Feedback
