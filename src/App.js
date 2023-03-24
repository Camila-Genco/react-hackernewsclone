import './App.css';
import SingleNews from './components/SingleNews';
import SearchForm from './components/SearchForm';
import Buttons from './components/Buttons';
import "./components/news.css"
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
      <div className='header'>
      <h1>Hacker News</h1>
      </div>
      <SearchForm/>
      <Buttons/>
      <SingleNews/>
      </Provider>
    </div>
  );
}

export default App;
