import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../repositories/firebase/config";

export const LoginComponents = () => {
  const schema = yup.object({
    email: yup
      .string("Please enter only text")
      .email("Please enter a valid email")
      .required("Must enter something"),
    password: yup.string().required().min(8, "Please enter a min 8 char"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        
        
      });
  };

  return (
    <div>
      LoginComponents
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <label  className="form-label">
          Email:
        </label>
        <input type="text" className="form-control" {...register("email")} />
        <p>{errors.email && errors.email.message}</p>
        <label  className="form-label">
          Password:
        </label>
        <input type="text" className="form-control" {...register("password")} />
          <p className="text-danger">{errors.password && errors.password.message}</p> 

        <button type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
