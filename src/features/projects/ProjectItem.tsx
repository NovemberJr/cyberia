import { Project } from "./projectsAPI"
import styles from "./Project.module.css"

const ProjectItem = (props: Project) => {
    return <div className={styles.box} style={{backgroundImage: `url(${props.image_dark})`}}>
        <p>{props.title}</p>
        <p>{props.description}</p>
    </div>
}

export default ProjectItem
