import { useState } from 'react'

const useLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
	const [isPassword, setIsPassword] = useState(true)

  const handleEmailChange = (text) => {
    setEmail(text)
  }

  const handlePasswordChange = (text) => {
    setPassword(text)
  }

	const handleIsPasswordChange = () => {
    setIsPassword(!isPassword)
  }

  return {
    email,
    password,
		isPassword,
    handleEmailChange,
    handlePasswordChange,
		handleIsPasswordChange
  }
}

export default useLogin
