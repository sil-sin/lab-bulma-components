import 'bulma/css/bulma.css';
import React from 'react'
import CoolButton from '../coolbutton/CoolButton';
import FormField from '../formfield/FormField';
import Navbar from '../navbar/Navbar';
import './Signup.css'


const Signup = (props) => {
    console.log(props)
    return (
        <div>
            <Navbar />

            <FormField label='Name' type='text' placeholder="eg. Silvi" />
            <FormField label='E-mail' type='email' placeholder="eg. Sil@Sil.al" />
            <FormField label='Password' type='password' placeholder="**************" />
            <CoolButton>Sign up</CoolButton>
        </div>
    )
}

export default Signup