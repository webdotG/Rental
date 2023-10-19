import { useState } from "react"
import style from './form.module.scss'

//  type typeFormProps = {
//   title: string,
//   handleClick: ,
//  }
 
function From ({title, handleClick} ) {

  const [email, setEmail] =useState('')
  const [password, setPassword] = useState('')

  return (
    <form className={style.form}>
      <input
      className={style.input}
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="email"
      /> 
      <input
      className={style.input}
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="password"
      />   
      <button className={style.button}
      onClick={() => handleClick(email, password)}>
        {title}</button>
    </form>
  )
}

export default From