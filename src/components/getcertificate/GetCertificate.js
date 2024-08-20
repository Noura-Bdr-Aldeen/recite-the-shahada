import { useContext  } from 'react';
import { ThemeContext } from '../../App';
import image from  "../../images/successOn.svg"
import certificateLight from "../../images/certificate-light.png"
import certificateDark from "../../images/certificate-dark.png"

import {  Image } from "react-bootstrap"

function GetCertificate (){
    const { theme } = useContext(ThemeContext);
    return(
        <div className="text-center py-5">
        <h1 className='tajawal-bold size-64' >SHAHADA</h1>
        <h6 className="poppins-medium pb-5 size-20">Welcome To The New  Phase Of Your Life</h6>
        <Image src={image} style={{width:'230px' , height:"230px"}} alt="image"/>
        <div className='d-flex flex-column gap-4 align-items-center mt-4 pt-4'>     
        <button className='btn-certificate poppins-medium size-14 btn-style' id={theme === "light" ? "btn-certificate-light" :"btn-certificate-dark"}> 
        <Image src={theme === "light" ? certificateLight : certificateDark} style={{ width :"24px" , height :"24.94px"}} className='me-3'/> Your Certificate</button>
        <button className='btn-learn-more poppins-medium size-14 btn-style' id={theme}>Learn More
        </button>
        </div>

    </div>
    )
}
export default GetCertificate;