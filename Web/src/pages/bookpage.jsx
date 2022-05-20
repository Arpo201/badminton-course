import axios from "axios"
import { useEffect, useState } from "react"
import ShowCourtTable from "../components/courtTable"
import ShowTime from "../components/time"
import Container from '@mui/material/Container';
import gql from 'graphql-tag'
import { print } from 'graphql'

// const booking = gql`
// mutation editstate($editstateId: Int!, $index: Int!, $status: Int!, $detail: court){
//   editstate(id: $editstateId, index: $index, status: $status, detail: $detail) {
//     id,
//     name,
//     state {
//       detail {
//         stuInfo1,
//         stuInfo2,
//         stuInfo3,
//         stuInfo4
//       },
//       status,
//       index
//     }
//   }
// }
// `

const ShowBookpage = () => {
    // #################### API ######################
    // <button onClick={()=>{
    //     axios.post("http://localhost:4000/graphql", {
    //       query : print(booking),
    //       variables:{
    //         editstateId: 1,//ตําแหน่งของสนาม
    //         index: 0,//ตําแหน่งของห้วงเวลา
    //         status: 1,
    //         detail: {
    //           stuInfo1: "วัง",
    //           stuInfo2: "ยม",
    //           stuInfo3: "น่าน",
    //           stuInfo4: "ปิง"
  
    //       }
    //     }
    //   }).then((res)=>{
    //     console.log("Ok")
    //   })
    // }}>Booking</button>
    // #################################################

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