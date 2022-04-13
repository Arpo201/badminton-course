import axios from "axios"
import { useEffect, useState } from "react"
import ShowCourtTable from "../components/courtTable"


const ShowBookpage = () => {
    // const [courtData, setCourtData] = useState([])
    useEffect(
        () => {
            axios.get("../court.json").then((res) => console.log(res.data))
            console.log("Hello")
        },
        [],
    )
    return (
        <>
            <p>This is Bookpage</p>
            <ShowCourtTable/>
        </>
    )
}

export default ShowBookpage