import styles from "./Breadcrumbs.module.css"

const AppBreadcrumbs = () => {
	return <div className={`${styles.breadcrumbs} container`}>
		<a href="#" className={styles.link}>Главная</a><span> / </span>
		<span className={styles.current}>Проекты</span>
	</div>
}

export default AppBreadcrumbs
