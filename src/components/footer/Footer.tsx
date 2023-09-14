import logo from "./logo.svg"
import styles from "./Footer.module.css"

const Footer = () => {
	return <footer className={styles.footer}>
		<div className={`container ${styles.columns}`}>
			<div className={styles.description}>
				<img className={styles.logo} src={logo} alt="" />
				<p>Web and machine learning developing company</p>
			</div>
			<div>
				<p className={styles.line}><a href="#">+7 499 679 45 79</a></p>
				<p className={styles.line}><a href="#">hello@cyberia.ru</a></p>
				<p className={styles.line}>Аносова 3Б, оф. 1</p>
			</div>
			<div>
				<p className={styles.line}><a href="#">Главная</a></p>
				<p className={styles.line}><a href="#">Услуги</a></p>
				<p className={styles.line}><a href="#">Проекты</a></p>
			</div>
			<div>
				<p className={styles.line}><a href="#">Блог</a></p>
				<p className={styles.line}><a href="#">О нас</a></p>
				<p className={styles.line}><a href="#">Команда</a></p>
			</div>
			<div className={styles.rights}>
				2022, digital-агентство Cyberia<br/>
				Положение о защите персональных данных<br/>
				Политика в отношении обработки<br/>
				и защиты персональных данных<br/>
				Оферта оказания услуг
			</div>
		</div>
	</footer>
}

export default Footer