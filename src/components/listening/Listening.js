import { Image } from "react-bootstrap"
import image from "../images/listening.png"

function Listening ()  {
  return (
    <div className="text-center py-5">
        <h1 className='tajawal-bold size-64' >SHAHADA</h1>
        <h6 className="poppins-medium pb-5 size-20">Your first step on your path to Islam.</h6>
        <Image src={image} style={{width:'230px' , height:"230px"}} alt="image"/>
        <p className="poppins-medium pt-5 size-18">i’m listening</p>
    </div>
  )
}

export default Listening
