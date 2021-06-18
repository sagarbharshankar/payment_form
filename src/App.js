import './App.css';
import Container from './Container';
import cardHolderConfig from './formConfigs/CardHolder';

function App() {
  return (
    <div className="App">
      <Container cardHolderData={cardHolderConfig} />
    </div>
  );
}

export default App;
