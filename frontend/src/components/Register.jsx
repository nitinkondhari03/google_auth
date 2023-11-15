const Register=()=>{
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
      return(
            <>
           <form onSubmit={(e)=>handlelogin(e)}>
        <label>UserName</label>
        <input onChange={(e)=>setuserName(e.target.value)} placeholder="Enter Your UserName"/>
        <label>Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password"/>
        <button type="submit">Register</button>
      </form>

            </>
      )
}
export default Register