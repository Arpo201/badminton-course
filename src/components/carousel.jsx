import { CCarousel , CCarouselItem, CImage } from '@coreui/react';
import Container from '@mui/material/Container';
// import * as React from 'react';
function Carousel() {

    return(
        <Container>
            <CCarousel controls indicators>
              <CCarouselItem>
                <CImage className="d-block w-100" src="https://i.imgur.com/GLBz7Qg.jpg" alt="slide 1" width={"100%"} height={"100%"} />
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src="https://i.imgur.com/r9VjHHN.jpg" alt="slide 2" width={"100%"} height={"100%"} />
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src="https://i.imgur.com/7HQFwDb.jpg" alt="slide 3" width={"100%"} height={"100%"} />
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src="https://i.imgur.com/qm18qGh.jpg" alt="slide 4" width={"100%"} height={"100%"} />
              </CCarouselItem>
            </CCarousel>
        </Container>
        )
    }

export default Carousel;
