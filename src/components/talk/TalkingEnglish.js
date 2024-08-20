import image from "../../images/talkingOn.svg"
import { Image } from "react-bootstrap"
function TalkingEnglish ()
{
 return(
    <div className="text-center py-5">
    <h1 className='tajawal-bold size-64' >SHAHADA</h1>
    <h6 className="poppins-medium pb-5 size-20">repeat after me</h6>
    <Image src={image} style={{width:'230px' , height:"230px"}} alt="image"/>
    <p className="poppins-medium pt-5 size-18 mt-4">I Bear Witness That There Is No God But Allah</p>

</div>
 )

}
export default TalkingEnglish