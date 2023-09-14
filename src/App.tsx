import logo from "./logo.svg"
import "./App.css"
import Projects from "./features/projects/Projects"
import Header from "./components/header/Header"
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App regular">
      <Header />
      <Breadcrumbs />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
