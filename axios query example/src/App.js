import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import gql from 'graphql-tag'
import {print} from 'graphql'

function App() {

  const booking = gql`
  mutation editstate($editstateId: Int!, $index: Int!, $status: Int!, $detail: court){
    editstate(id: $editstateId, index: $index, status: $status, detail: $detail) {
      id,
      name,
      state {
        detail {
          stuInfo1,
          stuInfo2,
          stuInfo3,
          stuInfo4
        },
        status,
        index
      }
    }
  }
  `

  const Regis = gql`
  mutation register($email: String!, $password: String!, $name: String!, $surname: String!, $stuId: String!){
    register(email: $email, password: $password, name: $name, surname: $surname, stu_id: $stuId,) {
      email,
      password,
      name,
      surname,
      stu_id,
      role,
      token
    }
  }
  `

  const Login = gql`
  mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
      email,
      password,
      role,
      token
    }
  }
  `
  const ADD = gql`
  mutation addUsers($id: Int!, $name: String!, $state: [Input]){
    addUsers(id: $id, name: $name, state: $state){
      id,
      name,
      state{
        detail{
          stuInfo1,
          stuInfo2,
          stuInfo3,
          stuInfo4
        },
        status
      }
    }
  }
  `
  const Fetch = gql`
  query{
    courts{
      id,
      name,
      state{
        detail{
          stuInfo1,
          stuInfo2,
          stuInfo3,
          stuInfo4
        },
        status,
        index
      }
    }
  }
  `

  const Edit = gql`
  mutation editUsers($id: Int!, $name: String!, $state: [Input]){
    editUsers(id: $id, name: $name, state: $state){
      id,
      name,
      state{
        detail{
          stuInfo1,
          stuInfo2,
          stuInfo3,
          stuInfo4
        },
        status
      }
    }
  }
  `

  return (
    <div>
      <button onClick={()=>{
        axios.post("http://localhost:4000/graphql",{
          query: print(ADD),
          variables:{
            id: 555,
            name: "Super",
            state:[{
              detail:{
                stuInfo1: "555",
                stuInfo2: "666",
                stuInfo3: "777",
                stuInfo4: "888"
              },
              status: 0
            }]
          }
        }).then((res)=>{
          console.log(res.data)
        })
      }}>Add</button>
      <button onClick={()=>{
        axios.post("http://localhost:4000/graphql", {
          query : print(Edit),
          variables:{
            id: 555,
            name: "หีแตด",
            state:[{
              detail:{
                stuInfo1: "ควย",
                stuInfo2: "หี",
                stuInfo3: "เม็ดแตด",
                stuInfo4: "รูตูด"
              },
              status: 1
            }]
          }
        }).then((res)=>{
          console.log(res.data)
        })
      }}>Edit</button>
      <button onClick={()=>{
        axios.post("http://localhost:4000/graphql", {
          query : print(Fetch)
        }).then((res)=>{
          console.log(res.data)
        })
      }}>Fetch</button>
      <button onClick={()=>{
        axios.post("http://localhost:4000/graphql", {
          query : print(Login),
          variables:{
            email : "62070180@kmitl.ac.th",
            password : "555123"
          }
        }).then((res)=>{
          console.log(res.data)
        })
      }}>Login</button>
      <button onClick={()=>{
        axios.post("http://localhost:4000/graphql", {
          query : print(Regis),
          variables:{
            email: "62070199@kmitl.ac.th",
            password: "555123",  
            name: "Amp",
            surname: "Mansoi",  
            stuId: "62070199",
            role: null,
            token: null
          }
        }).then((res)=>{
          console.log(res.data)
        })
      }}>Register</button>
      <button onClick={()=>{
        axios.post("http://localhost:4000/graphql", {
          query : print(booking),
          variables:{
            editstateId: 1,//ตําแหน่งของสนาม
            index: 0,//ตําแหน่งของห้วงเวลา
            status: 1,
            detail: {
              stuInfo1: "วัง",
              stuInfo2: "ยม",
              stuInfo3: "น่าน",
              stuInfo4: "ปิง"
  
          }
        }
      }).then((res)=>{
        console.log("Ok")
      })
    }}>Booking</button>
    </div>
  );
}

export default App;
