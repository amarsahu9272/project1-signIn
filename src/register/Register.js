import React from 'react'
import style from './Register.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, ThemeProvider, createTheme } from '@mui/system';

function Register() {
    return (
        <>
            <div className={style.outer}>
            <div><AccountCircleIcon color='primary' fontSize='large'/></div>         
                <input className={style.email} placeholder='EMAIL' /><br />
                <input className={style.user} placeholder='USERNAME' />
                <input className={style.pass} placeholder='PASSWORD' />
                <div className={style.btn}>
                    <button>Register</button>
                </div>
            </div>
        </>
    )
}

export default Register
