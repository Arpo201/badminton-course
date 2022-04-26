import { useEffect, useState } from "react"

const ShowTime = () => {
    const [today, setToday] = useState(new Date());
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    useEffect(
        () => {
            const interval = setInterval(() => {
                setToday(new Date())
                setDate(today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate())
                setTime(today.getHours().toString().padStart(2, "0") + ":" + today.getMinutes().toString().padStart(2, "0") + ":"+today.getSeconds().toString().padStart(2, "0"))
            }, 100)
            return () => clearInterval(interval);
        },
        [today]
    )
    return (
        <>
            <h1>{time}</h1>
        </>
    )

}

export default ShowTime