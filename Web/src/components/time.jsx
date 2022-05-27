import { useEffect, useState } from "react";
import axios from "axios";
import gql from 'graphql-tag'
import {print} from 'graphql'
import { API_URL } from "../variable";

const ShowTime = () => {
  const [today, setToday] = useState(new Date());
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const resetallstate = gql`
    mutation resetallstate(
      $detail: court
    ) {
      resetallstate(
        detail: $detail
      ) {
        state {
          detail {
            stuInfo1
            stuInfo2
            stuInfo3
            stuInfo4
          }
        }
      }
    }
  `;
  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date());
      setDate(
        today.getDate().toString().padStart(2, "0") +
          "/" +
          (today.getMonth() + 1).toString().padStart(2, "0") +
          "/" +
          today.getFullYear()
      );
      setTime(
        today.getHours().toString().padStart(2, "0") +
          ":" +
          today.getMinutes().toString().padStart(2, "0") +
          ":" +
          today.getSeconds().toString().padStart(2, "0")
      );
    }, 100);
    return () => clearInterval(interval);
  }, [today]);
  if (time == "00:00:00") {
    axios.post(API_URL, {
        query: print(resetallstate),
        variables:{
            detail: {
                stuInfo1: "",
                stuInfo2: "",
                stuInfo3: "",
                stuInfo4: ""
    
            }
        }
    }).then((res)=>{
        console.log("clear all state")
    });
  }
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3 style={{ marginBottom: 0 }}>{date}</h3>
        <h1 style={{ marginTop: 0 }}>{time}</h1>
      </div>
    </>
  );
};

export default ShowTime;
