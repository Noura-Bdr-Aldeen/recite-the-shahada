import { Image } from "react-bootstrap"
import image from "../../images/listeningOn.svg"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useContext  } from 'react';
import { ThemeContext } from '../../App';
import iconVoice from "../../images/icon-voice.svg"
import iconVoiceDark from "../../images/icon-voice-dark.svg"

function Listening ()  {
    const { theme } = useContext(ThemeContext);
    const {
        transcript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
    
  return (
    <div className="text-center py-5">
        <h1 className='tajawal-bold size-64' >SHAHADA</h1>
        <h6 className="poppins-medium pb-5 size-20">Your first step on your path to Islam.</h6>
        <Image src={image} style={{width:'230px' , height:"230px"}} alt="image"/>
        <p className="poppins-medium pt-5 size-18">i’m listening</p>
        <div className='d-flex justify-content-center  pt-5'>
             {transcript && <p id={theme} className="poppins-medium size-18 px-4 pt-2">{transcript}</p>}
             <Image src={theme==="light" ? iconVoice:iconVoiceDark} onClick={SpeechRecognition.startListening} id={theme}/>
         </div>
    </div>
  )
}

export default Listening
