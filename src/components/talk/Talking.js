import React from 'react'
import image from "../../images/talkingOn.svg"
import iconVoice from "../../images/icon-voice.svg"
import iconVoiceDark from "../../images/icon-voice-dark.svg"
import { Image } from "react-bootstrap"
import { useContext  } from 'react';
import { ThemeContext } from '../../App';
import { useState, useEffect, useRef, useMemo } from 'react';
import voice1 from "../../voices/1.mp3";
import voice2 from "../../voices/2.mp3";
import voice3 from "../../voices/3.mp3";
import voice4 from "../../voices/4.mp3";
import voice5 from "../../voices/5.mp3";
import voice6 from "../../voices/6.mp3";




function Talking ()
{
    const { theme } = useContext(ThemeContext);
      // Memoize audioFiles array since it's static and doesn't need to be recreated on every render
  const audioFiles = useMemo(() => [
    voice1,
    voice2,
    voice3,
    voice4,
    voice5,
    voice6
  ], []); // Empty dependency array means this memoization doesn't need to recalculate

  const [currentAudioIndex, setCurrentAudioIndex] = useState(-1);
  const currentAudioRef = useRef(null);

  const playNextAudio = () => {
    let nextIndex = currentAudioIndex + 1;
    if (nextIndex >= audioFiles.length) {
      nextIndex = 0; // Loop back to the first audio file
    }
    setCurrentAudioIndex(nextIndex);
  };

  useEffect(() => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
    }

    if (currentAudioIndex >= 0 && currentAudioIndex < audioFiles.length) {
      const audio = new Audio(audioFiles[currentAudioIndex]);
      audio.play();
      currentAudioRef.current = audio;
    }
  }, [currentAudioIndex, audioFiles]); // audioFiles is now memoized and stable across renders

  

    return(
        <div className="text-center py-5">
        <h1 className='tajawal-bold size-64' >SHAHADA</h1>
       <h6 className="poppins-medium pb-5 size-20">Repeat after me</h6>
       <Image src={image} style={{width:'230px' , height:"230px"}} alt="image"/>
        <div className='d-flex justify-content-center pt-5'>
            <Image src={theme==="light" ? iconVoice:iconVoiceDark} onClick={playNextAudio} id={theme}/>
        </div>
       
   </div>
    )
}
export default Talking