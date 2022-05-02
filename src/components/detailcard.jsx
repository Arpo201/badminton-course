import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import * as React from 'react';
const DetailsCard = () => {
    return(
        <Grid container spacing={2}>
            <Container>
                    <Grid item xs={12}>
                        <h1>กฎการใช้งานโรงยิมสนามแบต</h1>
                    </Grid>
                    <Grid item xs={6}>
                        <ul>
                          <li>ไม่สูบบุหรี่ภายในพื่นที่โรงยิม</li>
                          <li>เล่นกีฬากันด้วยฉันมิตรไม่ทะเลาะวิวาท</li>
                          <li>ไม่เอาของกินเข้ามากินในโรงยิม</li>
                          <li>รักษาความสะอาดด้วย</li>
                        </ul>
                    </Grid>
                    
            </Container>
        </Grid>
    )
}
export default DetailsCard;
