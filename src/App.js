import Header from "./Components/Header/Header";
import InfoBlock from "./Components/infoBlock/InfoBlock";
import Bundles from "./Components/Bundles/Bundles";
import "./Styles/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container">
      <Header />
      <InfoBlock />
      <Bundles />
    </div>
  );
}

export default App;
