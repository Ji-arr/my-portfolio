import "./App.css";
import { Banner, Certificate, Project } from "./components/pages";
import { NavBar, Footer } from "./components/assets";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Project />
      <Certificate />
      <Footer />
    </div>
  );
}

export default App;
