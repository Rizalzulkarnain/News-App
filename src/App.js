import Categories from './components/Categories';

import { Provider } from 'react-redux';
import store from './redux/store';

import { GlobalStyle } from './styles';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Categories />
      </Provider>
    </>
  );
};

export default App;
