import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from "react-router-dom";


const Register = () => {


      const [registerError, setRegisterError] = useState('');
      const [success, setSuccess] = useState('');
      const [showPassword, setShowPassword] = useState(false);


      const handleRegister = e => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            const accepted = e.target.terms.checked;
            const name = e.target.name.value;
            console.log(email, password, accepted, name);

            // reset error
            setRegisterError('');
            setSuccess('');


            if (password.length < 6) {
                  setRegisterError('Password should be at least 6 characters or longer');
                  return;
            }
            else if (!/[A-Z]/.test(password)) {
                  setRegisterError('Your password should have one upper letter character');
                  return;

            }
            else if (!accepted) {
                  setRegisterError('Please accepted our terms and condition');
                  return;
            }



            // create user
            createUserWithEmailAndPassword(auth, email, password)
                  .then(result => {
                        console.log(result.user);
                        setSuccess('User Created Successfully');

                        // send verification email 
                        sendEmailVerification(result.user)
                              .then(() => {
                                    alert('please check your email and verify your account');
                              });
                  })
                  .catch(error => {
                        console.log(error);
                        setRegisterError(error.message);




                  });

      };
      return (
            <div>
                  <div className="mx-auto md:w-1/2">
                        <h2 className='text-3xl mb-8'>Please Register</h2>
                        <form onSubmit={handleRegister}>

                              <input className="mb-4 w-full py-2 px-4" type="" name="name" required id="" placeholder="Your name" />
                              <br />
                              <input className="mb-4 w-full py-2 px-4" type="email" name="email" required id="" placeholder="Email address" />
                              <br />
                              <div className="relative ">
                                    <input className="mb-4 w-full border py-2 px-4" type={showPassword ? "text" : "password"}
                                          name="password"
                                          placeholder="Password" required />
                                    <span className="absolute top-3 right-3 left-" onClick={() => setShowPassword(!showPassword)}>{
                                          showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>
                                    }</span>
                              </div>
                              <br />
                              <div className="mb-4">
                                    <input type="checkbox" name="terms" id="terms" />
                                    <label className="ml-2" htmlFor="terms">Accept our terms and condition <a href=""></a></label>
                              </div>
                              <input
                                    className="mb-4 w-full btn btn-secondary"
                                    type="submit"
                                    value="Register" />
                        </form>
                        {
                              registerError && <p className="text-red-600">{registerError}</p>
                        }
                        {
                              success && <p className="text-green-600">{success}</p>
                        }
                        <p>Already have an account? please<Link to="/login" className="underline">Log in</Link> </p>

                  </div>
            </div>
      );
};

export default Register;