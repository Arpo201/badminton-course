import axios from "axios"
import { useEffect, useState } from "react"
import ShowCourtTable from "../components/courtTable"
import ShowTime from "../components/time"
import Container from '@mui/material/Container';


const ShowBookpage = () => {
    const [courtData, setCourtData] = useState([])
    useEffect(
        () => {
            axios.get("court.json").then((res) => setCourtData(res.data))
        },
        [],
    )

    if (courtData.length === 0) return <div></div>
    return (
        <Container style={{marginTop: 30}}>  
            <ShowTime/>
            <ShowCourtTable courtData={courtData}/>
        </Container>
    )
}

export default ShowBookpage