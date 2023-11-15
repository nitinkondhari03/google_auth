"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios"
import { useState } from "react";
export default function Login() {
  const [userName,setuserName]=useState()
  const [password,setPassword]=useState()

  const handlelogin = async(event) => {
    event.preventDefault()
    let obj={
      username:userName,
      password:password
    }
    try {
      let {data}=await axios.post("http://localhost:8080/api/login",obj)
      localStorage.setItem("token",(data.token))
console.log(data.token)
      alert("yes")
    } catch (error) {
      
    }
  };
  return (
    <div>
      <form onSubmit={(e)=>handlelogin(e)}>
        <label>UserName</label>
        <input onChange={(e)=>setuserName(e.target.value)} placeholder="Enter Your UserName"/>
        <label>Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password"/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
