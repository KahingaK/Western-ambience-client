import React from 'react'
import { useState, useContext } from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


export default function Login() {

  const { cookies, setToken, setCurrentUser } = useContext(UserContext)
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    // Perform login request
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        setIsLoading(false);
        
        if (response.ok) {
          response.json().then((data) => {
            console.log(data.user)
            cookies.set('token', data.token, { path: '/' });
            cookies.set('user', data.user, { path: '/' });
            navigate("/")
            setToken(data.token)
            setCurrentUser(data.user)
          });
        } else {
          response.json().then((err) => setError(err.errors));
        }

        // Handle successful login
      })
      .catch(() => {
       
        console.log(error);
      });
  };


  return (
    <section className="gradient-form min-h-screen bg-white dark:bg-white flex flex-col lg:flex-row">
    {/* Left side with the image */}
    <div className="lg:w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: 'url(your-image-url.jpg)' }}>
      {/* You can adjust the background image properties as needed */}
      <div className="w-full h-full bg-opacity-75 bg-black dark:bg-opacity-50" />
  
      {/* Inside this div, you can add any content or styling you want */}
      <div className="container mx-auto flex items-center justify-center h-full">
        <div className="text-white text-center">
          <h3 className="text-4xl font-primary">Welcome to Our Website</h3>
          <p className="text-xl font-tertiary mt-4">Discover the Bliss of Western Ambience</p>
        </div>
      </div>
    </div>
  
    {/* Right side with the form */}
    <div className="lg:w-1/2 flex items-center justify-center p-16">
      <div className="container mx-auto">
        <div className="md:mx-2 md:p-12 " >
          <NavLink to="/">
            <div className="text-center">
              <h3 className="text-3xl font-primary text-accent">Western Ambience Bliss</h3>
            </div>
          </NavLink>
          <form onSubmit={handleSubmit}>
            <div className="text-center mt-5">
              <p className="text-xl font-tertiary">Please login to your account</p>
            </div>
  
            {error && <div className="text-red-500 font-bold text-center mt-4">{error}</div>}
  
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded border px-3 py-2 bg-transparent outline-none"
                id="email"
                placeholder="Email"
                autoComplete="off"
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
  
            <div className="mb-12 pb-1 pt-1 text-center">
              <button
                className="btn btn-secondary btn-sm max-w-[240px] mx-auto"
                type="submit"
                disabled={isLoading}
                style={{ background: '#F9500D' }}
              >
                {isLoading ? 'Loading...' : 'Log In'}
              </button>
              <Link to="/reset" className="transition hover:text-accent mt-2 block">Forgot password?</Link>
            </div>
  
            <div className="flex items-center justify-center">
              <p className="mr-2">Don't have an account?</p>
              <Link
                to="/signup"
                type="button"
                className="btn btn-secondary btn-sm max-w-[240px] mx-auto"
                style={{ background: '#F9500D' }}
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  )
}
