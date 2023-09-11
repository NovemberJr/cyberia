import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { getProjects, selectProjects, selectCategories } from "./projectsSlice"
import Item from "./ProjectItem"
import styles from "./Project.module.css"

const Projects = () => {
    const projectsItems = useAppSelector(selectProjects)
    const categories = useAppSelector(selectCategories)
    const dispatch = useAppDispatch()

    useEffect(() => {
      dispatch(getProjects())
    }, [getProjects])

    return <div>
      <h2>Проекты</h2>
      <div>
        {categories.map((el, i) => <p key={i}>{el.name}</p>)}
      </div>
      <div className={styles.grid}>
    	  {projectsItems.map((el, i) => <Item key={i} {...el}/>)}
      </div>
    </div>
}

export default Projects
