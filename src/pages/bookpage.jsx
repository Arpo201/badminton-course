import axios from "axios"
import { useEffect, useState } from "react"
import ShowCourtTable from "../components/courtTable"


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
        <>
            <p>This is Bookpage</p>
            <ShowCourtTable courtData={courtData}/>
        </>
    )
}

export default ShowBookpage