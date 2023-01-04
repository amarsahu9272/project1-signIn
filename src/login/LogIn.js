import React from 'react'
import { Link } from 'react-router-dom'
import style from './LogIn.module.css'
import PersonIcon from '@mui/icons-material/Person';

function LogIn() {
    return (
        <>
            <div className={style.outer}>
                <input className={style.user} placeholder='USERNAME' ></input><br/>
                <input className={style.pass} placeholder='PASSWORD' />
                <div className={style.btn}>
                    <p>Don't have an account?<br/><Link to='/register/Register'>Register</Link></p>
                    <button>Login</button>
                </div>
            </div>
        </>
    )
}

export default LogIn
