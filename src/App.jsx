import Navbar from "./components/layout/Navbar";
import Home from "./components/section/Home";
import About from "./components/section/About";
import Skills from "./components/section/Skills";
import Projects from "./components/section/Projects";
import Contact from "./components/section/Contact";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* Main content grows to push footer down */}
      <main className=" ">
      </main>
    </div>
  );
}
export default App;