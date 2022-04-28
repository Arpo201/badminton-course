import { useEffect, useState } from "react"

const ShowTime = () => {
    const [today, setToday] = useState(new Date());
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    useEffect(
        () => {
            const interval = setInterval(() => {
                setToday(new Date())
                setDate(today.getDate().toString().padStart(2, "0")+'/'+(today.getMonth()+1).toString().padStart(2, "0")+'/'+today.getFullYear())
                setTime(today.getHours().toString().padStart(2, "0") + ":" + today.getMinutes().toString().padStart(2, "0") + ":"+today.getSeconds().toString().padStart(2, "0"))
            }, 100)
            return () => clearInterval(interval);
        },
        [today]
    )
    return (
        <>
            <div style={{textAlign: "center"}}>
                <h3 style={{marginBottom: 0}}>{date}</h3>
                <h1 style={{marginTop: 0}}>{time}</h1>
            </div>

        </>
    )

}

export default ShowTime