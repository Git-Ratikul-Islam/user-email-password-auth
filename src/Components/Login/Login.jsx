import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
      const [success, setSuccess] = useState('');
      const [userError, setUserError] = useState('');
      const emailRef = useRef(null);
      const handleLogin = e => {

            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            console.log(email, password);

            setUserError('');
            setSuccess('');


            // add validation
            signInWithEmailAndPassword(auth, email, password)
                  .then(result => {
                        console.log(result.user);
                        if (result.user.emailVerified) {
                              setSuccess('User log in Successfully');
                        }
                        else {
                              alert('Please verify your email');
                        }
                  })
                  .catch(error => {
                        console.log(error);
                        setUserError('Password or email is invalid');
                  });

      };

      const handleForgetPassword = () => {
            const email = emailRef.current.value;
            if (!email) {

                  console.log('pleaser provide a email', emailRef.current.value);
                  return;
            }
            else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
                  console.log('Please write a valid email');
                  return;
            }

            // send validation email
            sendPasswordResetEmail(auth, email)
                  .then(() => {
                        alert('please check your email');
                  })
                  .catch(error => {
                        console.log(error);
                  });

      };


      return (
            <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                              <h1 className="text-5xl font-bold">Login now!</h1>
                              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <div className="card-body">
                                    <form onSubmit={handleLogin}>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="text"
                                                      ref={emailRef}
                                                      placeholder="email"
                                                      name="email" className="input input-bordered" />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" name="password"
                                                      placeholder="password" className="input input-bordered" />
                                                <label className="label">
                                                      <a href="#" onClick={handleForgetPassword} className="label-text-alt link link-hover">Forgot password?</a>
                                                </label>
                                          </div>
                                          <div className="form-control mt-6">
                                                <button className="btn btn-primary">Login</button>
                                          </div>
                                    </form>
                                    {
                                          success && <p className="text-green-600">{success}</p>
                                    }
                                    {
                                          userError && <p className="text-red-600">{userError}</p>
                                    }
                                    <p>New to this website polease <Link to="/register" className="underline">Register</Link> </p>

                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;