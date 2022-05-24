import Carousel from "../components/carousel"
import DetailsCard from "../components/detailcard"
import Card from '@mui/material/Card';
const ShowHomepage = () => {
    return (
        <div style={{paddingBlockEnd:'5%'}}>
                 <div className='container mt-4'>
                      <Carousel/>
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