import Logo from "./Logo"
import styles from "./Header.module.css"

const Header = () => {
	return <header className={styles.header}>
		<div className="container">
			<Logo className={styles.logo} />
			<div className={styles.links}>
				<a className={styles.link} href="#">О нас</a>
				<a className={styles.link} href="#">Услуги</a>
				<a className={styles.link} href="#">Проект</a>
				<a className={styles.link} href="#">Блог</a>
				<a className={styles.link} href="#">Контакты</a>
			</div>
			<div></div>
		</div>
	</header>
}

export default Header