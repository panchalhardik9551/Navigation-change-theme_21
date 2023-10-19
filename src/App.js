import { createContext, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ThemeContext from './components/ThemeContext';

export const managetheme = createContext()

function App() {

  const [theme, setTheme] = useState('')
  const changetheme = (theme) => {
    return setTheme(theme)
  }

  return (
    <>
      <managetheme.Provider value={{ theme, changetheme }}>
        <Navbar />
        <ThemeContext />
      </managetheme.Provider>
    </>
  );
}

export default App;
