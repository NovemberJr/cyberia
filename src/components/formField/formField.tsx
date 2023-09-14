import { Field, ErrorMessage, FormikState } from "formik"
import { FeedbackData } from "../../features/feedback/feedbackAPI"
import styles from "./appField.module.css"

interface FieldProps {
	x: {
		placeholder: string
		validate: (value: string) => void
	}
}

const AppField = ({ touched, errors, x }: FormikState<FeedbackData> & FieldProps) => {
	return <div className={styles.field}>
		<Field
			type="email"
			name={name}
			className={`${styles.input} ${touched.email && errors.email ? styles.error : ''} regular`}
			placeholder={x.placeholder}
			validate={x.validate}
		/>
		<ErrorMessage
			name="email"
			component="div"
			className={styles.error}
		/>
		<div className={`${styles.label} ${touched.email ? styles.active : ''}`}>{x.placeholder}</div>
	</div>
}

export default AppField
