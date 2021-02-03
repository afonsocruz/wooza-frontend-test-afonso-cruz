import Routes from './routes';
import GlobalStyle from './styles/globalStyle';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
