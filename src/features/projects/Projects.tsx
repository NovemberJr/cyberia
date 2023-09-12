import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { initProjects, selectProjects, selectCategories } from "./projectsSlice"
import Item from "./ProjectItem"
import Feedback from "../feedback/Feedback"
import styles from "./Project.module.css"

const Projects = () => {
    const projectsItems = useAppSelector(selectProjects)
    const categories = useAppSelector(selectCategories)
    const dispatch = useAppDispatch()

    const [activeFilter, setActiveFilter] = useState<number | null>(null)
    const handleClick = (id: number) => {
      setActiveFilter(activeFilter !== id ? id : null)
    }

    useEffect(() => {
      dispatch(initProjects())
    }, [])

    return <div className={styles.projects}>
      <div className="container">
        <span className={styles.h1}>Проекты</span>
        <div className={styles.filters}>
          {categories.map((el, i) => <div
            key={el.id}
            className={`${styles.filter} ${el.id === activeFilter ? styles.active : ''}`}
            onClick={handleClick.bind(null, el.id)}
          >{el.name}</div>)}
        </div>
        <div className={styles.grid}>
          {projectsItems
            .filter((el) => activeFilter === null || el.categories.find((cat) => cat.id === activeFilter))
            .map((el, i) => <Item key={i} {...el}/>)}
        </div>
      </div>
      <Feedback />
    </div>
}

export default Projects
