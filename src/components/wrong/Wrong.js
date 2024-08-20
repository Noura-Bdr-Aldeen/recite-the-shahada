import image from "../../images/wrongOn.svg"
import { Image } from "react-bootstrap"
function Wrong ()
{
 return(
    <div className="text-center py-5">
    <h1 className='tajawal-bold size-64' >SHAHADA</h1>
    <h6 className="poppins-medium pb-5 size-20">The H in Illaha Is Like The H In Horison</h6>
    <Image src={image} style={{width:'230px' , height:"230px"}} alt="image"/>
    <p className="poppins-medium pt-5 size-18">An-La-<span style={{color :"#E33E38"}}>ILLaha</span></p>

</div>
 )

}
export default Wrong