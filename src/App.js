import { Button } from 'react-bootstrap';
import './App.css';
import NavApp from './components/navbar/NavApp';
import { createContext, useState } from 'react';
import Listening from "../src/components/listening/Listening"
import Talk from './components/talk/Talk';
export const ThemeContext = createContext(null)


function App() {
const [theme , setTheme] =useState("light")
const toggleTheme =() =>{
  setTheme((curr) =>(curr === "light" ? "dark" : "light"))
}
  return (
    <ThemeContext.Provider value={{theme ,toggleTheme}}>
    <div className="App" id={theme}>
      <NavApp/>
      <Button onClick={toggleTheme}>{theme}</Button>
      <Listening/>
      <Talk/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
