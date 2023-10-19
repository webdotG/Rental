import { useState } from "react"

//  type typeFormProps = {
//   title: string,
//   handleClick: ,
//  }
 
function From ({title, handleClick} ) {

  const [email, setEmail] =useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="email"
      /> 
      <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="password"
      />   
      <button onClick={() => handleClick(email, password)}>
        {title}</button>
    </>
  )
}

export default From