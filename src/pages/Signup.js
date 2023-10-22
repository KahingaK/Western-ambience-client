import React, {useState} from 'react'
import { useNavigate, Link, NavLink } from 'react-router-dom';


function Signup({setToken}) {

  const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setIsLoading(true);
      setError(null);
  
      if (password === confirmPassword){
        // Perform sign up request
        fetch('http://localhost:3000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, email, password }),
        })
          .then((response) => {
            setIsLoading(false);
  
            if (response.ok) {
              response.json().then((data) => {
                console.log(data)
                setToken(data)
              
                navigate("/dashboard");
              });
            } else {
              response.json().then((err) => setError(err.errors));
            }
          })
          .catch(() => {
            setIsLoading(false);
            setError('An unexpected error occurred.');
          });
      }
      else {
        setError('Password Mismatch');
        setIsLoading(false);
      }
    };
  return (
    <section className="gradient-form min-h-screen bg-white dark:bg-white flex flex-col lg:flex-row">
  {/* Left side with the background image */}
  <div className="lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(your-image-url.jpg)' }}>
    <div className="w-full h-full bg-opacity-75 bg-black dark:bg-opacity-50" />
    <div className="container mx-auto h-full flex items-center justify-center">
      <div className="text-white text-center">
        <h3 className="text-4xl">Western Ambience Bliss Hotel</h3>
        <p className="text-xl font-tertiary mt-4">Foremost in Quality</p>
      </div>
    </div>
  </div>

  {/* Right side with the form */}
  <div className="lg:w-1/2 p-10">
    <div className="container h-full mx-auto">
      <div className=" p-4">
        <div className="container mx-auto">
          <div className="md:mx-6 md:p-12">
            <NavLink to="/">
              <div className="text-center">
                <h3 className="text-3xl font-primary text-accent">Western Ambience Bliss Hotel</h3>
              </div>
            </NavLink>
            <div className="text-center mt-6">
              <p className="text-xl font-tertiary">Join the community</p>
            </div>
            <form onSubmit={handleSubmit}>
              {error && <div className="text-red-500 font-bold text-center mt-4">{error}</div>}
              <div className="mb-4">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded border px-3 py-2 bg-transparent outline-none"
                  id="username"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded border px-3 py-2 bg-transparent outline-none"
                  id="email"
                  placeholder="E-mail"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded border px-3 py-2 bg-transparent outline-none"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full rounded border px-3 py-2 bg-transparent outline-none"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <div className="mb-2 text-center">
                <button
                  className="btn btn-secondary btn-sm max-w-[240px] mx-auto"
                  type="submit"
                  disabled={isLoading}
                  style={{ background: '#F9500D' }}
                >
                  {isLoading ? 'Loading...' : 'Sign Up'}
                </button>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p>Already have an account?</p>
                <Link
                  to="/login"
                  className="btn btn-secondary btn-sm max-w-[240px]"
                  style={{ background: '#F9500D' }}
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

 
 
  )
}

export default Signup
