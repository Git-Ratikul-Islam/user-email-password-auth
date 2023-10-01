

const Register = () => {
      const handleRegister = e => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            console.log(email, password);

      };
      return (
            <div>
                  <div className="mx-auto md:w-1/2">
                        <h2 className='text-3xl mb-8'>Please Register</h2>
                        <form onSubmit={handleRegister}>

                              <input className="mb-4 w-3/4 py-2 px-4" type="email" name="email" id="" placeholder="Email address" />
                              <br />
                              <input className="mb-4 w-3/4 py-2 px-4" type="password" name="password" placeholder="Password" />
                              <br />
                              <input className="mb-4 w-3/4 btn btn-secondary" type="submit" value="Register" />
                        </form>
                  </div>
            </div>
      );
};

export default Register;