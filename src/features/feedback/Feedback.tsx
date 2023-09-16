import Form from "./Form"
import styles from "./Feedback.module.css"
import pic from "./pic.svg"

const Feedback = () => {
        return <div className={styles.feedback}>
        <div className="container">
            <div className={styles.flex}>
                <div className={styles.left}>
                    <img src={pic} alt="" />
                    <span className={`h1 ${styles.header}`}>Расскажите о&nbsp;вашем проекте</span>
                    <span className={`${styles.desc}`}>Поделитесь с нами информацией, чем мы можем быть полезны: реализовать идею или выделить разработчиков для ИТ-команды. Чем больше вы нам расскажете — тем продуктивнее будет дальнейшее обсуждение.</span>
                </div>
                <div className={styles.right}>
                    <Form />
                </div>
            </div>
        </div>
    </div>
}

export default Feedback
