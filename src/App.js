import { Button } from 'react-bootstrap';
import './App.css';
import NavApp from './components/navbar/NavApp';
import { createContext, useState } from 'react';
import Talking from './components/talk/Talking';
import Listening from './components/listening/Listening';
import GetCertificate from './components/getcertificate/GetCertificate';
import Wrong from './components/wrong/Wrong';
import TalkingEnglish from "./components/talk/TalkingEnglish"
export const ThemeContext = createContext(null)


function App() {
  //state to store theme
const [theme , setTheme] =useState("light")
const toggleTheme =() =>{
  setTheme((curr) =>(curr === "light" ? "dark" : "light"))
}
  return (
    <ThemeContext.Provider value={{theme ,toggleTheme}}>
    <div className="App" id={theme}>
      <NavApp/>
      {/* this button to switch between dark and light */}
      <Button onClick={toggleTheme} className='m-2'>{theme}</Button>
      <Talking/>
      <Listening/>
      <TalkingEnglish/>
      <Wrong/>
      <GetCertificate/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
