import { Form, Button } from 'react-bootstrap';
import axios from "axios"
import { createContext, useEffect, useState } from "react"

const ShowAccountpage = () => {
    const [name, setname] = useState("");
    const [surname, setsurname] = useState("")
    const [id, setid] = useState("")
    const [email, setemail] = useState("")
    useEffect(()=>{
        if(!localStorage.getItem("Token") == false){
            setname(localStorage.getItem("Name"))
            setsurname(localStorage.getItem("Surname"))
            setid(localStorage.getItem("ID"))
            setemail(localStorage.getItem("ID")+"@kmitl.ac.th")
        }else{
            alert("Please Login First")
        }
    },[])
    return (
        <Form className="container-fluid">
        <div className='container'  style={{width:'50%'}}>
            <div className="row" >
            <h2 className='mt-2'>รายละเอียด ส่วนตัว</h2>
            <div className="col-6">
                    <Form.Group className="mb-1" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="Name" placeholder={localStorage.getItem('Name')} value={name}/>
                        <Form.Text className="text-muted">
                         This is your name
                        </Form.Text>
                    </Form.Group>
                </div>
                <div className="col-6">
                <Form.Group className="mb-1" controlId="formBasicSurname">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="Name" placeholder={localStorage.getItem('Surname')} value={surname}/>
                        <Form.Text className="text-muted">
                         This is your Surname
                        </Form.Text>
                    </Form.Group>
                </div>
                <div className="col-12">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Your email" value={email}/>
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                </div>
               
                <div className="col-6">
                <Form.Group className="mb-1" controlId="formBasicStudent Id">
                        <Form.Label>Student Id</Form.Label>
                        <Form.Control type="Name" placeholder="Student Id" value={id}/>
                        <Form.Text className="text-muted">
                         This is your Student id
                        </Form.Text>
                    </Form.Group>
                </div>
            </div>
            <Button variant="primary" type="submit">
                      Save Edit
            </Button>
        </div>
       </Form>
    )
}

export default ShowAccountpage