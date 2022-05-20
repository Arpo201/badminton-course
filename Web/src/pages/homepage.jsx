import Carousel from "../components/carousel"
import DetailsCard from "../components/detailcard"
import { CContainer } from '@coreui/react'

const ShowHomepage = () => {
    return (
        <>
        <div className='container-fluid' style={{backgroundColor:'hsl(62, 100%, 50%, 60%)',opacity:1, width:"100%"}}>
             <div className='container'>
                <CContainer fluid style={{backgroundColor:'hsl(180, 100%, 50%, 40%)'}} >
                  <Carousel/>
                </CContainer>
             </div>
        </div>     
            <div className='container'>
                <p>This is home</p>
                <DetailsCard/>
            </div>
            
            </>
    )
}

export default ShowHomepage