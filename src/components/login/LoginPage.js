import React from 'react'
import LoginForm from './LoginForm'



const LoginPage = ({history}) => {
    const user = localStorage.getItem('user')
    if(user) history.push('/profile')
    return (
        <LoginForm history={history} />
    )
}

export default LoginPage