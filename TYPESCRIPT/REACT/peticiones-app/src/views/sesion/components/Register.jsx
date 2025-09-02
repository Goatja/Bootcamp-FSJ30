import { useState } from "react"
import {useForm} from 'react-hook-form'
import *  as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../../repositories/firebase/config";

const schema = yup.object({
    email:yup.string('Please enter only text')
    .email('Please enter a valid email')
    .required('Must enter something'),

    password: yup.string().required().min(8, 'Please enter a min 8 chars')
    .matches(/[A-Z]/, 'Must have A and Z')
    .matches(/[a-z]/)
    .matches(/[0-9]/)
    .matches(/[!@#$%&*()?.,_:<>"/]/),
    confirm_password: yup.string().oneOf([yup.ref("password"),null], 'Check out password') 
});

export const Register = () => {

  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmitForm = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
      alert('User registered successfully!')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    console.log(data);
  }

  return (
    <div>
        Register

        <form onSubmit={handleSubmit(onSubmitForm)}>
            <label htmlFor=""  className="form-label">Email:</label>
            <input type="text" className="form-control" {...register("email")}/>
            <p>{errors.email && errors.email.message}</p>
            <label htmlFor="" className="form-label">Password:</label>
            <input type="text" className="form-control" {...register('password')}/>
            <p className="text-danger">{errors.password && errors.password.message}</p> 
            <label htmlFor="" className="form-label">Confirm Password:</label>
            <input type="text" className="form-control" {...register('confirm_password')}/>
            <button type="submit">Send</button>
        </form>
    </div>
  )
}
