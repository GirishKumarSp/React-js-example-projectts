import { useState } from 'react';
import './App.css';
import EmojiSearch from './components/EmojiResult';
import Heading from './components/Heading';
import SearchBar from './components/SearchBar';
import FilterEmoji from './components/FilterEmoji';
import Alert from './components/Alert';

function App() {
  const [filteredEmoji, setFilteredEmoji] = useState(FilterEmoji("", 20))
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const handleSearchChange = (event) => {
    setFilteredEmoji(FilterEmoji(event.target.value, 20))
  }

  return (
    <div className="App">
      <Alert alert={alert} />
      <Heading />
      <SearchBar textChange={handleSearchChange} />
      <EmojiSearch data={filteredEmoji} showAlert={showAlert} />
    </div>
  );
}

export default App;
