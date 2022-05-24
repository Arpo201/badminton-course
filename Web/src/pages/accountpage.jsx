import { Form, Button } from 'react-bootstrap';
import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
const ShowAccountpage = () => {
    let navigate = useNavigate();
    const [name, setname] = useState("");
    const [surname, setsurname] = useState("")
    const [id, setid] = useState("")
    const [email, setemail] = useState("")
    useEffect(()=>{
        if(!localStorage.getItem("Token") === false){
            setname(localStorage.getItem("Name"))
            setsurname(localStorage.getItem("Surname"))
            setid(localStorage.getItem("ID"))
            setemail(localStorage.getItem("ID")+"@kmitl.ac.th")
        }else{
            alert("Please Login First")
            navigate("/")
        }
    },[])
    return (
        <Form className="container-fluid">
            <div className='container'  style={{width:'50%'}}>
            <Card body className='m-3 p-5'>
                <div className="row" >
                <h2 className='mt-2'>รายละเอียดส่วนตัว</h2>
                <div className="col-6">
                        <Form.Group className="mb-1" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="Name" value={name} onChange={(e) => setname(e.target.value)}/>
                            <Form.Text className="text-muted">
                             This is your name
                            </Form.Text>
                        </Form.Group>
                    </div>
                    <div className="col-6">
                    <Form.Group className="mb-1" controlId="formBasicSurname">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="Name"  value={surname}  onChange={(e) => setsurname(e.target.value)}/>
                            <Form.Text className="text-muted">
                             This is your Surname
                            </Form.Text>
                        </Form.Group>
                    </div>
                    <div className="col-12">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setemail(e.target.value)}/>
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </div>

                    <div className="col-6">
                    <Form.Group className="mb-1" controlId="formBasicStudent Id">
                            <Form.Label>Student Id</Form.Label>
                            <Form.Control type="Name" value={id}/>
                            <Form.Text className="text-muted">
                             This is your Student id
                            </Form.Text>
                        </Form.Group>
                    </div>
                </div>
                <Button variant="primary" type="submit">
                          Save Edit
                </Button>
                </Card>
            </div>
       </Form>
    )
}

export default ShowAccountpage