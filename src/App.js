import Routes from './routes';
import GlobalStyle from './styles/globalStyle';
import Navbar from './components/Navbar';

import store from './store';

import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes />
        <GlobalStyle />
      </Provider>
    </>
  );
}

export default App;
