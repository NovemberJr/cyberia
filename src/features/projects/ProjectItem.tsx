import { Project } from "./projectsAPI"
import styles from "./Project.module.css"
import icon from "./icon.svg"

const ProjectItem = (props: Project) => {
    return <div className={styles.box} style={{backgroundImage: `url(${props.image_dark})`}}>
        <div className={styles.gradient}></div>
        <div className={styles.content}>
            <img className={styles.icon} src={icon} alt="" />
            <span className={`${styles.title} h2`}>{props.title}</span>
            <span className={`${styles.description} regular`}>{props.description}</span>
        </div>
    </div>
}

export default ProjectItem
