import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Studies from "./components/Studies";
import Invoriem from "./components/Invoriem";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <div className="icon">
          {" "}
          <img src="./src/assets/logo.svg" alt="Logo" />
        </div>
        <div className="buttons">
          <a className="first">About us</a>{" "}
          <button className="second">les`t Talk</button>
        </div>
      </header>
      <main className="desktop">
        <div className="div">
          <h2>We build dreams, not just walls</h2>
          <p>
            We are a team of passionate designers and developers who create
            beautiful, functional websites and applications.
          </p>

          <button className="button">let`s Talk </button>
        </div>
      </main>
      <div className="studies">
        <h2>Case Studies</h2>
        <p>
          We deliver a unique and truly bespoke approach to delivering
          international developments to market, with over 10 years success
          around the world.
        </p>
        <div className="img">
          <div className="page-1">
            <h1>France</h1>
          </div>
          <div className="page-2">
            <h1>Moroco</h1>
          </div>
          <div className="page-3">
            <h1>London</h1>
          </div>
        </div>
      </div>
      <div className="invoriem">
        <h2>We are Invoriem</h2>
        <p>We fulfill international property developments</p>
        <div className="img-2">
          <img src="./src/assets/Btn.svg" alt="" />
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <p className="first-text">Copyright © 2020 Invoriem</p>
          <p className="second-text">info@invoriem.com</p>
          <img src="./src/assets/instagram.svg" alt=""  />
          <img src="./src/assets/facebook.svg" alt="" />
          <img src="./src/assets/twitter.svg" alt="" />
          <img src="./src/assets/link.svg" alt="" />
        </div>
      </footer>
    </div>
  );
}

export default App;
