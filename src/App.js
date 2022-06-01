import Brand from "./components/brand/Brand";
import Cta from "./components/cta/Cta";
import Navbar from "./components/navbar/Navbar";
import Blog from "./containers/blog/Blog";
import Footer from "./containers/footer/Footer";
import Header from "./containers/header/Header";
import Posibility from "./containers/possibility/Posibility";
import Whatgpt3 from "./containers/whatgpt3/Whatgpt3";
// styles
import "./app.css"
import Features from "./containers/features/Features";

function App() {
  return (
    <div className="App">
      <div className="gradient">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <Whatgpt3/>
      <Features/>
      <Posibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
