import "./styles/output.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Gallery from "./components/Gallery";


function App() {
  return (
    <div>
      <Navbar />
      <Content/>
      <Gallery/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
 