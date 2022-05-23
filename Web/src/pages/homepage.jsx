import Carousel from "../components/carousel"
import DetailsCard from "../components/detailcard"
import { CContainer } from '@coreui/react'
import Card from '@mui/material/Card';
const ShowHomepage = () => {
    return (
        <div style={{paddingBlockEnd:'5.9%'}}>
            <div className='container-fluid ' style={{opacity:1}}>
                 <div className='container '>
                    <CContainer fluid >
                      <Carousel/>
                    </CContainer>
                 </div>
            </div>     
                <div className='container pt-5'>
                    <Card >
                        <DetailsCard/>
                    </Card>
                </div>

        </div>
    )
}

export default ShowHomepage