import './App.css';
import TextBoxHighlightSingleTitle from './component/TextBoxHighlightSingleTitle';
import Logo from './assets/logo.png'

function App() {
  return (
    <div className="App">
      <img src={Logo} className="logo" />
      <TextBoxHighlightSingleTitle />
    </div>
  );
}

export default App;
