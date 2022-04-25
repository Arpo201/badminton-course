import axios from "axios"
import { useEffect, useState } from "react"
import ShowCourtTable from "../components/courtTable"


const ShowBookpage = () => {
    const [courtData, setCourtData] = useState([])
    const [today, setToday] = useState(new Date());
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    useEffect(
        () => {
            const interval = setInterval(() => {
                axios.get("court.json").then((res) => setCourtData(res.data))
                setToday(new Date())
                setDate(today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate())
                setTime(today.getHours().toString().padStart(2, "0") + ":" + today.getMinutes().toString().padStart(2, "0") + ":"+today.getSeconds().toString().padStart(2, "0"))
            }, 500)
            return () => clearInterval(interval);
        },
        [today, courtData],
    )

    if (courtData.length === 0) return <div></div>
    return (
        <>  
            <h1>{time}</h1>
            <p>This is Bookpage</p>
            <ShowCourtTable courtData={courtData}/>
        </>
    )
}

export default ShowBookpage