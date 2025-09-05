
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../repositories/firebase/config';

export const LoginComponent = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();



    const onSubmit = (data) => {
        console.log(data);
       signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/dashboard');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
         });

    };


    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title mb-4 text-center">Login</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        {...register('email', { required: true })}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        {...register('password', { required: true })}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Ingresar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;