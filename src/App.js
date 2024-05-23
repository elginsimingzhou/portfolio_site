import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";



function App() {
  return (
    <body className="bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 m-0">
      <Header />
      <main className="flex flex-col items-center">
        <Home />
        <div className="flex flex-col items-center px-4">
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </div>
      </main>
    </body>
  );
}

export default App;
