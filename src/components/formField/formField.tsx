import { useState } from "react"
import { Field, ErrorMessage, FormikState } from "formik"
import { FeedbackData } from "../../features/feedback/feedbackAPI"
import styles from "./appField.module.css"

interface FieldProps {
	x: {
		name: string
		placeholder: string
		validate: (value: string) => void
	}
}

const AppField = ({ touched, errors, x }: FormikState<FeedbackData> & FieldProps) => {
	const { name, placeholder, validate } = x
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
		<label className={`${styles.label} ${isFocused || isTouched || value.length > 0 ? styles.active : ''}`}>{placeholder}</label>
		<input
			type="email"
			name={name}
			className={`${styles.input} ${touched.email && errors.email ? styles.error : ''} regular`}
			placeholder={isFocused || isTouched ? '' : placeholder}
			/*validate={validate}*/
			value={value}
			onChange={handleChange}
			onFocus={handleFocus}
			onBlur={handleBlur}
		/>
		<ErrorMessage
			name="email"
			component="div"
			className={styles.error}
		/>
	</div>
}

export default AppField
