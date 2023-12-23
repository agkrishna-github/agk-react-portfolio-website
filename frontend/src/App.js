import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
