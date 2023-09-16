import { useState } from "react"
import { useForm } from "react-hook-form"
import { FeedbackData, postFeedback } from "./feedbackAPI"
import styles from "./appField.module.css"

const Form = () => {
	const { handleSubmit } = useForm()

	const onSubmit = async (values: any) => {
		console.log(values)
        //const resp = await postFeedback(values)
        //setSubmitting(false)
    } 

	return <form onSubmit={handleSubmit(onSubmit)}>
		<Field />
	</form>
}

const Field = () => {
	const placeholder = 'Placeholder'

	const [ value, setValue ] = useState<string>('')
	const [ isFocused, setIsFocused ] = useState<boolean>(false)
	const [ isTouched, setIsTouched ] = useState<boolean>(false)


	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const handleFocus = () => {
		setIsFocused(true)
	}

	const handleBlur = () => {
		setIsFocused(false)
		if (!isTouched) setIsTouched(true)
		validate(value)
	}

	return <div className={styles.field}>
		<label className={`${styles.label}`}>{placeholder}</label>
		<input name value onchange onblur/>
	</div>
}

export default Form