import { useId, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { FeedbackData, postFeedback } from "./feedbackAPI"
import { validateEmail, validatePhone, validateMessage } from "./validators"
import styles from "./Form.module.css"

type Status = "idle" | "submitting" | "success" | "error"

const Form = () => {
	const [ status, setStatus ] = useState<Status>("idle")
	const { handleSubmit, register, formState: { errors }, setError } = useForm<FeedbackData>()
	const onSubmit: SubmitHandler<FeedbackData> = async (values: FeedbackData) => {
		setStatus("submitting")
		const resp = await postFeedback(values)
		if (resp.status === 200) {
			setStatus("success")
			return
		}
		setStatus("error")
    }

	return <form onSubmit={handleSubmit(onSubmit)}>
		<Field placeholder="E-mail" register={register("email", validateEmail)} errors={errors.email} />
		<Field placeholder="Phone" register={register("phone", validatePhone)} errors={errors.phone} />
		<Field placeholder="Message" register={register("message", validateMessage)} errors={errors.message} />
		<div className={styles.buttonContainer}>
			<button type="submit" disabled={status === "submitting"} className={styles.button}>ОТПРАВИТЬ</button>
			<span>Нажимая “Отправить”, Вы даете согласие на&nbsp;обработку персональных данных</span>
		</div>
		<div>{
			status === "success" ? <span className={styles.success}>Ваша заявка успешно отправлена</span> :
			status === "error" ? <span className={styles.error}>Ошибка валидации на сервере</span> : <></>
		}</div>
	</form>
}

const Field = ({ placeholder, register, errors }: any) => {
	const id = useId()
	const [ isTouched, setIsTouched ] = useState<boolean>(false)

	const handleFocus = () => {
		if (!isTouched) setIsTouched(true)
	}

	return <div className={styles.field}>
		<label htmlFor={id} className={`${styles.label} ${isTouched ? styles.active : ''}`}>{placeholder}</label>
		<input
			id={id}
			placeholder={isTouched ? '' : placeholder}
			onFocus={handleFocus}
			className={`${styles.input} ${errors ? styles.error : ''}`}
			{...register}
			/*aria-invalid={errors ? "true" : "false"}*/
 		/>
		<div className={styles.errorMessage}>{
			errors ? errors.message : ''
		}</div>
	</div>
}

export default Form