// import logo from "./logo.svg";
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import PageContent from "./PageContent/PageContent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
