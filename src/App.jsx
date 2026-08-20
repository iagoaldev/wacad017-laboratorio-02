import MainContent from "./components/MainContent";
import logo from "./assets/images/logo.png";

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} alt="GitHub Actions" />
        </div>
        <h1>Learn &amp; Master GitHub Actions</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
