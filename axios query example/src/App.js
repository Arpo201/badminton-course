import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import gql from 'graphql-tag'
import {print} from 'graphql'

function App() {
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
    </div>
  );
}

export default App;
