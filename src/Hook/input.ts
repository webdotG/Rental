import { ChangeEvent, useState } from 'react'

type typeInputReturn = {
  value: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function useInput (initialValue = ''): typeInputReturn {

  const [value, setValue] = useState(initialValue)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return {
    value,
    onChange,
  }
}

export default useInput