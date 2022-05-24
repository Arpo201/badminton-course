import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import NoFoodIcon from '@mui/icons-material/NoFood';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import * as React from 'react';
const DetailsCard = () => {
    return(
        <Grid container >
            <Container >
                    <Grid item xs={12}>
                        <h1>กฎการใช้งานโรงยิมสนามแบดมินตัน</h1>
                    </Grid>
                    <hr style={{width:"80%",height:"2%", marginLeft:0}}></hr>
                    <Grid item xs={6}>
                        <ul style={{listStyleType:'none',fontSize:25}}>
                          <li >
                            <SmokeFreeIcon fontSize='large' className='me-3'/>
                              ไม่สูบบุหรี่ภายในพื่นที่โรงยิม
                              </li>
                          <li>
                            <SentimentVerySatisfiedIcon fontSize='large' className='me-3'/> 
                            
                              เล่นกีฬากันด้วยฉันมิตรไม่ทะเลาะวิวาท
                              </li>
                          <li>
                              <NoFoodIcon fontSize='large' className='me-3'/>
                              ไม่เอาของกินเข้ามากินในโรงยิม
                              </li>
                          <li>
                              <CleaningServicesIcon fontSize='large' className='me-3'/>
                              รักษาความสะอาดด้วย
                              </li>
                        </ul>
                    </Grid>             
            </Container>
        </Grid>
    )
}
export default DetailsCard;
